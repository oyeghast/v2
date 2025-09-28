import { useMemo } from "react";

export default function HeroLayers() {
  const layers = useMemo(
    () => [
      {
        // far sky haze
        className:
          "absolute inset-x-0 bottom-[22%] h-[40vh] min-h-[240px] bg-gradient-to-b from-[#c8d8ff]/40 via-[#9fb2ff]/25 to-transparent clip-hill-1 opacity-80 animate-bob-slow",
      },
      {
        // distant hills
        className:
          "absolute inset-x-0 bottom-[16%] h-[34vh] min-h-[200px] bg-gradient-to-b from-[#7ea1ff]/45 via-[#5d7ff8]/35 to-[#1a2540]/30 clip-hill-2 opacity-90 animate-bob-med",
      },
      {
        // mid hills
        className:
          "absolute inset-x-0 bottom-[8%] h-[30vh] min-h-[200px] bg-gradient-to-b from-[#5d7ff8]/70 via-[#5171e0]/65 to-[#1a2540]/60 clip-hill-3 shadow-[0_-12px_48px_rgba(93,127,248,0.35)] animate-bob",
      },
      {
        // near foreground
        className:
          "absolute inset-x-0 bottom-0 h-[28vh] min-h-[180px] bg-gradient-to-t from-[#0b1426] via-[#101a30] to-[#16223d] clip-foreground shadow-[0_-18px_60px_rgba(16,26,48,0.6)] animate-bob-fast",
      },
    ],
    [],
  );

  return (
    <section className="relative min-h-[72vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden">
      {/* Layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {layers.map((l, i) => (
          <div key={i} aria-hidden className={l.className} />
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 px-4">
        <h1 className="font-minecrafter metallic-title title-glow text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-wider">
          STEEL WING
        </h1>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgba(6,12,24,.85)]"
      />
    </section>
  );
}
