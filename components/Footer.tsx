function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 26" fill="none" aria-hidden>
      <path
        d="M19.5 4.5A4.5 4.5 0 0115 0h-3.5v17.5a2.5 2.5 0 11-2.5-2.5c.28 0 .54.04.79.11V11.5a6.5 6.5 0 106.21 9V10a11 11 0 006.5 2.12V8.62A6.5 6.5 0 0119.5 4.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex-shrink-0">
            <p className="font-serif text-2xl text-cream mb-2">kaspr</p>
            <p className="text-sm text-cream/35 leading-relaxed max-w-[200px]">
              Social media automation for Australian beauty &amp; wellness businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 flex-1">
            <div>
              <p className="text-2xs font-bold uppercase tracking-[0.18em] text-cream/25 mb-4">
                Navigate
              </p>
              <ul className="space-y-3">
                {[
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-cream/45 hover:text-cream transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-2xs font-bold uppercase tracking-[0.18em] text-cream/25 mb-4">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@kaspr.com.au"
                    className="text-sm text-cream/45 hover:text-cream transition-colors"
                  >
                    contact@kaspr.com.au
                  </a>
                </li>
                <li>
                  <a
                    href="https://kaspr.com.au"
                    className="text-sm text-cream/45 hover:text-cream transition-colors"
                  >
                    kaspr.com.au
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-2xs font-bold uppercase tracking-[0.18em] text-cream/25 mb-4">
                Socials
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/kasprhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaspr on Instagram"
                  className="w-9 h-9 rounded-full border border-white/[0.12] flex items-center justify-center text-cream/45 hover:text-cream hover:border-white/30 transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://tiktok.com/@kasprhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaspr on TikTok"
                  className="w-9 h-9 rounded-full border border-white/[0.12] flex items-center justify-center text-cream/45 hover:text-cream hover:border-white/30 transition-all"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-8">
          <p className="text-xs text-cream/25">
            &copy; {currentYear} Kaspr &middot; ABN 41 615 978 808 &middot; kaspr.com.au
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
