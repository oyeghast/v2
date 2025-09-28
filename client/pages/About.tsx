import Reveal from "@/components/site/Reveal";
import AboutShorts from "@/components/site/AboutShorts";

const logoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2F532cf7458fb142af8ba3cc434c839f6d%2F421f4755f01d4f65b4333aa07215724c?format=webp&width=800";
const channelUrl = "https://youtube.com/@steel-wing?si=Ioy3RHVGRn7k6gyL";
const instagramUrl = "https://www.instagram.com/realsteelwing";

export default function About() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-minecrafter title-glow text-center">
            About Me
          </h1>
        </Reveal>

        {/* Intro card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Reveal className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/25 rounded-2xl p-3 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-flip-x shadow-glow">
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Steel Wing logo"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={logoUrl}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/wing.svg";
                  }}
                  alt="Steel Wing logo"
                  className="h-44 w-44 sm:h-52 sm:w-52 object-contain rounded-xl animate-wing-sway"
                />
              </a>
              <div className="absolute -z-10 -inset-3 rounded-3xl blur-xl bg-[radial-gradient(circle_at_center,rgba(130,170,255,0.35),transparent_60%)]" />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <article className="glass-panel outline-glow p-8 h-full">
              <p className="text-lg md:text-xl leading-relaxed text-white">
                <span className="font-minecrafter text-primary">
                  Steel Wing
                </span>{" "}
                is a Minecraft creator focused on modern, performance‑friendly
                content:
              </p>
              <ul className="mt-4 grid gap-3 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-primary">◆</span> Free resource packs
                  that enhance visuals (glowing ores, clear pumpkin, visible
                  archaeology blocks).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">◆</span> Utility mods and
                  tweaks aimed at smoother gameplay without breaking vanilla
                  vibe.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">◆</span> Shorts that showcase
                  tips, builds, clutches, and fun mechanics.
                </li>
              </ul>
              <p className="mt-4 text-slate-700 dark:text-slate-200">
                The goal is simple: help you play better and look better—while
                keeping your world uniquely yours.
              </p>
              <div className="mt-6 h-2 rounded-full shimmer-bg animate-shimmer" />

              {/* Social logos below description */}
              <div className="mt-6 flex gap-4 items-center">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel outline-glow hover-glow p-3 rounded-xl"
                  aria-label="YouTube"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.7 20.5 12 20.5 12 20.5s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel outline-glow hover-glow p-3 rounded-xl"
                  aria-label="Instagram"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Channel section */}
        <Reveal delay={150}>
          <h2 className="mt-16 text-2xl md:text-3xl font-minecrafter title-glow text-center">
            Steel Wing on YouTube
          </h2>
        </Reveal>
        <AboutShorts />
        <div className="mt-6 text-center">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Channel
          </a>
        </div>
      </div>
    </section>
  );
}
