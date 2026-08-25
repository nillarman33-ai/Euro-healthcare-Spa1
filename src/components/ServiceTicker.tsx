const services = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Aromatherapy Massage',
  'Hot Stone Massage',
  'Thai Traditional Massage',
  'Aroma Oil Massage',
  'Full Body Massage',
  'Oil Massage',
  'Back & Shoulder Massage',
  'Body to Body Massage',
  'Nuru Massage',
  'Foot Massage',
  'Four Hand Massage',
  'Sensual Massage',
  'Special Package',
];

function Ornament() {
  return (
    <span className="ticker-ornament select-none px-3 text-[9px] text-gold/60 md:text-[10px]">
      <span className="ticker-star">✦</span>
    </span>
  );
}

export function ServiceTicker() {
  const items = [...services, ...services];

  return (
    <div className="ticker-ribbon group relative w-full overflow-hidden">
      {/* Botanical line-art pattern */}
      <div className="ticker-botanical pointer-events-none absolute inset-0" />

      {/* Inner darker track for depth */}
      <div className="pointer-events-none absolute inset-x-0 inset-y-0 bg-[#071A33]/60" />

      {/* Soft gold inner glow at edges */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(201,164,92,0.28),inset_0_-1px_0_rgba(201,164,92,0.28),inset_0_0_30px_-8px_rgba(201,164,92,0.18)]" />

      {/* Moving shimmer */}
      <div className="ticker-shimmer pointer-events-none absolute inset-0" />

      {/* Left + right vignettes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#051328] to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#051328] to-transparent md:w-40" />

      {/* Scrolling content */}
      <div className="relative flex h-full w-max items-center animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="ticker-name px-3 font-headline text-[13px] font-medium uppercase tracking-[0.32em] md:px-4 md:text-[15px]">
              {name}
            </span>
            <Ornament />
          </span>
        ))}
      </div>
    </div>
  );
}
