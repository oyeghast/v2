import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className = "" }: PropsWithChildren<{ delay?: number; className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={["transition-all duration-700 will-change-transform", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3", className].join(" ")}
    >
      {children}
    </div>
  );
}
