import { Reveal } from "@/components/Reveal";

const PLANS = [
  {
    name: "Kaspr",
    outcome: "Your feed stays active and your enquiries keep moving.",
    setup: "$3,500",
    setupFounding: "$900",
    monthly: "$597",
    monthlyFounding: "$200",
    features: [
      "Send photos, videos and ideas — we turn them into posts.",
      "Your Instagram and TikTok stay active every week.",
      "Instagram comments and DMs turned into booking conversations.",
      "Every Instagram enquiry answered, day or night.",
      "Follow-ups on quiet leads, without you chasing them.",
      "Sounds like your business, not a bot.",
    ],
    cta: "Start with Kaspr",
    checkoutTier: "grow",
    featured: true,
  },
];

// Update this manually as Founding spots close. Must reflect the real
// number of signed founding clients — false scarcity is an ACL risk.
const FOUNDING_SPOTS_REMAINING = 4;
const FOUNDING_SPOTS_TOTAL = 10;

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Pricing</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-2xl">
            Your social media keeps working, even when you're busy
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-xl mb-12">
            Send us your photos, videos and ideas. We turn them into posts
            and keep your Instagram and TikTok active. On Instagram, we
            reply to common questions and help turn conversations into
            bookings. Miss a call? We text them back for you. No lock-in —
            cancel anytime. All prices in AUD.
          </p>
        </Reveal>

        {/* Founding Clients banner */}
        <Reveal>
          <div className="mb-10 rounded-2xl border border-dashed border-coral bg-coral/5 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="font-serif text-[56px] leading-none text-coral">
                {FOUNDING_SPOTS_REMAINING}
              </span>
              <span className="text-mid text-lg">/ {FOUNDING_SPOTS_TOTAL}</span>
            </div>
            <div className="flex-1">
              <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-1.5">
                Early customers
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-espresso mb-1.5">
                Lifetime pricing for our first 10 businesses.
              </h3>
              <p className="text-sm text-mid leading-relaxed">
                We're personally onboarding our first 10 businesses and
                locking in this rate for as long as you stay with us. All we
                ask for is honest feedback and a testimonial once we're
                delivering real results. Prices below reflect this rate.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 items-stretch max-w-md mx-auto">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <div
                className={`relative rounded-2xl p-8 flex flex-col gap-6 h-full transition-all duration-400 ease-premium hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-espresso shadow-[0_20px_60px_rgba(28,19,16,0.25)]"
                    : "bg-white border border-border shadow-card hover:shadow-card-hover"
                }`}
              >
                {plan.pill && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="bg-coral text-white text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full">
                      {plan.pill}
                    </span>
                  </div>
                )}

                <div>
                  <p
                    className={`text-2xs font-bold uppercase tracking-[0.18em] mb-4 ${
                      plan.featured ? "text-coral-bright" : "text-coral"
                    }`}
                  >
                    {plan.name}
                  </p>

                  {/* Outcome headline replaces plain price hero */}
                  <h3
                    className={`font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.2] mb-6 min-h-[84px] ${
                      plan.featured ? "text-cream" : "text-espresso"
                    }`}
                  >
                    {plan.outcome}
                  </h3>

                  {/* Price block: founding price + struck-through original */}
                  <div className="flex items-baseline gap-2.5 mb-1">
                    <span
                      className={`font-serif text-[17px] line-through ${
                        plan.featured ? "text-cream/35" : "text-mid/60"
                      }`}
                    >
                      {plan.setup}
                    </span>
                    <span
                      className={`font-serif text-[clamp(40px,5.5vw,52px)] leading-none ${
                        plan.featured ? "text-coral" : "text-coral-dark"
                      }`}
                    >
                      {plan.setupFounding}
                    </span>
                  </div>
                  <p
                    className={`text-xs ${
                      plan.featured ? "text-cream/40" : "text-mid"
                    }`}
                  >
                    setup · one-time
                  </p>

                  <p
                    className={`text-sm mt-3 ${
                      plan.featured ? "text-cream/70" : "text-espresso/70"
                    }`}
                  >
                    <span
                      className={
                        plan.featured
                          ? "line-through text-cream/35 mr-1.5"
                          : "line-through text-mid/60 mr-1.5"
                      }
                    >
                      {plan.monthly}
                    </span>
                    <span className="font-semibold">
                      {plan.monthlyFounding}
                    </span>
                    /mo ongoing
                  </p>

                  <div
                    className={`h-px mt-5 mb-5 ${
                      plan.featured ? "bg-white/10" : "bg-border"
                    }`}
                  />
                </div>

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
                          stroke="#A8425A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2.5 mt-2">
                  <a
                    href={`/api/checkout?tier=${plan.checkoutTier}`}
                    className={`block text-center text-sm font-bold py-3.5 rounded-full transition-all duration-300 ease-premium hover:-translate-y-0.5 active:translate-y-0 ${
                      plan.featured
                        ? "bg-coral text-white hover:bg-coral-dark hover:shadow-lift"
                        : "border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream"
                    }`}
                  >
                    {plan.cta}
                  </a>
                  <a
                    href="https://calendly.com/jasperschreiber0/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center text-xs font-medium transition-colors ${
                      plan.featured
                        ? "text-cream/45 hover:text-cream/70"
                        : "text-mid hover:text-espresso"
                    }`}
                  >
                    Prefer to talk first? Book a free call
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
