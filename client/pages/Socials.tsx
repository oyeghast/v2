import Reveal from "@/components/site/Reveal";

export default function Socials() {
  return (
    <section className="relative py-16 container mx-auto">
      <Reveal>
        <h1 className="text-3xl md:text-5xl font-minecrafter title-glow text-center">Thanks for visiting! Explore more Minecraft files in our Downloads section.</h1>
      </Reveal>
      <Reveal delay={140}>
        <div className="mt-10 flex justify-center gap-6">
          <a className="glass-panel outline-glow hover-glow p-4 rounded-2xl" href="https://www.instagram.com/realsteelwing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
          </a>
          <a className="glass-panel outline-glow hover-glow p-4 rounded-2xl" href="https://youtube.com/@steel-wing" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.7 20.5 12 20.5 12 20.5s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5v-7l6 3.5-6 3.5z"/></svg>
          </a>
          <a className="glass-panel outline-glow hover-glow p-4 rounded-2xl" href="https://discord.com/users/steelwing" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4a16 16 0 0 0-4.2-1.3l-.2.4A13 13 0 0 1 12 3c-1.3 0-2.6.2-3.8.6l-.2-.4A16 16 0 0 0 4 4C1.9 7.1 1.3 10.1 1.5 13c2 1.5 3.9 2.4 5.8 3l.7-1.2c-.4-.1-.8-.3-1.1-.5.1-.1.2-.2.3-.3 2 .9 4.1.9 6.2 0 .1.1.2.2.3.3-.4.2-.7.4-1.1.5l.7 1.2c1.9-.6 3.8-1.5 5.8-3 .3-3-.4-5.9-3.1-9zM9.2 13.6c-.7 0-1.3-.7-1.3-1.6s.6-1.6 1.3-1.6 1.3.7 1.3 1.6-.6 1.6-1.3 1.6zm5.6 0c-.7 0-1.3-.7-1.3-1.6s.6-1.6 1.3-1.6 1.3.7 1.3 1.6-.6 1.6-1.3 1.6z"/></svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
