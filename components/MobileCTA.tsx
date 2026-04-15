"use client";

import { useEffect, useState } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 80% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-espresso border-t border-white/[0.08] px-5 py-4 flex items-center justify-between gap-4 safe-area-pb">
        <div>
          <p className="text-xs font-bold text-cream">Ready to get set up?</p>
          <p className="text-[11px] text-cream/40">Free 30-min call</p>
        </div>
        <a
          href="mailto:contact@kaspr.com.au"
          className="flex-shrink-0 bg-coral text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-coral-dark transition-colors"
        >
          Book a free call →
        </a>
      </div>
    </div>
  );
}
