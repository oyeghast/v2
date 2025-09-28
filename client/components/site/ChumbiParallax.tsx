import { PropsWithChildren, useEffect, useMemo, useRef } from "react";

function clamp(n: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n));
}

export type LayerProps = PropsWithChildren<{
  speed: number; // scroll speed factor (e.g. 0.05 .. 1.2)
  z?: number; // z-index order
  baseX?: number; // px
  baseY?: number; // px
  scale?: number; // 1 = 100%
  fadeIn?: boolean; // fade in when entering viewport
  className?: string;
}>;

export function ParallaxLayer({
  children,
  speed,
  z = 0,
  baseX = 0,
  baseY = 0,
  scale = 1,
  fadeIn = true,
  className = "",
}: LayerProps) {
  return (
    <div
      data-parallax-layer
      data-speed={speed}
      data-base-x={baseX}
      data-base-y={baseY}
      data-scale={scale}
      data-fade={fadeIn ? "1" : "0"}
      className={[
        "absolute will-change-transform select-none",
        fadeIn ? "opacity-0" : "",
        className,
      ].join(" ")}
      style={{ zIndex: z as number }}
    >
      {children}
    </div>
  );
}

export default function ChumbiParallax({
  children,
  height = "120vh",
}: PropsWithChildren<{ height?: string | number }>) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const layersRef = useRef<HTMLElement[]>([]);
  const ioRef = useRef<IntersectionObserver | null>(null);

  const style = useMemo(() => ({ height }), [height]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const collect = () => {
      layersRef.current = Array.from(
        root.querySelectorAll<HTMLElement>('[data-parallax-layer]'),
      );
    };
    collect();

    // Fade-in observer
    ioRef.current?.disconnect();
    ioRef.current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const fade = e.target.getAttribute("data-fade") === "1";
          if (fade && e.isIntersecting) {
            (e.target as HTMLElement).style.transition = "opacity 600ms ease";
            (e.target as HTMLElement).style.opacity = "1";
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    layersRef.current.forEach((el) => ioRef.current!.observe(el));

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = clamp(1 - (rect.top + rect.height) / (vh + rect.height), 0, 1);
        const scrollY = window.scrollY || 0;

        layersRef.current.forEach((el, i) => {
          const speed = Number(el.getAttribute("data-speed") || 0);
          const bx = Number(el.getAttribute("data-base-x") || 0);
          const by = Number(el.getAttribute("data-base-y") || 0);
          const sc = Number(el.getAttribute("data-scale") || 1);
          const ty = (scrollY * speed) + by;
          const tx = bx + Math.sin((scrollY + i * 80) / 420) * (6 + i * 0.8);
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sc})`;
          el.style.willChange = "transform";
        });

        // Optional logo/text handling can be added as one more layer
        (root.firstElementChild as HTMLElement | null)?.style?.setProperty(
          "--p",
          String(progress),
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ioRef.current?.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden pointer-events-none"
      style={style}
    >
      {/* children should be absolute-positioned ParallaxLayer elements with images provided by you */}
      {children}
    </section>
  );
}
