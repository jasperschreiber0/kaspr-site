import { Reveal } from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "I used to dread opening my DMs at the end of the day. Now Kaspr handles everything while I&apos;m with clients. Three bookings came in while I was doing a set on Saturday — I didn&apos;t type a single word.",
    name: "Sarah T.",
    role: "Pilates studio owner",
    location: "Melbourne",
    avatar: "S",
    avatarBg: "from-rose-300 to-pink-400",
  },
  {
    quote:
      "Our feed was embarrassing — we&apos;d post once a fortnight if we were lucky. Now it&apos;s four times a week, consistent, and honestly looks better than when I was trying to do it myself.",
    name: "Emma R.",
    role: "Nail salon owner",
    location: "Sydney",
    avatar: "E",
    avatarBg: "from-amber-300 to-orange-400",
  },
  {
    quote:
      "I was sceptical it would sound like us. It really does. We had one client message asking if we&apos;d hired someone to do our socials. We hadn&apos;t. That was the moment I stopped second-guessing it.",
    name: "Kate B.",
    role: "Lash & brow bar owner",
    location: "Brisbane",
    avatar: "K",
    avatarBg: "from-violet-300 to-purple-400",
  },
];

const STATS = [
  { num: "3–4×", label: "More posts per week" },
  { num: "<2 min", label: "Average DM-to-booking time" },
  { num: "7 days", label: "Average setup time" },
];

export function SocialProof() {
  return (
    <section className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Early results</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-xl">
            Real owners, real businesses,{" "}
            <em className="italic text-coral">actually using it.</em>
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-md mb-14">
            These are placeholder testimonials from persona-matched business
            owners. Actual client results will be added here.
          </p>
        </Reveal>

        {/* Testimonial cards */}
        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F2694B" aria-hidden>
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.43.59 3.435L7 8.905l-3.09 1.595.59-3.435L2 4.635l3.455-.545L7 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p
                  className="font-serif text-[17px] leading-relaxed text-espresso"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-espresso">{t.name}</p>
                  <p className="text-xs text-mid">
                    {t.role} &middot; {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Stats row */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-espresso px-8 py-10 text-center"
              >
                <p className="font-serif text-[clamp(40px,6vw,56px)] leading-none text-coral/90 mb-2">
                  {stat.num}
                </p>
                <p className="text-2xs font-bold uppercase tracking-[0.16em] text-cream/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
