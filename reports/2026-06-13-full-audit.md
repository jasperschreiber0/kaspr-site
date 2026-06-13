# Kaspr.com.au — Full Marketing Audit
**Date:** 13 June 2026
**Auditor:** kaspr-audit-agent (critical messaging + conversion audit)
**Scope:** Live Next.js site (app/ + components/), legacy `index.html`, social copy, brand context
**Note:** kaspr.com.au returned HTTP 403 to automated fetch, so this audit was run against the deployed source in this repo — which is more complete anyway. The 403 itself is flagged as a finding (see SEO).

---

## Overall Score: 63 / 100

| Category | Score |
|---|---|
| SEO health | 7 / 20 |
| Copy quality & ICP relevance | 15 / 20 |
| CRO & conversion blockers | 11 / 20 |
| Social + ads consistency | 14 / 20 |
| Brand voice | 16 / 20 |

**Verdict in one line:** The copy is genuinely good and tightly niched — but the page argues for one product (DM automation) and then sells a different one (client reactivation), every conversion path funnels into a single personal Calendly link, and the site is close to invisible to Google. Fix the offer narrative and conversion plumbing before spending a dollar on traffic.

---

## 0. Strategic note: the ICP question (read this first)

The audit brief described Kaspr's ICP as broad Australian SMBs — trades, construction, fitness, clinics, 5–50 staff. **The live site does not target that ICP, and it shouldn't.** The site is deliberately niched to female owner-operators in beauty/wellness (nail salons, lash bars, pilates, skin clinics), which matches `product-marketing-context.md` exactly.

This niching is the single strongest thing about the site. "You're booked solid. Your DMs aren't." means nothing to a builder and everything to a salon owner. Do **not** broaden the copy to chase trades — a generic "AI automation for SMBs" page would compete with every agency in the country and convert worse for everyone. If trades/construction is a real expansion target, build a separate verticalised landing page (`/trades`) with its own pain scenes (missed calls on site, quote follow-up). One page cannot serve both buyers.

What *is* a problem: internal documents disagree with each other and with the site (see §6). Pick one source of truth.

---

## 1. SEO Health — 7/20

This is the weakest area. The site is a well-designed single page that Google has almost no reason to rank.

**Critical issues:**

- **Possible crawler block (verify immediately).** The site returned HTTP 403 to a non-browser fetch. If Railway or a WAF is blocking unknown user agents, it may be blocking Googlebot too — which would make every other SEO point moot. Test with Google Search Console's URL Inspection today.
- **Title tag has zero keyword value.** `Kaspr — Your DMs answered. Your feed filled.` is a great hero line and a useless title tag. Nobody searches that. Should be: `Kaspr — DM & Social Media Automation for Australian Salons & Studios`.
- **No robots.txt, no sitemap.xml.** `public/` contains only the favicon.
- **No OG image.** `twitter.card` is set to `summary_large_image` but no image exists anywhere. Every share on Instagram DMs, iMessage, or LinkedIn renders as a bare link — for a business that sells *social media presence*. Embarrassing and instantly fixable.
- **No structured data.** No `LocalBusiness`, no `Service`, no `FAQPage` JSON-LD despite having a perfect FAQ section for it.
- **Single page = no keyword coverage.** There are no pages targeting what the ICP actually searches: "salon social media manager", "instagram auto reply for business", "salon marketing australia", "how to get more nail clients". The verticals in the marquee (nail salons, pilates studios, lash bars…) are an obvious programmatic page set — `/for/nail-salons`, `/for/pilates-studios` — that doesn't exist.
- **Weak local signals.** `en_AU`, AUD pricing, and an ABN in the footer are good. But no city/region anywhere in indexable copy, no Google Business Profile link, no NAP. For a service sold to local businesses, Kaspr itself has no local footprint.

**What's fine:** one `h1`, sensible heading hierarchy, `metadataBase` set, `robots: index, follow`, legal pages on real routes (`/privacy`, `/terms`).

---

## 2. Copy Quality & ICP Relevance — 15/20

The strongest category. This copy was clearly written by someone who knows the customer.

**What works (keep all of this):**

- **The Problem section is excellent.** "A new client DMs asking about your lash lift pricing. You see it the next morning. She's already booked somewhere else." — specific, time-stamped, in her life. This is the best section on the page.
- Pain language mirrors the ICP's own words from the context doc almost verbatim. Rare and valuable.
- "Three steps. None of them are yours." / "Five jobs, quietly taken off your plate." — strong, confident section headers.
- The honest social proof section ("No fake reviews here. Just the honest deal.") is a brave, differentiated play that fits the anti-bro voice.
- FAQ answers real objections ("Will it actually sound like me?", "What if I want to reply myself?") in plain language.

**What's weak:**

- **The hero subhead is a wasted line.** It repeats the meta title verbatim: "Your DMs answered. Your feed filled. While you're on the floor." The headline earned attention; the subhead's job is specificity and proof, and it delivers neither. (Rewrite in §7.)
- **"You're booked solid. Your DMs aren't."** is clever but takes a beat to parse — "my DMs aren't… booked?" It also only speaks to businesses that are already full, excluding the owner who wants *more* bookings. Test against a plainer money line.
- **Unsourced scare stat.** "Most studios lose 20–30% of their clients every quarter to silence." Where's that from? Pragmatic buyers smell invented numbers, and this one sits directly above the prices. Source it or cut it.
- **Feature names nobody asked for.** "ReActivate", "ReviewRunner" — two sub-brands inside a three-tier pricing table on a single-product site. Each new proper noun is a comprehension tax. Say "lapsed client recovery" and "automated Google review requests".
- **Banned-word check: PASS** on the live site (only hits are a code comment and the legacy `index.html`'s "optimisation").

---

## 3. CRO Assessment — 11/20

**The big one — the offer narrative is split in half.** The hero, problem section, and features all argue: *you're losing leads in your DMs, Kaspr answers them.* Then the pricing section changes the subject: the headline is "Recover the revenue you're quietly losing," and the entry tier (**Revive, $750**) is **lapsed-client reactivation via WhatsApp/SMS, missed-call recovery, and Google reviews — none of which appear anywhere above the pricing section.** A visitor who was nodding along about DMs hits pricing and the cheapest way to buy is a product she hasn't been sold. Conversely, the DM auto-reply she *was* sold starts at $1,750 (Revive + Grow). This is the #1 conversion leak on the page. Either introduce reactivation/missed-call/reviews as features before pricing, or restructure tiers so the entry tier matches the hero promise.

**Other blockers, in priority order:**

1. **The hero has no conversion CTA.** Primary button is "See how it works" (anchor scroll), secondary is "See pricing". The actual conversion action — book a call — doesn't appear until the Features section. For warm traffic clicking through from Instagram, you're adding scroll-friction before the ask.
2. **Single conversion path, and it's a personal Calendly.** Every CTA on the page → `calendly.com/jasperschreiber0/new-meeting`. (a) A 30-minute call is a high-commitment first step for a time-poor owner — the entire premise of the product is that she has no time. (b) There is no low-commitment fallback: no email capture, no "DM us 'start'" (which your own Instagram captions use!), no lead magnet. (c) `jasperschreiber0` in the URL undercuts the polish of the site — use a `kaspr.com.au/call` redirect or a Calendly team URL.
3. **The Founding Clients counter reads "10 / 10 remaining" — broadcasting zero customers.** Combined with "Kaspr is new" in the social proof section, the page tells a careful reader: *nobody has bought this yet.* The honesty strategy is right; the scoreboard is not. Drop the live counter until ≥3 spots are filled; say "Founding intake open — first 10 studios" instead.
4. **No risk reversal where it matters.** The 30-day guarantee exists but is buried as a one-line footnote under the pricing grid, and only covers Revive. Pull it into the pricing cards.
5. **No proof of the product itself.** For a "will it sound like me?" objection this strong, the cheapest proof is a 30-second screen recording of a real DM conversation, or an interactive demo ("DM our test account and watch it reply"). The animated phone mockup is good; real receipts are better.
6. **Good things to keep:** transparent pricing (rare for agencies, genuinely differentiating), the mobile sticky CTA, "No pitch. No pressure." microcopy, outcome-led tier headlines.

---

## 4. Social + Ads Consistency — 14/20

- **Message match is strong.** The Instagram captions ("You saw the DM at 11pm. By then she'd already booked somewhere else.") and TikTok hooks ("She messaged at 9pm. You saw it at midnight.") are the same pain, same voice, same scenes as the site's Problem section. Someone clicking from social lands on a page that sounds like the post. Good.
- **CTA mismatch.** Social copy drives "DM us 'start'" — a DM-based, low-friction action (and a live demo of the product itself). The site only offers a 30-minute Calendly call. The funnel changes its ask mid-stream. Add a DM-style entry point on the site, or align social CTAs to the audit call.
- **The social copy never mentions reactivation, reviews, or missed-call recovery** — the entire Revive tier. Marketing is selling Product A; the entry-level SKU is Product B.
- **Caption 2 claims a Brisbane nail salon client with results** ("losing 4–5 bookings a week… she's not losing them anymore") while the website says "Kaspr is new… we're not going to pad this page with invented testimonials." If the Brisbane client is real, she belongs on the website. If she isn't, that caption contradicts your stated integrity position and needs to go.
- **Legacy risk:** `index.html` at repo root is an entirely different site ("Your staff post. We handle it.", different tiers, a FAQ that flatly says "Is there a monthly fee? No." while the page above it lists monthly fees). If this file is ever served (or indexed from an old deploy), it actively contradicts the live offer. Delete it or move it out of the deploy path.

---

## 5. Brand Voice — 16/20

- **Consistent and distinctive.** Warm, direct, Australian, zero tech jargon — "while you're on the floor", "off the tools", "Questions we actually get asked." The anti-tech-bro positioning from the context doc is executed faithfully across hero, features, FAQ, and social.
- Banned words: clean on the live site.
- Australian English: consistent; AUD everywhere; `en_AU` locale set.
- **Two inconsistencies:**
  - **Email split-brain:** site uses `contact@kaspr.com.au` (FAQ, footer, footer CTA); onboarding docs and privacy policy use `hello@kaspr.com.au`. Pick one, alias the other.
  - Tier names differ across every artifact: site says Revive / Revive + Grow / Full Stack; `product-marketing-context.md` says Starter / Growth / Scale at $1,500/$4,000/$9,500; legacy `index.html` says Starter / Growth / Scale at different prices again. Internal docs should match the live offer.

---

## 6. Internal Consistency (housekeeping that affects revenue)

| Artifact | Offer | Tiers | Monthly fee? | Email |
|---|---|---|---|---|
| Live site (Next.js) | DM automation + reactivation | Revive / R+G / Full Stack — $750/$1,750/$3,750 founding setup | Yes ($148–$498 founding) | contact@ |
| `index.html` (legacy) | WhatsApp → content posting | Starter / Growth / Scale — $1,500/$3,500/$7,500 | FAQ says **no**, cards say **yes** | hello@ |
| `product-marketing-context.md` | DM automation | Starter / Growth / Scale — $1,500/$4,000/$9,500 | not stated | — |
| Onboarding docs | content + DM hybrid | Growth Pack, Full Stack | — | hello@ |

Anyone (or any agent) producing marketing from these docs will produce contradictions. Update the context doc to match the live site and delete or archive `index.html`.

---

## 7. Improvements (the deliverables)

### 7a. Rewritten homepage hero (high-conversion version)

> **Eyebrow:** DM & booking automation · For Australian salons & studios
>
> **H1:** The 11pm DM gets answered. *And booked.*
>
> **Subhead:** Kaspr replies to your Instagram and TikTok enquiries in under 60 seconds — with your prices, your availability, your voice — then books them straight into your calendar. Quiet leads get followed up. Lapsed clients get brought back. You stay on the floor.
>
> **Primary CTA:** Get a free DM audit → *(microcopy: 30 minutes. We'll show you exactly which leads you're losing. No pitch.)*
>
> **Secondary CTA:** See pricing ↓

Why this works harder than the current version: the headline keeps the late-night-DM scene (the strongest pain) but resolves it with the money outcome ("booked"), the subhead carries specifics instead of echoing the title, reactivation is seeded before pricing so the Revive tier doesn't ambush anyone, and the primary CTA is the conversion action reframed as a diagnostic (audit) rather than a sales call.

### 7b. Three alternative value propositions (test against each other)

1. **Speed-to-lead:** "The salon that replies first gets the booking. Kaspr makes sure it's yours." — Sub: "Instant DM replies, automatic follow-ups, and direct-to-calendar booking on Instagram and TikTok."
2. **Revenue recovery:** "There's a month of bookings sitting in your unanswered DMs and lapsed-client list. Kaspr goes and gets it." — Sub: "Missed enquiries answered, quiet clients re-engaged, happy ones asked for reviews. Measured in rebookings, not likes."
3. **The always-on front desk:** "A front desk that never closes — for less than one shift a week." — Sub: "Kaspr answers enquiries, follows up, fills your feed and your calendar. You approve everything; you do none of it."

### 7c. Five specific copy changes that would lift conversion

1. **Hero CTA:** swap "See how it works" for "Get a free DM audit" (Calendly link, reframed). Keep "See how it works" as the secondary. The first button a visitor sees should be the action you want.
2. **Bridge the offer gap:** add one feature row (or a short strip above Pricing) for reactivation/reviews/missed-call — e.g. *"06 — Lapsed client recovery: Anyone who hasn't booked in 90 days hears from you again. Most studios see replies in the first week."* Then the Revive tier lands as the obvious entry point instead of a surprise.
3. **Replace the unsourced stat** "Most studios lose 20–30% of their clients every quarter" with a concrete, verifiable framing: *"Count the clients you haven't seen in 90 days. That list is revenue — Revive messages every one of them."*
4. **Reframe the founding counter:** drop "10/10 remaining". Use: *"Founding intake — first 10 studios get 50% off setup and monthly, locked for life, in exchange for a testimonial."* Re-introduce a counter only once it shows momentum (≤7 remaining).
5. **Move the guarantee into the Revive card** as a feature line: *"30-day guarantee — if lapsed clients aren't replying in your first 30 days, the next month is free."* Risk reversal belongs next to the price, not in a footnote. (While in there: fix `contact@` vs `hello@`, and mask the Calendly URL behind `kaspr.com.au/call`.)

### 7d. One repositioning suggestion

**Reposition from "social media automation" to "missed-revenue recovery for salons and studios" — and make Revive the public wedge.** The current category label ("social media automation") invites comparison with $49/mo SaaS schedulers and DIY ManyChat setups, which makes $1,750 setup look expensive. The reactivation offer is the better business: it's the cheapest tier, it has a guarantee, results are provable in 30 days ("we messaged 180 lapsed clients, 22 rebooked = $1,900"), and it generates the case studies and testimonials the site currently lacks. Lead with "we recover the bookings you're already losing — from unanswered DMs, missed calls, and clients who drifted off," and sell content/posting as the keep-it-growing upsell. Money recovered is a category of one; "social media automation" is a category of thousands.

---

## Top 5 Priority Actions

1. **Fix the hero→pricing offer mismatch — introduce reactivation/reviews/missed-call before the pricing section so the Revive entry tier matches the story the page tells.** (Highest-impact copy change; ~1 hour of work.)
2. **Verify Googlebot isn't behind the 403, then ship the SEO basics: keyword-bearing title tag, OG image, robots.txt, sitemap, FAQ + LocalBusiness schema.** (Without this, the site only exists for people who already have the link.)
3. **Make the hero CTA a conversion action ("Get a free DM audit") and add a low-friction fallback path (email capture or DM entry point) so Calendly isn't the only door.**
4. Remove the "10/10 spots remaining" counter and the unsourced 20–30% churn stat; move the guarantee into the pricing card. (Trust repairs, 30 minutes.)
5. Delete or archive the legacy `index.html`, reconcile tier names/prices/emails across `product-marketing-context.md` and onboarding docs, and resolve the Brisbane-client contradiction between Instagram Caption 2 and the site's "no invented testimonials" stance.

---

*Audit complete. Re-run after priority actions ship — expected score impact: +15–20 points, primarily from SEO (7→14) and CRO (11→17).*
