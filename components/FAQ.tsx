"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "Do I need a big following for this to work?",
    a: "Not at all. Kaspr works best for businesses that are already getting enquiries — whether that's 500 followers or 50,000. If people are DMing you or commenting on your posts, we can capture and convert those leads. A bigger following just means more volume.",
  },
  {
    q: "Will it actually sound like me?",
    a: "Yes. We spend the first week training the reply scripts and captions on your existing content, your tone, and a short voice brief you fill out. You review and approve the first round before anything goes live — and we keep tuning until it sounds like you.",
  },
  {
    q: "How long does setup take?",
    a: "About seven days from when you pay. We run a kick-off call, build the flows, test them, and hand over before going live. You'll get a walkthrough of everything so you know exactly what's running.",
  },
  {
    q: "What if I want to reply to DMs myself sometimes?",
    a: "You can jump in any time. Kaspr handles the initial reply and the follow-ups, but if you want to take over a conversation you just reply from your own account and the automation pauses for that thread. It's not all-or-nothing.",
  },
  {
    q: "What platforms does it work on?",
    a: "Instagram and TikTok. We post your content to both. DM auto-reply and comment-to-DM lead capture currently run on Instagram. We're not building for Facebook — that's not where your clients are.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-border ${open ? "" : "hover:border-espresso/20"} transition-colors`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-[18px] md:text-xl text-espresso leading-snug group-hover:text-espresso/80 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-coral border-coral rotate-45"
              : "bg-transparent group-hover:border-coral"
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
            <path
              d="M5.5 1v9M1 5.5h9"
              stroke={open ? "white" : "#1A1008"}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-72 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[15px] leading-relaxed text-mid">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark py-[clamp(80px,10vw,120px)]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="section-tag mb-5">FAQ</p>
          <h2 className="font-serif text-display-sm text-espresso leading-tight mb-4">
            Questions we actually get asked.
          </h2>
          <p className="text-base text-mid leading-relaxed mb-14">
            If something&apos;s not here,{" "}
            <a
              href="mailto:contact@kaspr.com.au"
              className="text-coral underline underline-offset-2 hover:text-coral-dark"
            >
              just email us
            </a>
            . We reply fast.
          </p>
        </Reveal>

        <Reveal>
          <div className="border-t border-border">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
