import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Must match agent2's scrapers.py NICHE_HASHTAGS and agent3's
// scheduler.js NICHE_SCHEDULE keys — a client created with a niche
// outside this list silently falls back to DEFAULT_HASHTAGS/
// DEFAULT_SCHEDULE in both agents, which mostly works but loses the
// niche-tuned posting cadence and hashtags.
const NICHES = [
  "beauty_salon",
  "nail_studio",
  "pilates_yoga",
  "allied_health",
  "cafe_brunch",
  "boutique_retail",
  "pet_grooming",
  "personal_training",
  "wellness",
];

function supabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string
  );
}

/**
 * POST /dashboard/api/clients
 * Body: { slug, businessName, niche, icp, tone, goals, competitors?,
 *          whatsappNumbers: string[], brandVoice?, platforms: string[] }
 *
 * Creates the clients row and returns the Instagram/TikTok OAuth connect
 * links so whoever's onboarding this client can send them immediately —
 * closing the second gap found alongside this one (nothing generated or
 * sent these links before either).
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    slug,
    businessName,
    niche,
    icp,
    tone,
    goals,
    competitors,
    whatsappNumbers,
    brandVoice,
    platforms,
  } = body;

  if (!slug || !businessName || !niche || !icp || !tone || !goals) {
    return NextResponse.json(
      { error: "slug, businessName, niche, icp, tone, and goals are required" },
      { status: 400 }
    );
  }

  if (!NICHES.includes(niche)) {
    return NextResponse.json(
      {
        error: `niche must be one of: ${NICHES.join(", ")} — these are the only niches agent2/agent3 have scheduling + hashtag config for. Anything else falls back to generic defaults.`,
      },
      { status: 400 }
    );
  }

  if (!Array.isArray(whatsappNumbers) || whatsappNumbers.length === 0) {
    return NextResponse.json(
      { error: "whatsappNumbers must be a non-empty array — agent1 can't identify this client's messages without at least one" },
      { status: 400 }
    );
  }

  const supabase = supabaseAdmin();

  const { data, error } = await supabase
    .from("clients")
    .insert({
      slug,
      business_name: businessName,
      niche,
      icp,
      tone,
      platforms: Array.isArray(platforms) ? platforms : [],
      goals,
      competitors: competitors || null,
      whatsapp_numbers: whatsappNumbers,
      brand_voice: brandVoice || null,
      active: true,
    })
    .select()
    .single();

  if (error) {
    console.error("[clients] Insert failed:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Base URLs for the two agents' OAuth flows aren't discoverable from
  // kaspr-site — they're separate Railway services. Configure these once
  // and every future client gets working connect links automatically.
  const agent1Base = process.env.AGENT1_BASE_URL || "";
  const agent3Base = process.env.AGENT3_BASE_URL || "";

  return NextResponse.json({
    client: data,
    connectLinks: {
      instagram: agent1Base
        ? `${agent1Base}/auth/instagram/connect?client_id=${data.id}`
        : null,
      tiktok: agent3Base ? `${agent3Base}/auth/tiktok?client_id=${data.id}` : null,
    },
  });
}
