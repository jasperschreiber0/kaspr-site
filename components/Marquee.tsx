const ITEMS = [
  "Personal trainers",
  "Gyms",
  "Fitness studios",
  "Pilates studios",
  "Yoga studios",
  "Beauty salons",
  "Cosmetic clinics",
  "Injectables clinics",
  "Allied health clinics",
  "Wellness studios",
  "Hair salons",
  "Nail salons",
];

function Sparkle() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className="text-cream/50"
      aria-hidden
    >
      <path
        d="M6 0c.5 3.2 2.8 5.5 6 6-3.2.5-5.5 2.8-6 6-.5-3.2-2.8-5.5-6-6 3.2-.5 5.5-2.8 6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Marquee() {
  // Double the items for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-coral py-3 overflow-hidden relative">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            {i % 2 === 0 ? (
              <span className="text-2xs font-bold uppercase tracking-[0.18em] text-white/90">
                {item}
              </span>
            ) : (
              <span className="font-serif italic text-[16px] text-cream/95">
                {item}
              </span>
            )}
            <Sparkle />
          </span>
        ))}
      </div>
    </div>
  );
}
