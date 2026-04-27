import { Reveal } from "@/components/Reveal";

const PLANS = [
  {
    name: "Revive",
    outcome: "Bring back clients who've gone quiet.",
    setup: "$1,500",
    setupFounding: "$750",
    monthly: "$297",
    monthlyFounding: "$148",
    features: [
      "ReActivate — lapsed client recovery via WhatsApp",
      "Missed-call SMS auto-reply (under 10 seconds)",
      "30 / 60 / 90-day wake-up sequences",
      "Opt-out + compliance handling built in",
      "Revenue attribution dashboard",
      "Month-one recovery report",
    ],
    cta: "Start Revive",
    featured: false,
  },
  {
    name: "Revive + Grow",
    outcome:
      "Recover clients and post every day without touching a phone.",
    setup: "$3,500",
    setupFounding: "$1,750",
    monthly: "$597",
    monthlyFounding: "$298",
    features: [
      "Everything in Revive",
      "ReviewRunner — Google reviews on autopilot",
      "Instagram + TikTok daily posting",
      "Comment-to-DM lead capture",
      "DM auto-reply with booking intent routing",
      "Brand voice setup",
    ],
    cta: "Start Revive + Grow",
    featured: true,
    pill: "Most studios start here",
  },
  {
    name: "Full Stack",
    outcome: "Everything, done for you. Monthly reporting call.",
    setup: "$7,500",
    setupFounding: "$3,750",
    monthly: "$997",
    monthlyFounding: "$498",
    features: [
      "Everything in Revive + Grow",
      "Appointment booking directly from DMs",
      "Calendar integration (Fresha, Timely, etc.)",
      "Ongoing agent management & tuning",
      "Monthly reporting & strategy call",
      "Priority support (4hr response)",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

// Update this manually as Founding spots close.
const FOUNDING_SPOTS_REMAINING = 10;
const FOUNDING_SPOTS_TOTAL = 10;

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Pricing</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-2xl">
            Recover the revenue{" "}
            <em className="italic text-coral">you're quietly losing.</em>
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-xl mb-12">
            Most studios lose 20–30% of their clients every quarter to
            silence. Kaspr brings them back — and keeps your socials posting
            while we're at it. No lock-in. All prices in AUD.
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
                Founding Clients — limited
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-espresso mb-1.5">
                50% off setup and monthly, locked rate for life.
              </h3>
              <p className="text-sm text-mid leading-relaxed">
                First 10 studios. In exchange: a short testimonial and
                permission to share your results once they're in. Prices
                below reflect the Founding discount.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <div
                className={`relative rounded-2xl p-8 flex flex-col gap-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-espresso shadow-[0_20px_60px_rgba(26,16,8,0.25)]"
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
                      plan.featured ? "text-coral/80" : "text-coral"
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

       {/* Content Pack — waitlist */}
<Reveal>
  <div className="mt-10 rounded-2xl border border-dashed border-coral bg-coral/5 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
    <div className="flex items-baseline gap-2 shrink-0">
      <span className="font-serif text-[56px] leading-none text-coral">1</span>
      <span className="text-mid text-lg">/ 10</span>
    </div>
    <div className="flex-1">
      <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-1.5">
        Content Pack — Pilot Waitlist
      </p>
      <h3 className="font-serif text-xl md:text-2xl text-espresso mb-1.5">
        AI-generated imagery & reels. One studio gets in first.
      </h3>
      <p className="text-sm text-mid leading-relaxed">
        We're piloting with a single studio before opening enrolment. Join the waitlist to be first in line.
      </p>
    </div>
    
      <a href="mailto:hello@kaspr.com.au?subject=Content%20Pack%20waitlist"
      className="block text-center text-sm font-bold py-3.5 px-7 rounded-full border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors whitespace-nowrap"
    >
      Join waitlist
    </a>
  </div>
</Reveal>

        {/* Guarantee line */}
        <Reveal>
          <p className="text-center text-sm text-mid mt-10 max-w-2xl mx-auto">
            <span className="font-semibold text-espresso">
              Founding Clients guarantee:
            </span>{" "}
            if we don't cover our monthly fee in booked recovery revenue
            during month one, the next month is on us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
