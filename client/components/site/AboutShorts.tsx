import Reveal from "@/components/site/Reveal";
import { SHORTS } from "@/data/shorts";
import LiteYouTube from "@/components/site/LiteYouTube";
import { useEffect, useState } from "react";
import { fetchYouTubeTitles } from "@/lib/yt";

export default function AboutShorts() {
  const [titles, setTitles] = useState<Record<string, string>>({});
  useEffect(() => {
    fetchYouTubeTitles(SHORTS.map((s) => s.id)).then(setTitles);
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {SHORTS.map((s, i) => (
        <Reveal key={s.id} delay={i * 90}>
          <div className="glass-panel outline-glow p-3 hover-glow">
            <LiteYouTube id={s.id} title={titles[s.id] || s.title} />
            <p className="mt-3 text-center text-slate-800/90 dark:text-slate-200">
              {titles[s.id] || s.title}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
