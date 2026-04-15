import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand palette ──────────────────────────────────────────────
      colors: {
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#F0EDE8",
        },
        espresso: {
          DEFAULT: "#1A1008",
          light: "#2E2018",
        },
        coral: {
          DEFAULT: "#F2694B",
          dark: "#D4522E",
          light: "#FAC9BC",
        },
        sage: {
          DEFAULT: "#A8B89C",
          light: "#D4DFCF",
        },
        mid: "#7A6E66",
        border: "#E8E2DC",
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        "display-sm": ["clamp(40px, 6vw, 64px)", { lineHeight: "1.05" }],
        "display-md": ["clamp(52px, 8vw, 88px)", { lineHeight: "1.0" }],
        "display-lg": ["clamp(64px, 10vw, 112px)", { lineHeight: "0.95" }],
      },

      // ── Spacing / layout ───────────────────────────────────────────
      spacing: {
        section: "clamp(80px, 10vw, 120px)",
      },

      // ── Shadows ────────────────────────────────────────────────────
      boxShadow: {
        card: "0 2px 12px rgba(26, 16, 8, 0.06), 0 1px 3px rgba(26, 16, 8, 0.04)",
        "card-hover":
          "0 8px 32px rgba(26, 16, 8, 0.10), 0 2px 8px rgba(26, 16, 8, 0.06)",
        photo:
          "0 12px 40px rgba(26, 16, 8, 0.12), 0 4px 12px rgba(26, 16, 8, 0.08)",
      },

      // ── Border radius ──────────────────────────────────────────────
      borderRadius: {
        photo: "16px",
        pill: "999px",
      },

      // ── Animation ──────────────────────────────────────────────────
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
