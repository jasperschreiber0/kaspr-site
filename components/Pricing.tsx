import { Reveal } from "@/components/Reveal";

const PLANS = [
  {
    name: "Starter",
    price: "$1,500",
    monthly: "$297",
    note: "setup · then $297/mo",
    desc: "One platform. Stop letting enquiries die in your notifications.",
    features: [
      "DM auto-reply (Instagram or TikTok)",
      "Follow-up sequences",
      "Brand voice setup",
      "Pricing, availability & booking scripts",
      "Onboarding support",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    monthly: "$597",
    note: "setup · then $597/mo",
    desc: "Instagram + TikTok. Full pipeline, from first comment to booked appointment.",
    features: [
      "Everything in Starter",
      "Instagram + TikTok",
      "Comment-to-DM lead capture",
      "Follow-up sequences",
      "Content scheduling",
    ],
    cta: "Get started",
    featured: true,
    pill: "Most popular",
  },
  {
    name: "Scale",
    price: "$7,500",
    monthly: "$997",
    note: "setup · then $997/mo",
    desc: "Full done-for-you. Both platforms, bookings handled, reporting included.",
    features: [
      "Everything in Growth",
      "Appointment booking from DMs",
      "Calendar integration",
      "Ongoing agent management",
      "Monthly reporting call",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Pricing</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-xl">
            Setup once.{" "}
            <em className="italic text-coral">We manage it every day.</em>
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-md mb-14">
            Your agents run 24/7. The monthly fee covers ongoing management,
            monitoring, and support. No lock-in. All prices in AUD.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={`relative rounded-2xl p-8 flex flex-col gap-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-espresso shadow-[0_20px_60px_rgba(26,16,8,0.25)]"
                    : "bg-white border border-border shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* Most popular pill */}
                {plan.pill && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="bg-coral text-white text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full">
                      {plan.pill}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div>
                  <p
                    className={`text-2xs font-bold uppercase tracking-[0.18em] mb-4 ${
                      plan.featured ? "text-coral/80" : "text-coral"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className={`font-serif text-[clamp(48px,7vw,64px)] leading-none ${
                        plan.featured ? "text-cream" : "text-espresso"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-4 ${
                      plan.featured ? "text-cream/40" : "text-mid"
                    }`}
                  >
                    {plan.note}
                  </p>
                  <div
                    className={`h-px mb-5 ${
                      plan.featured ? "bg-white/10" : "bg-border"
                    }`}
                  />
                  <p
                    className={`text-[14px] leading-relaxed ${
                      plan.featured ? "text-cream/55" : "text-mid"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[13.5px] ${
                        plan.featured ? "text-cream/70" : "text-espresso/75"
                      }`}
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2.5 7L5.5 10L11.5 4"
                          stroke="#F2694B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://calendly.com/jasperschreiber0/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center text-sm font-bold py-3.5 rounded-full transition-colors mt-2 ${
                    plan.featured
                      ? "bg-coral text-white hover:bg-coral-dark"
                      : "border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-sm text-mid mt-8">
            Ask us about the Growth Pack — ReActivate and ReviewRunner —
            available as an add-on for existing clients.{" "}
            <a
              href="mailto:contact@kaspr.com.au"
              className="text-coral underline underline-offset-2 hover:text-coral-dark"
            >
              Get in touch
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
