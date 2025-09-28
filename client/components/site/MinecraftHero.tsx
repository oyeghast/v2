import { useEffect, useRef } from "react";

function clamp(n: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n));
}

export default function MinecraftHero() {
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const h = window.innerHeight || 1;
        const p = clamp(y / h, 0, 1);

        const speeds = [0.15, 0.28, 0.42, 0.6, 0.75, 0.9];
        layersRef.current.forEach((el, i) => {
          if (!el) return;
          const ty = y * speeds[i];
          const tx = Math.sin((y + i * 60) / 320) * (4 + i * 1.2);
          const op = 1 - clamp(p * (0.6 - i * -0.05), 0, 0.9);
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
          el.style.opacity = String(op);
        });

        if (logoRef.current) {
          const ty = y * 0.22;
          const glow = 0.6 + 0.4 * Math.sin((y / 240) + 0.6);
          logoRef.current.style.transform = `translate3d(0, ${ty}px, 0)`;
          logoRef.current.style.filter = `drop-shadow(0 0 30px rgba(76, 238, 140, ${glow}))`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative isolate h-[86vh] min-h-[560px] w-full overflow-hidden" style={{ backgroundColor: "#101616" }}>
      {/* LOGO */}
      <div ref={logoRef} className="pointer-events-none absolute left-1/2 top-14 z-30 -translate-x-1/2">
        <div className="flex items-center justify-center gap-3 select-none">
          {/* left wing */}
          <span aria-hidden className="wing wing-left" />
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-minecrafter tracking-wider emerald-title drop-shadow-[0_0_22px_rgba(76,238,140,.55)]">
            STEEL WING
          </h1>
          {/* right wing */}
          <span aria-hidden className="wing wing-right" />
        </div>
      </div>

      {/* LAYERS ORDER (back -> front) */}
      {/* 0 - sky + far mountains */}
      <div
        ref={(el) => (layersRef.current[0] = el)}
        className="absolute inset-x-0 bottom-[28%] z-0 h-[44vh] min-h-[220px] opacity-0 will-change-transform"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 20%, rgba(78, 120, 140, 0.25), rgba(16,22,22,0) 70%), linear-gradient(180deg, rgba(38,58,60,0.75), rgba(16,22,22,0.2))",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 100%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        ref={(el) => (layersRef.current[1] = el)}
        className="absolute inset-x-0 bottom-[22%] z-[1] h-[34vh] min-h-[200px] opacity-0 will-change-transform"
        style={{
          background:
            "linear-gradient(180deg, rgba(60, 96, 86, 0.85), rgba(16,22,22,0.6))",
          clipPath:
            "polygon(0% 68%, 8% 60%, 14% 64%, 22% 56%, 30% 60%, 38% 52%, 46% 56%, 56% 50%, 66% 56%, 76% 52%, 86% 56%, 96% 52%, 100% 54%, 100% 100%, 0% 100%)",
          boxShadow: "0 -8px 60px rgba(34,54,50,0.4)",
        }}
      />

      {/* 2 - mid trees + tiny characters */}
      <div
        ref={(el) => (layersRef.current[2] = el)}
        className="absolute inset-x-0 bottom-[12%] z-[2] h-[30vh] min-h-[180px] opacity-0 will-change-transform"
        style={{
          background:
            "linear-gradient(180deg, rgba(34, 88, 62, 0.95), rgba(16,22,22,0.7))",
          clipPath:
            "polygon(0% 72%, 10% 64%, 20% 68%, 30% 60%, 40% 66%, 50% 58%, 60% 66%, 70% 60%, 80% 64%, 90% 60%, 100% 62%, 100% 100%, 0% 100%)",
          boxShadow: "0 -10px 60px rgba(24,48,36,0.55)",
        }}
      >
        {/* midground characters (simple pixel avatars) */}
        <span className="absolute left-[10%] -top-4 size-4 sm:size-5 bg-[#8ef5b2] rounded-[3px] shadow-[0_0_16px_rgba(142,245,178,.8)] animate-sway-x" />
        <span className="absolute right-[16%] top-3 size-3 sm:size-4 bg-[#73e090] rounded-[3px] shadow-[0_0_14px_rgba(115,224,144,.7)] animate-sway-x [animation-delay:300ms]" />
      </div>

      {/* 3 - foreground character with dog on block */}
      <div
        ref={(el) => (layersRef.current[3] = el)}
        className="absolute inset-x-0 bottom-[7%] z-[3] h-[24vh] min-h-[160px] opacity-0 will-change-transform"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,42,34,1), rgba(16,22,22,.75))",
          clipPath:
            "polygon(0% 78%, 12% 70%, 24% 76%, 36% 66%, 48% 74%, 60% 64%, 72% 72%, 84% 66%, 96% 70%, 100% 68%, 100% 100%, 0% 100%)",
        }}
      >
        {/* Block */}
        <div className="absolute right-[14%] bottom-[12%] h-16 w-16 sm:h-20 sm:w-20 bg-[#254b3b] rounded-[6px] shadow-[0_8px_0_0_rgba(0,0,0,0.25),0_0_30px_rgba(76,238,140,.4)]">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#3a7b5f] rounded-t-[6px]" />
        </div>
        {/* Character */}
        <div className="absolute right-[18%] bottom-[26%] flex items-end gap-2 animate-idle-bounce">
          <div className="h-9 w-7 sm:h-10 sm:w-8 bg-[#8ef5b2] rounded-[4px] shadow-[0_0_26px_rgba(142,245,178,.75)]" />
          {/* Dog */}
          <div className="h-7 w-9 sm:h-8 sm:w-10 bg-[#cfe8dc] rounded-[4px] relative">
            <span className="absolute -right-2 top-1 h-2 w-2 bg-[#cfe8dc] rounded-[2px]" />
            <span className="absolute left-1 bottom-1 h-1.5 w-1.5 bg-[#8ef5b2] rounded-[2px]" />
          </div>
        </div>
      </div>

      {/* 4 - leaf layer (on top) */}
      <div
        ref={(el) => (layersRef.current[4] = el)}
        className="pointer-events-none absolute inset-x-0 top-[12%] z-[4] h-[18vh] min-h-[120px] opacity-0 will-change-transform"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="leaf"
            style={{
              left: `${8 + (i * 12) % 84}%`,
              top: `${(i % 3) * 12}%`,
              animationDelay: `${i * 120}ms`,
            }}
          />
        ))}
      </div>

      {/* 5 - bottom grass (anchored) */}
      <div
        ref={(el) => (layersRef.current[5] = el)}
        className="absolute inset-x-0 bottom-0 z-[5] h-[14vh] min-h-[100px] opacity-0 will-change-transform"
      >
        <div className="absolute inset-x-0 bottom-0 h-full grass-clip bg-[#0b1a14] shadow-[0_-8px_40px_rgba(0,0,0,0.5)]" />
      </div>

      {/* bottom fade to content */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#101616]" />
    </section>
  );
}
