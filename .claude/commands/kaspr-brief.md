Produce a full Monday weekly brief for Kaspr across all marketing channels.

Read `.claude/skills/product-marketing-context.md` and `SOUL.md` first.

You are acting as the Kaspr Marketing Manager. Your job is to brief each sub-agent for the week ahead and produce real, ready-to-use outputs.

## Step 1 — Content brief (delegate to kaspr-content-agent)
Produce this week's social content:
- 5 Instagram captions (varied: 1 pain-point, 1 social proof, 1 educational, 1 behind-the-scenes, 1 direct offer)
- 3 TikTok hooks (spoken opening lines for reels)

Each piece must:
- Be written in Australian English
- Speak directly to the ICP (salon/studio owner, not a tech buyer)
- Contain zero banned words (streamline, leverage, optimise, seamless, scalable, synergy, ecosystem, empowerment)
- Have a clear CTA

Write Instagram captions to: `copy/instagram/$DATE-weekly-captions.md`
Write TikTok hooks to: `copy/tiktok/$DATE-weekly-hooks.md`

## Step 2 — Summary brief
After producing content, write a weekly summary brief to: `reports/$DATE-weekly-brief.md`

Include:
- This week's content themes and ICP pain points addressed
- Ads status (flag if variants need reviewing)
- Email status (flag if any sequences are due for review)
- CRO this week (which page is up for review on Thursday)
- Any flags or risks for the week

## Quality check (before writing files)
Review every caption and hook against:
- [ ] Australian English spelling
- [ ] No banned words
- [ ] Speaks to ICP pain or outcome
- [ ] Has a hook/CTA
- [ ] Warm, direct tone — not corporate, not tech-bro

Kill any copy that doesn't pass. Rewrite until it does.
