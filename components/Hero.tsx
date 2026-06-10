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
      className={`flex ${isKaspr ? "justify-end" : "justify-start"}`}
      style={{ animationDelay: delay }}
    >
      {!isKaspr && (
        <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mr-2 mt-1 ring-1 ring-white/20">
          <span className="font-serif italic text-[11px] leading-none text-espresso">
            J
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
            Kaspr · auto-reply ✓
          </p>
        )}
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
          <span className="text-[11px] font-semibold text-white/70">9:41</span>
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

        {/* Instagram DM header */}
        <div className="bg-espresso-light px-4 py-2.5 flex items-center gap-2.5 border-b border-white/8">
          <div className="relative w-8 h-8 rounded-full bg-sage flex items-center justify-center ring-1 ring-white/15">
            <span className="font-serif italic text-[15px] leading-none text-espresso">
              J
            </span>
            {/* active dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-coral border-2 border-espresso-light" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Jade Wilson</p>
            <p className="text-[11px] text-white/40">Active now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-3 space-y-2 bg-[#0f0a05] min-h-[280px]">
          <DMBubble from="client" delay="0ms">
            Hey! How much are your gel nails? 💅
          </DMBubble>

          <DMBubble from="kaspr" delay="400ms">
            Hey Jade! Gel sets start from $65. We have spots Thu + Fri this
            week — want me to send through a booking link?
          </DMBubble>

          <DMBubble from="client" delay="800ms">
            Thursday at 2pm would be perfect!
          </DMBubble>

          <DMBubble from="kaspr" delay="1200ms">
            Done! 🎉 Thursday 2pm with Sarah is confirmed. Check your email
            for the details.
          </DMBubble>

          {/* Typing indicator */}
          <div className="flex items-center gap-2 pl-8">
            <div className="bg-white/10 rounded-full px-3 py-2 flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/30">next enquiry…</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="bg-[#0f0a05] pb-3 pt-1 flex justify-center">
          <div className="w-20 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Glow beneath phone */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-coral/30 rounded-full blur-2xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-espresso grain overflow-hidden flex flex-col">
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(242,105,75,0.18),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_80%,rgba(168,184,156,0.08),transparent)] pointer-events-none z-0" />

      {/* Content — sits in normal flow, always above the phone (z-20) */}
      <div className="relative z-20 flex-1 flex flex-col justify-end max-w-6xl mx-auto w-full px-6 md:px-10 pt-32 pb-14 md:pb-20">
        {/* Eyebrow + heading */}
        <div className="mb-12">
          <p className="text-2xs font-bold uppercase tracking-[0.2em] text-coral mb-8 opacity-0 animate-[fade-up_0.6s_0.2s_ease_forwards]">
            Social media automation · Built for Australian beauty &amp; wellness
          </p>
          <h1
            className="font-serif text-display-lg text-cream leading-[0.95] tracking-tight opacity-0 animate-[fade-up_0.8s_0.4s_ease_forwards]"
            style={{ maxWidth: "16ch" }}
          >
            You&apos;re booked solid.{" "}
            <em className="text-coral/80 not-italic">
              Your DMs aren&apos;t.
            </em>
          </h1>
        </div>

        {/* Subhead + CTA — constrained to left half so the phone never overlaps */}
        <div className="max-w-sm opacity-0 animate-[fade-up_0.7s_0.65s_ease_forwards]">
          <p className="text-base text-cream/55 leading-relaxed mb-8">
            Your DMs answered. Your feed filled. While you&apos;re on the
            floor.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-coral text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-coral-dark transition-colors"
            >
              See how it works
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
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
              className="text-sm font-medium text-cream/40 hover:text-cream/70 transition-colors"
            >
              See pricing ↓
            </Link>
          </div>
        </div>
      </div>

      {/* Phone mockup — absolutely positioned on the right at lg+, hidden below */}
      <div className="hidden lg:block absolute right-10 xl:right-20 bottom-20 z-10 opacity-0 animate-[fade-up_0.8s_0.9s_ease_forwards]">
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
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}
