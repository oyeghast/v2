import Reveal from "@/components/site/Reveal";
import { SHORTS } from "@/data/shorts";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import LiteYouTube from "@/components/site/LiteYouTube";
import { fetchYouTubeTitles } from "@/lib/yt";
import { SHORT_LINKS } from "@/data/shortLinks";
import { usePinnedScroll } from "@/hooks/use-pinned-scroll";

export default function Shorts() {
  const [params] = useSearchParams();
  const [titles, setTitles] = useState<Record<string, string>>({});
  useEffect(() => {
    fetchYouTubeTitles(SHORTS.map((s) => s.id)).then(setTitles);
  }, []);

  const shortId = params.get("s");
  const targetEl = shortId ? document.getElementById(`short-${shortId}`) : null;
  usePinnedScroll(targetEl, { durationMs: 1600, block: "start", behavior: "auto" });

  return (
    <section className="relative py-16 container mx-auto">
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-minecrafter title-glow text-center mb-10 text-white">
          Shorts Showcase
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SHORTS.map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <div
              id={`short-${s.id}`}
              className="rounded-2xl p-3 hover-glow scroll-mt-24 bg-transparent border"
              style={{ borderColor: "#0f4b2e" }}
            >
              <LiteYouTube id={s.id} title={titles[s.id] || s.title} />
              <p className="mt-3 text-center text-white">{titles[s.id] || s.title}</p>
              <div className="mt-2 flex justify-center">
                {(() => {
                  const spec = SHORT_LINKS[s.id];
                  let href = "/downloads";
                  if (spec?.type === "bundle") href = `/downloads?bundle=${encodeURIComponent(spec.value)}`;
                  else if (spec?.type === "file") href = `/downloads?f=${encodeURIComponent(spec.value)}`;
                  else if (spec?.type === "href") href = spec.value;
                  const isExternal = href.startsWith("http");
                  const cls = "px-3 py-1.5 rounded-lg text-xs border-2 border-red-500 text-white/90 hover-glow";
                  return isExternal ? (
                    <a href={href} className={cls}>Download</a>
                  ) : (
                    <Link to={href} className={cls}>Download</Link>
                  );
                })()}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
