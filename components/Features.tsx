import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    title: "DM auto-reply",
    desc: "Answers booking questions, pricing enquiries, and availability — the moment someone messages you. On Instagram and TikTok, any time of day.",
    detail: "Never miss a warm lead again",
    emoji: "💬",
  },
  {
    title: "Comment-to-conversation",
    desc: "When someone comments \"how much?\" or \"where are you located?\" on your post, Kaspr slides into their DMs automatically and starts the booking conversation.",
    detail: "Turn passive viewers into paying clients",
    emoji: "💌",
  },
  {
    title: "Follow-up sequences",
    desc: "If an enquiry goes quiet, Kaspr follows up at 24 hours, 3 days, and 7 days. Warm, on-brand messages — not generic reminders.",
    detail: "No more leads falling through the cracks",
    emoji: "🔁",
  },
  {
    title: "Content scheduling",
    desc: "Pre-approve captions and reels, then Kaspr posts them at the right time for your audience. Your feed stays consistent without you touching the app.",
    detail: "Post 4x a week with zero daily effort",
    emoji: "📅",
  },
  {
    title: "Appointment booking",
    desc: "Kaspr books directly into your calendar from the DM conversation. Clients pick a time, confirm, and get a reminder — all without you typing a word.",
    detail: "From DM to booked in under two minutes",
    emoji: "📍",
  },
];

export function Features() {
  return (
    <section className="bg-espresso py-[clamp(80px,10vw,120px)] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(242,105,75,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5 [&]:text-coral/80 [&_::before]:bg-coral/80">
            What Kaspr does
          </p>
          <h2 className="font-serif text-display-sm text-cream leading-tight mb-4 max-w-xl">
            Five things running in the background{" "}
            <em className="italic text-coral/80">while you work.</em>
          </h2>
          <p className="text-base text-cream/45 leading-relaxed max-w-md mb-14">
            No new apps for your team to learn. No social media manager to
            brief. Just automations that handle the parts that were slipping
            through.
          </p>
        </Reveal>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <div className="bg-espresso-light h-full p-8 flex flex-col gap-4 group hover:bg-espresso transition-colors duration-300 border border-white/[0.06]">
                <span className="text-3xl" role="img" aria-label={feature.title}>
                  {feature.emoji}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-cream mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-cream/50">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/[0.07]">
                  <p className="text-2xs font-bold uppercase tracking-[0.14em] text-coral/70">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* CTA tile — fills grid */}
          <Reveal delay={FEATURES.length * 60}>
            <div className="bg-coral h-full p-8 flex flex-col justify-between min-h-[200px]">
              <p className="font-serif text-xl text-white leading-snug">
                Ready to see it in action?
              </p>
              <a
                href="https://calendly.com/jasperschreiber0/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-coral bg-white px-5 py-3 rounded-full self-start hover:bg-cream transition-colors"
              >
                Book a free call
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
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
