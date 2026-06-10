import { Reveal } from "@/components/Reveal";

const PAIN_POINTS = [
  {
    time: "11:47 pm",
    scene: "A new client DMs asking about your lash lift pricing. You see it the next morning. She&rsquo;s already booked somewhere else.",
    label: "Missed DMs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M4 6h20a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 8l12 9 12-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="8" r="4" fill="#F2694B" />
        <text x="22" y="11.5" fontSize="5" textAnchor="middle" fill="white" fontWeight="bold">3</text>
      </svg>
    ),
  },
  {
    time: "Week three without posting",
    scene: "You meant to get on top of the feed this Sunday. Then you had a full book, and Sunday looked like every other day.",
    label: "Dead feed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M20 20v-2M20 22v.5" stroke="#F2694B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "Tuesday enquiry, Friday follow-up",
    scene: "Someone commented \u201chow much?\u201d on your reel. You replied four days later. They&rsquo;d already found someone else who replied in minutes.",
    label: "Cold leads",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M14 4a10 10 0 100 20A10 10 0 0014 4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 8v6l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 2L4 5M20 2l4 3" stroke="#F2694B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Problem() {
  return (
    <section className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Sound familiar?</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-lg">
            Running a full book shouldn&rsquo;t mean{" "}
            <span className="relative inline-block">
              running behind.
              {/* hand-drawn underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-[9px]"
                viewBox="0 0 200 9"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 7C42 2.5 118 1.5 198 5.5"
                  stroke="#F2694B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-md mb-14">
            You&apos;re brilliant at your craft. The problem is everything that
            happens when you&apos;re not looking at your phone.
          </p>
        </Reveal>

        <Reveal stagger>
          {PAIN_POINTS.map((point) => (
            <div
              key={point.label}
              className="group bg-cream-dark border border-border rounded-2xl p-7 md:p-9 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon + time */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                  {point.icon}
                </div>
                <span className="text-2xs font-medium text-mid/70 tracking-wide mt-1">
                  {point.time}
                </span>
              </div>

              {/* Label */}
              <p className="text-2xs font-bold uppercase tracking-[0.16em] text-coral mb-3">
                {point.label}
              </p>

              {/* Scene */}
              <p
                className="text-[15px] leading-relaxed text-espresso/80"
                dangerouslySetInnerHTML={{ __html: point.scene }}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
