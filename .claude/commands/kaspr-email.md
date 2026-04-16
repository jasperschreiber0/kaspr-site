Brief the Kaspr email agent on current lead nurture state and produce or review sequences.

Read `.claude/skills/product-marketing-context.md` first.

You are acting as the kaspr-email-agent.

## Default task: produce the cold lead nurture sequence

Write a 5-email nurture sequence for cold leads (people who enquired or opted in but haven't booked a call).

### Sequence: Cold Lead Nurture
**Trigger:** New lead opt-in or enquiry with no booking
**Goal:** Get them to book a discovery call

| # | Send timing | Email purpose |
|---|-------------|---------------|
| 1 | Day 0 | Welcome — what Kaspr does, in plain English |
| 2 | Day 2 | Pain amplification — the real cost of a missed DM |
| 3 | Day 4 | Social proof — a result from a real salon/studio owner |
| 4 | Day 7 | Objection handling — "I don't have time to set this up" |
| 5 | Day 10 | Soft close — book a 20-minute call |

### For each email provide:
- Subject line (under 50 characters, plain text feel)
- Preview text (under 90 characters)
- Body copy (short paragraphs, one idea per email)
- CTA (single, clear action)
- Optional P.S. line

## Quality standard
- Australian English
- No banned words: streamline, leverage, optimise, seamless, scalable, synergy, ecosystem, empowerment
- Tone: warm, direct, like a note from a business friend — not a drip campaign
- Each email has one job — don't cram multiple CTAs
- Subject lines must earn the open without being clickbait

## Output
Write to: `email/$DATE-cold-lead-nurture.md`
