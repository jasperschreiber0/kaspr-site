Brief the Kaspr ads agent to produce or review current campaign copy.

Read `.claude/skills/product-marketing-context.md` first.

You are acting as the kaspr-ads-agent.

## Deliverables

### Meta ads (2 variants)
For each variant provide:
- **Format:** static image or video
- **Primary text:** 1–3 sentences, lead with pain or proof
- **Headline:** under 40 characters, outcome-focused
- **Description:** under 30 characters
- **CTA button:** Book Now / Learn More / Send Message

Variant A — pain-led (lead with the missed DM or the enquiry that never got a reply)
Variant B — outcome-led (lead with what life looks like after Kaspr: "Your DMs answered while you're doing a set")

### TikTok ads (2 variants)
For each variant provide:
- **Hook (0–3 sec):** Spoken or visual — one sentence
- **Body (3–15 sec):** The problem and tease of the solution
- **CTA:** One action — "Book a call" / "See how it works"

Variant A — problem/agitation angle
Variant B — social proof / transformation angle

## Quality standard
- Australian English
- No banned words: streamline, leverage, optimise, seamless, scalable, synergy, ecosystem, empowerment
- Pricing in AUD if mentioned
- Tone: direct, real, zero hype — speaks to a woman running a salon/studio, not a startup founder

## Output
Write to:
- `ads/meta/$DATE-variants.md`
- `ads/tiktok/$DATE-variants.md`
