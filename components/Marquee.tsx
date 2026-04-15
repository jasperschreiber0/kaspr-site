const ITEMS = [
  "Nail salons",
  "Hair salons",
  "Blowdry bars",
  "Pilates studios",
  "Yoga studios",
  "Lash bars",
  "Brow bars",
  "Skin clinics",
  "Beauty therapists",
  "Wellness studios",
  "Tanning studios",
  "Personal trainers",
];

export function Marquee() {
  // Double the items for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-coral py-3.5 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-2xs font-bold uppercase tracking-[0.15em] text-white/90"
          >
            {item}
            <span className="text-white/30 font-normal text-xs" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
