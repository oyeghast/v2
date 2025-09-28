import { useEffect, useRef, useState } from "react";

export default function LiteYouTube({ id, title }: { id: string; title?: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => setInView(e.isIntersecting));
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-9-16 rounded-xl overflow-hidden bg-black/70">
      {playing && inView ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title || id}
          loading="lazy"
          referrerPolicy="no-referrer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={title || "Play video"}
          style={{ backgroundImage: `url(${thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 text-red-600 w-16 h-16 grid place-items-center shadow-glow">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </button>
      )}
    </div>
  );
}
