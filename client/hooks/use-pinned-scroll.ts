import { useEffect } from "react";

/**
 * Keep a target element pinned in view for a short window to resist layout shifts
 * and stray scroll resets after navigation. Uses rAF loop and resize listener.
 */
export function usePinnedScroll(target: Element | null, opts?: { durationMs?: number; block?: ScrollLogicalPosition; behavior?: ScrollBehavior }) {
  useEffect(() => {
    if (!target) return;
    const durationMs = opts?.durationMs ?? 1500;
    const block: ScrollLogicalPosition = opts?.block ?? "start";
    const behavior: ScrollBehavior = opts?.behavior ?? "auto";

    let raf = 0;
    const end = Date.now() + durationMs;

    const scrollNow = () => {
      try {
        target.scrollIntoView({ block, behavior });
      } catch (_e) {
        // no-op
      }
    };

    const tick = () => {
      const now = Date.now();
      const rect = target.getBoundingClientRect();
      const withinView = rect.top >= 0 && rect.bottom <= (window.innerHeight || 0);
      if (!withinView) scrollNow();
      if (now < end) raf = window.requestAnimationFrame(tick);
    };

    // Initial attempts to get into position quickly
    scrollNow();
    raf = window.requestAnimationFrame(tick);
    const t2 = window.setTimeout(scrollNow, 350);
    const t3 = window.setTimeout(scrollNow, 800);

    const onResize = () => scrollNow();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [target, opts?.durationMs, opts?.block, opts?.behavior]);
}
