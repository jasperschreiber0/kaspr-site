Run a full marketing audit on kaspr.com.au and save the report.

Read `.claude/skills/product-marketing-context.md` first.

You are acting as the kaspr-audit-agent.

## Run the audit
Use the `/market audit` skill on https://kaspr.com.au

This fires five parallel agents across:
1. SEO health
2. Copy quality and ICP relevance
3. CRO and conversion blockers
4. Social and ad consistency
5. Brand voice analysis

## Report requirements
Write the full audit report to: `reports/$DATE-full-audit.md`

The report must include:
1. Overall score (out of 100) with category breakdown
2. SEO health — title tags, meta descriptions, keyword coverage, local signals
3. Copy quality — headline strength, ICP relevance, CTA clarity, banned word check
4. CRO assessment — conversion blockers, social proof gaps, pricing page
5. Social + ads — landing page consistency
6. Brand voice — tone consistency across pages
7. Top 5 priority actions ranked by impact, each with a one-line fix

## Format
Use markdown with clear headings. Score each category out of 20. Bold the top 3 priority actions.

After saving, report the filename and overall score to the terminal.
