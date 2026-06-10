import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    num: "01",
    title: "DM auto-reply",
    desc: "Answers booking questions, pricing enquiries, and availability — the moment someone messages you. On Instagram and TikTok, any time of day.",
    detail: "Never miss a warm lead again",
  },
  {
    num: "02",
    title: "Comment-to-conversation",
    desc: "When someone comments \"how much?\" or \"where are you located?\" on your post, Kaspr slides into their DMs automatically and starts the booking conversation.",
    detail: "Turn passive viewers into paying clients",
  },
  {
    num: "03",
    title: "Follow-up sequences",
    desc: "If an enquiry goes quiet, Kaspr follows up at 24 hours, 3 days, and 7 days. Warm, on-brand messages — not generic reminders.",
    detail: "No more leads falling through the cracks",
  },
  {
    num: "04",
    title: "Content scheduling",
    desc: "Pre-approve captions and reels, then Kaspr posts them at the right time for your audience. Your feed stays consistent without you touching the app.",
    detail: "Post 4x a week with zero daily effort",
  },
  {
    num: "05",
    title: "Appointment booking",
    desc: "Kaspr books directly into your calendar from the DM conversation. Clients pick a time, confirm, and get a reminder — all without you typing a word.",
    detail: "From DM to booked in under two minutes",
  },
];

export function Features() {
  return (
    <section className="bg-espresso py-[clamp(80px,10vw,120px)] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(242,105,75,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="md:flex md:items-end md:justify-between md:gap-12 mb-16">
            <div>
              <p className="section-tag mb-5 [&]:text-coral/80 [&_::before]:bg-coral/80">
                What Kaspr does
              </p>
              <h2 className="font-serif text-display-sm text-cream leading-tight max-w-xl">
                Five jobs, quietly taken off your plate.
              </h2>
            </div>
            <p className="text-base text-cream/45 leading-relaxed max-w-xs mt-6 md:mt-0 md:text-right">
              No new apps to learn. No social media manager to brief. Just the
              parts that were slipping through, handled.
            </p>
          </div>
        </Reveal>

        {/* Editorial ledger — numbered rows, not cards */}
        <div className="border-t border-white/10">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <div className="group grid grid-cols-12 gap-x-4 md:gap-x-8 py-8 md:py-10 border-b border-white/10">
                <span className="col-span-2 md:col-span-1 font-serif text-lg md:text-xl text-coral/60 pt-1">
                  {feature.num}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-serif text-2xl md:text-[28px] leading-snug text-cream group-hover:text-coral transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="col-span-10 col-start-3 md:col-span-6 md:col-start-7 mt-3 md:mt-1">
                  <p className="text-[15px] leading-relaxed text-cream/50">
                    {feature.desc}
                  </p>
                  <p className="mt-3 text-2xs font-bold uppercase tracking-[0.14em] text-coral/60">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA — a line, not a grid cell */}
        <Reveal>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href="https://calendly.com/jasperschreiber0/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-espresso bg-cream px-7 py-3.5 rounded-full hover:bg-coral hover:text-white transition-colors self-start"
            >
              Book a free call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="text-sm text-cream/40">
              30 minutes to see it running. No pitch.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Wave into next section */}
      <div className="wave-divider mt-[clamp(80px,10vw,120px)]">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-10 md:h-16">
          <path
            d="M0,24 C360,64 720,0 1080,48 C1260,64 1360,32 1440,24 L1440,64 L0,64 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}
