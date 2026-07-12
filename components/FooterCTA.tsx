import { Reveal } from "@/components/Reveal";

export function FooterCTA() {
  return (
    <section className="bg-coral py-[clamp(80px,10vw,120px)] relative overflow-hidden">
      {/* Subtle radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-2xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6">
            Let&apos;s talk
          </p>
          <h2 className="font-serif text-display-md text-white leading-tight mb-5">
            Stop losing clients to an empty inbox.
          </h2>
          <p className="text-base text-white/65 leading-relaxed mb-10 max-w-md mx-auto">
            A 30-minute call to audit your current setup and show you exactly
            where Kaspr can help. No pitch. No pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/jasperschreiber0/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-coral text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all duration-300 ease-premium hover:bg-cream hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
            >
              Book a free call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:contact@kaspr.com.au"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Or email contact@kaspr.com.au
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
