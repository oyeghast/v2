import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SHORTS } from "@/data/shorts";
import { FILES } from "@/data/files";
import { BUNDLES } from "@/data/bundles";
import { fetchYouTubeTitles } from "@/lib/yt";

// Lightweight preindexing for faster substring queries on large lists
const FILES_INDEX = FILES.map((f) => ({ text: `${f.name} ${f.desc} ${f.tag}`.toLowerCase(), name: f.name }));
const BUNDLES_INDEX = BUNDLES.map((b) => ({ text: `${b.title} ${b.items.join(" ")}`.toLowerCase(), id: b.id, title: b.title }));

export default function Search({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [ytTitles, setYtTitles] = useState<Record<string, string>>({});
  useEffect(() => {
    fetchYouTubeTitles(SHORTS.map((s) => s.id)).then(setYtTitles);
  }, []);
  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [] as { label: string; sub: string; href: string }[];

    const shorts = SHORTS.filter((s) => (ytTitles[s.id] || s.title).toLowerCase().includes(query)).map(
      (s) => ({
        label: ytTitles[s.id] || s.title,
        sub: "Shorts",
        href: `/shorts?s=${encodeURIComponent(s.id)}`,
      }),
    );

    const files = FILES_INDEX.filter((fi) => fi.text.includes(query)).map((fi) => ({
      label: fi.name,
      sub: "Download",
      href: `/downloads?f=${encodeURIComponent(fi.name)}`,
    }));

    const bundles = BUNDLES_INDEX.filter((bi) => bi.text.includes(query)).map((bi) => ({
      label: bi.title,
      sub: "Download Pack",
      href: `/downloads?bundle=${encodeURIComponent(bi.id)}`,
    }));

    return [...shorts, ...files, ...bundles].slice(0, 16);
  }, [q, ytTitles]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-2xl glass-panel outline-glow p-4 will-change-transform">
        <div className="flex items-center gap-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Shorts and Downloads..."
            className="w-full bg-transparent outline-none text-white placeholder:text-white/60"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-md border border-white/20 text-white/80 hover-glow"
          >
            Esc
          </button>
        </div>
        <div className="mt-3 max-h-80 overflow-y-auto grid gap-2">
          {q && results.length === 0 && (
            <div className="text-white/70 text-sm">No results</div>
          )}
          {results.map((r, i) => (
            <Link
              key={i}
              to={r.href}
              onClick={() => setTimeout(onClose, 0)}
              className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 border border-white/15 hover-glow"
            >
              <span className="text-white">{r.label}</span>
              <span className="text-xs text-white/60">{r.sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
