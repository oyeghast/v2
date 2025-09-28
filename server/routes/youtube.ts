import type { RequestHandler } from "express";

async function getTitle(id: string) {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(
    id,
  )}&format=json`;
  const r = await fetch(url, { headers: { "User-Agent": "steel-wing-site" } });
  if (!r.ok) return null;
  const j = (await r.json()) as { title?: string };
  return j.title ?? null;
}

export const getYouTubeTitles: RequestHandler = async (req, res) => {
  try {
    const idsParam = String(req.query.ids || "");
    const ids = idsParam.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 25);
    const out: { id: string; title: string }[] = [];
    await Promise.all(
      ids.map(async (id) => {
        const t = await getTitle(id);
        if (t) out.push({ id, title: t });
      }),
    );
    res.json(out);
  } catch (e) {
    res.status(500).json({ error: "failed" });
  }
};
