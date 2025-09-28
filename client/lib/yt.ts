export async function fetchYouTubeTitles(ids: string[]): Promise<Record<string, string>> {
  const uniq = Array.from(new Set(ids.filter(Boolean)));
  if (uniq.length === 0) return {};
  try {
    const res = await fetch(`/api/yt-titles?ids=${encodeURIComponent(uniq.join(','))}`);
    if (!res.ok) throw new Error('bad');
    const data = (await res.json()) as { id: string; title: string }[];
    const map: Record<string,string> = {};
    data.forEach((d) => (map[d.id] = d.title));
    return map;
  } catch {
    return {};
  }
}
