import Reveal from "@/components/site/Reveal";
import { FILES, type FileItem } from "@/data/files";
import { BUNDLES } from "@/data/bundles";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { usePinnedScroll } from "@/hooks/use-pinned-scroll";

export default function Files() {
  const [params] = useSearchParams();

  const fileName = params.get("f");
  const targetEl = fileName ? document.getElementById(`file-${encodeURIComponent(fileName)}`) : null;
  usePinnedScroll(targetEl, { durationMs: 1600, block: "start", behavior: "auto" });

  const activeBundle = useMemo(() => {
    const id = params.get("bundle");
    if (!id) return null;
    const b = BUNDLES.find((x) => x.id === id);
    if (!b) return null;
    const items = b.items
      .map((name) => FILES.find((f) => f.name === name))
      .filter(Boolean) as FileItem[];
    return { ...b, items };
  }, [params]);

  const activeFile = useMemo(() => {
    const name = params.get("f");
    if (!name) return null;
    return FILES.find((f) => f.name === name) || null;
  }, [params]);

  const Card = ({ f }: { f: FileItem }) => (
    <article
      id={`file-${encodeURIComponent(f.name)}`}
      className="rounded-2xl overflow-hidden hover-glow bg-transparent border scroll-mt-24"
      style={{ borderColor: "#0f4b2e" }}
    >
      <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 items-start sm:items-center">
        <div className="shrink-0 rounded-xl bg-white/15 p-2 border border-white/30 shadow-glow self-start">
          <img
            src={f.logo}
            alt={`${f.name} logo`}
            className="h-16 w-16 object-contain" loading="lazy"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              if (t.src !== window.location.origin + "/placeholder.svg") t.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="font-minecrafter text-lg md:text-2xl text-white/95 break-words leading-tight">{f.name}</h3>
            <span className="text-[10px] md:text-xs px-2 py-1 rounded-md bg-primary/20 text-primary border border-primary/40 whitespace-nowrap">
              {f.tag}
            </span>
          </div>
          <p className="mt-2 text-white/90 leading-relaxed text-sm md:text-base break-words">{f.desc}</p>
          <div className="mt-4 md:mt-5">
            <a href={f.link} target="_blank" rel="noopener noreferrer" className="btn-download inline-flex gap-2 animate-bounce-in">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section className="relative py-16 container mx-auto">
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-minecrafter title-glow text-center mb-10">
          Files Showcase
        </h1>
      </Reveal>

      {activeBundle ? (
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-minecrafter text-center text-white mb-4">
              {activeBundle.title}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activeBundle.items.map((f, i) => (
              <Reveal key={f.name} delay={i * 90}>
                <Card f={f} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : activeFile ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Reveal>
            <Card f={activeFile} />
          </Reveal>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FILES.map((f, i) => (
            <Reveal key={f.name} delay={i * 60}>
              <Card f={f} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
