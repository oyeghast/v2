import { useEffect, useRef } from "react";

function clamp(n: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n));
}

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const top = window.scrollY;
        const h = window.innerHeight || 1;
        const y = clamp(top, 0, h);

        const speeds = [0.12, 0.22, 0.34, 0.5];
        layersRef.current.forEach((el, i) => {
          if (!el) return;
          const t = y * speeds[i];
          el.style.transform = `translate3d(0, ${t}px, 0)`;
        });

        if (titleRef.current) {
          const ty = y * 0.28;
          const op = 1 - clamp(y / 240, 0, 1);
          titleRef.current.style.transform = `translate3d(0, ${ty}px, 0)`;
          titleRef.current.style.opacity = String(op);
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

  const skyTexture = `linear-gradient(180deg, rgba(138,170,255,.35), rgba(10,18,36,0)), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px)`;
  const farMountains = `linear-gradient(180deg, rgba(94,123,228,.6), rgba(26,37,64,.35)), url('/bg-minecraft.svg')`;
  const midHills = `linear-gradient(180deg, rgba(70,103,210,.8), rgba(18,26,48,.6)), url('/bg-minecraft.svg')`;
  const foreground = `linear-gradient(180deg, rgba(10,18,36,1), rgba(10,18,36,.65)), url('/bg-minecraft.svg')`;

  return (
    <section ref={containerRef} className="relative h-[56vh] overflow-hidden">
      {/* LAYERS */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        {/* sky haze */}
        <div
          ref={(el) => (layersRef.current[0] = el)}
          className="absolute inset-x-0 bottom-[22%] h-[40vh] min-h-[240px]"
          style={{
            backgroundImage: skyTexture,
            WebkitMaskImage:
              "radial-gradient(120% 100% at 50% 100%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* far mountains */}
        <div
          ref={(el) => (layersRef.current[1] = el)}
          className="absolute inset-x-0 bottom-[14%] h-[34vh] min-h-[200px]"
          style={{
            background: farMountains,
            backgroundPosition: "center 35%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
            filter: "saturate(1.05)",
            clipPath:
              "polygon(0% 65%, 8% 60%, 14% 62%, 20% 58%, 28% 60%, 36% 55%, 46% 58%, 56% 52%, 66% 58%, 76% 54%, 86% 56%, 96% 52%, 100% 54%, 100% 100%, 0% 100%)",
          }}
        />
        {/* mid hills/forest */}
        <div
          ref={(el) => (layersRef.current[2] = el)}
          className="absolute inset-x-0 bottom-[6%] h-[32vh] min-h-[200px]"
          style={{
            background: midHills,
            backgroundPosition: "center 60%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
            filter: "saturate(1.05)",
          }}
        />
        {/* foreground ridge */}
        <div
          ref={(el) => (layersRef.current[3] = el)}
          className="absolute inset-x-0 bottom-0 h-[28vh] min-h-[160px]"
          style={{
            background: foreground,
            backgroundPosition: "center 85%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 -18px 60px rgba(16,26,48,0.6)",
          }}
        />
      </div>


      {/* bottom fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgba(6,12,24,.9)]" />
    </section>
  );
}
