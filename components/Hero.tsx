import Link from "next/link";

function DMBubble({
  from,
  children,
  delay,
}: {
  from: "client" | "kaspr";
  children: React.ReactNode;
  delay: string;
}) {
  const isKaspr = from === "kaspr";
  return (
    <div
      className={`flex ${isKaspr ? "justify-end" : "justify-start"} opacity-0 animate-[fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]`}
      style={{ animationDelay: delay }}
    >
      {!isKaspr && (
        <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mr-2 mt-1 ring-1 ring-white/20">
          <span className="font-serif italic text-[11px] leading-none text-espresso">
            S
          </span>
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
          isKaspr
            ? "bg-coral text-white rounded-tr-sm"
            : "bg-white/90 text-espresso rounded-tl-sm"
        }`}
      >
        {children}
        {isKaspr && (
          <p className="text-[10px] text-white/60 text-right mt-1">
            Kaspr · handled ✓
          </p>
        )}
      </div>
    </div>
  );
}

function BookingChip() {
  return (
    <div
      className="flex justify-center pt-1 opacity-0 animate-chip-in"
      style={{ animationDelay: "1650ms" }}
    >
      <div className="inline-flex items-center gap-2 bg-sage/15 border border-sage/30 rounded-full pl-2 pr-3.5 py-1.5">
        <span className="w-4 h-4 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
            <path
              d="M1 4l2 2 4-4"
              stroke="#1C1310"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[10.5px] font-semibold text-sage-light tracking-wide">
          Booked · Thu 4:00pm
        </span>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] select-none">
      {/* Phone frame */}
      <div className="bg-espresso rounded-[36px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Status bar */}
        <div className="px-6 pt-4 pb-1 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-white/70">11:52</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[3, 4, 4].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-white/60 rounded-sm"
                  style={{ height: `${h * 2.5}px` }}
                />
              ))}
            </div>
            <div className="w-4 h-2.5 rounded-sm border border-white/60 ml-1 relative">
              <div className="absolute inset-0.5 bg-white/60 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* DM thread header */}
        <div className="bg-espresso-light px-4 py-2.5 flex items-center gap-2.5 border-b border-white/8">
          <div className="relative w-8 h-8 rounded-full bg-sage flex items-center justify-center ring-1 ring-white/15">
            <span className="font-serif italic text-[15px] leading-none text-espresso">
              S
            </span>
            {/* active dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-coral-bright border-2 border-espresso-light" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Sarah Chen</p>
            <p className="text-[11px] text-white/40">Instagram DM · replied in 8s</p>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-3 space-y-2 bg-[#0f0a05] min-h-[280px]">
          <DMBubble from="client" delay="0ms">
            Hey! Do you have any spots free this week? 👀
          </DMBubble>

          <DMBubble from="kaspr" delay="450ms">
            Hi Sarah! Thursday 4pm or Friday 10am are both free — which
            suits you?
          </DMBubble>

          <DMBubble from="client" delay="900ms">
            Thursday 4pm please 🙌
          </DMBubble>

          <DMBubble from="kaspr" delay="1250ms">
            You&apos;re booked in for Thursday 4pm. See you then! 🎉
          </DMBubble>

          <BookingChip />
        </div>

        {/* Home indicator */}
        <div className="bg-[#0f0a05] pb-3 pt-1 flex justify-center">
          <div className="w-20 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Glow beneath phone */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-coral/30 rounded-full blur-2xl" />

      {/* Quiet caption under the phone — states the outcome plainly */}
      <p className="mt-5 text-center text-[11px] text-cream/30 tracking-wide">
        Booked at 11:52pm — while Sarah&apos;s owner was asleep
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-espresso grain overflow-hidden flex flex-col">
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(168,66,90,0.18),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_80%,rgba(156,170,140,0.08),transparent)] pointer-events-none z-0" />

      {/* Content — sits in normal flow, always above the phone (z-20) */}
      <div className="relative z-20 flex-1 flex flex-col justify-end max-w-6xl mx-auto w-full px-6 md:px-10 pt-32 pb-14 md:pb-20">
        {/* Eyebrow + heading */}
        <div className="mb-12">
          <p className="text-2xs font-bold uppercase tracking-[0.2em] text-coral-bright mb-8 opacity-0 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            The AI front desk for Australian appointment-based businesses
          </p>
          <h1
            className="font-serif text-display-lg text-cream leading-[0.95] tracking-tight opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards] max-w-[17ch] lg:max-w-[660px]"
          >
            Someone DMs you mid-appointment.{" "}
            <em className="text-coral-bright not-italic">Kaspr&apos;s already replied.</em>
          </h1>
        </div>

        {/* Subhead + CTA — constrained to left half so the phone never overlaps */}
        <div className="max-w-md opacity-0 animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards]">
          <p className="text-lg text-cream/80 leading-snug mb-3 font-medium">
            Every DM and comment answered in seconds — day or night.
          </p>
          <p className="text-[15px] text-cream/50 leading-relaxed mb-8">
            Quiet enquiries get chased up before they go cold, and your feed
            keeps posting from the photos and voice notes you send through.
            Kaspr takes it from there.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 bg-coral text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 ease-premium hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
            >
              See how it works
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <Link
              href="#pricing"
              className="text-sm font-medium text-cream/40 hover:text-cream/70 transition-colors duration-300 ease-premium"
            >
              See pricing ↓
            </Link>
          </div>
          <p className="mt-8 font-serif italic text-cream/35 text-[15px]">
            You work with clients. Kaspr works your Instagram.
          </p>
        </div>
      </div>

      {/* Phone mockup — absolutely positioned on the right at lg+, hidden below */}
      <div className="hidden lg:block absolute right-10 xl:right-20 bottom-20 z-10 opacity-0 animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.9s_forwards]">
        <PhoneMockup />
      </div>

      {/* Organic curve into next section */}
      <div className="wave-divider relative z-10">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-16"
        >
          <path
            d="M0,64 C240,0 480,48 720,32 C960,16 1200,56 1440,24 L1440,64 L0,64 Z"
            fill="#FBF7F2"
          />
        </svg>
      </div>
    </section>
  );
}
