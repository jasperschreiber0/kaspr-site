import { Reveal } from "@/components/Reveal";

const SCENARIOS = [
  {
    label: "While you're with a client",
    title: "The 9pm enquiry gets answered",
    desc: "A new client DMs while you're closing up. Kaspr replies within minutes with your prices and availability — in your own words, like you'd replied yourself.",
  },
  {
    label: "Between appointments",
    title: "Today's reel goes out at the right time",
    desc: "You send a photo or reel the moment you shoot it. Kaspr matches it to what's trending in your niche and queues it for when your audience is actually online.",
  },
  {
    label: "The second someone comments",
    title: "\"How much?\" turns into a conversation",
    desc: "Someone comments on your post asking about pricing. Kaspr slides into their DMs and starts the conversation before you've even seen the notification.",
  },
];

const FACTS = [
  { num: "2", label: "Platforms covered — Instagram & TikTok" },
  { num: "24/7", label: "DM & comment coverage" },
  { num: "0", label: "Apps you need to open" },
];

export function SocialProof() {
  return (
    <section className="bg-cream py-[clamp(80px,10vw,120px)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">Straight up</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4 max-w-xl">
            No fake reviews here. Just the honest deal.
          </h2>
          <p className="text-base text-mid leading-relaxed max-w-md mb-14">
            Kaspr is new, and we&apos;re not going to pad this page with
            invented testimonials, star ratings, or cherry-picked
            screenshots. The first ten businesses get lifetime pricing, a
            direct line to the founder, and their real results become the
            case studies that sit right here.
          </p>
        </Reveal>

        {/* What running Kaspr actually looks like */}
        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-border rounded-2xl p-7 shadow-card flex flex-col gap-4"
            >
              <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral">
                {s.label}
              </p>
              <h3 className="font-serif text-[20px] leading-snug text-espresso">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-mid flex-1">
                {s.desc}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Facts row — how the system behaves, not invented averages */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="bg-espresso px-8 py-10 text-center"
              >
                <p className="font-serif text-[clamp(40px,6vw,56px)] leading-none text-coral/90 mb-2">
                  {fact.num}
                </p>
                <p className="text-2xs font-bold uppercase tracking-[0.16em] text-cream/40">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
