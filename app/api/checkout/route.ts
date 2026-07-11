import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const PRICE_IDS: Record<string, string | undefined> = {
  grow: process.env.STRIPE_PRICE_GROW,
  full_stack: process.env.STRIPE_PRICE_FULL_STACK,
};

/**
 * GET /api/checkout?tier=grow|full_stack
 *
 * Creates a Stripe Checkout Session for the requested tier's setup fee
 * and redirects the browser straight to Stripe. Session completion is
 * handled entirely by kaspr-agent1's /stripe-webhook — this route's only
 * job is to exist, since nothing previously linked to Stripe at all.
 */
export async function GET(req: NextRequest) {
  const tier = req.nextUrl.searchParams.get("tier");

  if (!tier || !(tier in PRICE_IDS)) {
    return NextResponse.json({ error: "Unknown or missing tier" }, { status: 400 });
  }

  const priceId = PRICE_IDS[tier];
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey || !priceId) {
    console.error(
      `[checkout] Not configured — STRIPE_SECRET_KEY or price ID for tier "${tier}" is missing.`
    );
    return NextResponse.json(
      { error: "Checkout isn't set up yet — book a call instead." },
      { status: 503 }
    );
  }

  const stripe = new Stripe(secretKey);
  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      metadata: { tier },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a session URL");
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    console.error("[checkout] Failed to create session:", err);
    return NextResponse.json(
      { error: "Couldn't start checkout — please try again or book a call." },
      { status: 500 }
    );
  }
}
