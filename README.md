# Kaspr — kaspr.com.au

Marketing site for Kaspr, a social media automation agency for Australian beauty and wellness businesses.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Language:** TypeScript
- **Fonts:** Playfair Display + DM Sans via `next/font/google`
- **Icons:** Inline SVG

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build   # production build
npm start       # serve the build locally
```

Vercel-ready: push to main and Vercel will pick up `next build` + `next start` automatically.

Also includes `railway.toml` for Railway deployment.

## Project structure

```
app/
  layout.tsx        — Root layout (fonts, metadata)
  page.tsx          — Page composition
  globals.css       — Tailwind + custom CSS utilities

components/
  Nav.tsx           — Fixed nav, transparent → cream on scroll, mobile drawer
  Hero.tsx          — Full-bleed hero with DM phone mockup
  Marquee.tsx       — Scrolling ICP ticker
  Problem.tsx       — Three pain-point cards ("Sound familiar?")
  Features.tsx      — Five feature tiles on dark background
  SocialProof.tsx   — Founding-cohort pitch + product-behaviour facts (no testimonials until we have real ones)
  HowItWorks.tsx    — Three-step process
  Pricing.tsx       — Three tiers: Revive / Revive + Grow / Full Stack (setup $1,500 / $3,500 / $7,500 + monthly $297 / $597 / $997 AUD)
  FAQ.tsx           — Accordion FAQ
  FooterCTA.tsx     — Coral CTA section
  Footer.tsx        — Links, ABN, social icons
  MobileCTA.tsx     — Sticky bottom bar (mobile only)
  Reveal.tsx        — Scroll-triggered fade-in wrapper

tailwind.config.ts  — Design tokens (palette, fonts, shadows, spacing)
```

## Brand tokens

| Token | Value |
|-------|-------|
| `cream` | `#FAF8F5` |
| `espresso` | `#1A1008` |
| `coral` | `#F2694B` |
| `sage` | `#A8B89C` |
| Heading font | Playfair Display |
| Body font | DM Sans |

## Contact

contact@kaspr.com.au · ABN 41 615 978 808 · kaspr.com.au
