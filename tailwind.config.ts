import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand palette ──────────────────────────────────────────────
      // A warm rosewood/clay accent replaces the earlier bright orange-coral —
      // still warm and editorial, but reads as a beauty-brand pigment
      // (worn terracotta, dried rose) rather than a generic tech accent.
      // Contrast-checked against WCAG AA: white-on-DEFAULT 5.85:1,
      // DEFAULT-on-cream 5.48:1, bright-on-espresso 7.64:1.
      colors: {
        cream: {
          DEFAULT: "#FBF7F2",
          dark: "#F2EAE1",
        },
        espresso: {
          DEFAULT: "#1C1310",
          light: "#302019",
        },
        coral: {
          DEFAULT: "#A8425A",
          dark: "#7E2F41",
          light: "#E8B9C2",
          bright: "#DE8FA3",
        },
        sage: {
          DEFAULT: "#9CAA8C",
          light: "#D6DDCC",
          deep: "#5F6D52",
        },
        mid: "#7A6E66",
        border: "#EAE0D8",
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        "display-sm": [
          "clamp(40px, 6vw, 64px)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
        "display-md": [
          "clamp(52px, 8vw, 88px)",
          { lineHeight: "1.0", letterSpacing: "-0.015em" },
        ],
        "display-lg": [
          "clamp(64px, 10vw, 112px)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
      },

      // ── Spacing / layout ───────────────────────────────────────────
      spacing: {
        section: "clamp(80px, 10vw, 120px)",
      },

      // ── Shadows ────────────────────────────────────────────────────
      boxShadow: {
        card: "0 2px 12px rgba(28, 19, 16, 0.06), 0 1px 3px rgba(28, 19, 16, 0.04)",
        "card-hover":
          "0 8px 32px rgba(28, 19, 16, 0.10), 0 2px 8px rgba(28, 19, 16, 0.06)",
        photo:
          "0 12px 40px rgba(28, 19, 16, 0.12), 0 4px 12px rgba(28, 19, 16, 0.08)",
        lift: "0 10px 24px rgba(168, 66, 90, 0.22)",
      },

      // ── Border radius ──────────────────────────────────────────────
      borderRadius: {
        photo: "16px",
        pill: "999px",
      },

      // ── Motion ─────────────────────────────────────────────────────
      // A quiet, confident easing curve (used across hovers + reveals)
      // instead of the default linear/ease pairing.
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "chip-in": {
          "0%": { opacity: "0", transform: "translateY(6px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "chip-in": "chip-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
