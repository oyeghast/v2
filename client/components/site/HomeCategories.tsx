export default function HomeCategories() {
  const items = [
    {
      title: "Mods",
      desc: "Enhance gameplay with optimized, exciting features.",
    },
    {
      title: "Plugins",
      desc: "Server‑ready tools crafted for performance.",
    },
    {
      title: "Texture Packs",
      desc: "Crisp visuals with metallic blue accents removed — now green themed.",
    },
    {
      title: "More",
      desc: "Command packs, datapacks, and utilities.",
    },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: "#05160e" }}>
      <div className="container mx-auto px-4 pt-2 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl p-4 md:p-5 bg-transparent border text-white/90 hover-glow"
              style={{ borderColor: "#0f4b2e" }}
            >
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
