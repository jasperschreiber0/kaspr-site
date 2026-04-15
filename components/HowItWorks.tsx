import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    num: "01",
    label: "We audit your socials",
    title: "A 30-minute call, then we do the work",
    desc: "We look at where your enquiries are coming from, what&apos;s falling through, and how your audience behaves. You don&apos;t need to prepare anything — just show up.",
    detail: "Free, no commitment",
  },
  {
    num: "02",
    label: "We build your automations",
    title: "Custom flows built around your business",
    desc: "DM reply scripts written in your voice. Follow-up sequences timed to your booking cycle. Content scheduled around your busiest periods. All built and tested before anything goes live.",
    detail: "Done in about a week",
  },
  {
    num: "03",
    label: "You stop losing leads",
    title: "Your phone handles itself",
    desc: "Enquiries get answered, leads get followed up, and your feed keeps posting — without you opening the app. You&apos;ll notice clients mention they got a quick reply. That&apos;ll be Kaspr.",
    detail: "From day one of going live",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-dark py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">How it works</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-xl">
            Three steps.{" "}
            <em className="italic text-coral">None of them are yours.</em>
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-md mb-14">
            We do the setup. You approve it. Then it runs.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="group relative bg-white border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="font-serif text-[72px] leading-none text-border mb-6 group-hover:text-coral/20 transition-colors duration-300">
                  {step.num}
                </div>

                {/* Label */}
                <p className="text-2xs font-bold uppercase tracking-[0.16em] text-coral mb-3">
                  {step.label}
                </p>

                {/* Title */}
                <h3 className="font-serif text-xl text-espresso leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[14px] leading-relaxed text-mid flex-1"
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />

                {/* Detail tag */}
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-coral" />
                  <p className="text-[13px] font-medium text-espresso/60">
                    {step.detail}
                  </p>
                </div>

                {/* Connector arrow — visible on desktop */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-coral items-center justify-center shadow-md">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="https://calendly.com/jasperschreiber0/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-coral-dark transition-colors"
            >
              Start with a free audit
            </a>
            <p className="mt-4 text-sm text-mid">
              30 minutes. No sales pitch. Just a look at where you&apos;re losing leads.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
