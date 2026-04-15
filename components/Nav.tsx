"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-xl font-medium tracking-tight transition-colors ${
            scrolled ? "text-espresso" : "text-cream"
          }`}
        >
          kaspr
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-mid hover:text-espresso"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:contact@kaspr.com.au"
            className="text-sm font-bold bg-coral text-white px-5 py-2.5 rounded-full hover:bg-coral-dark transition-colors"
          >
            Book a free call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            scrolled ? "text-espresso" : "text-cream"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-b border-border px-6 py-6 flex flex-col gap-4">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-mid hover:text-espresso"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:contact@kaspr.com.au"
            className="mt-2 text-sm font-bold bg-coral text-white px-5 py-3 rounded-full text-center hover:bg-coral-dark transition-colors"
          >
            Book a free call
          </a>
        </div>
      )}
    </header>
  );
}
