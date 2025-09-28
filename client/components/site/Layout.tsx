import { Link, NavLink, Outlet } from "react-router-dom";
import { PropsWithChildren, useEffect, useState } from "react";

function ActiveLink({
  to,
  label,
  disabled = false,
}: {
  to: string;
  label: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="px-4 py-2 rounded-xl text-slate-500/70 cursor-not-allowed bg-white/10 border border-white/20">
        {label}
      </span>
    );
  }
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-4 py-2 rounded-xl transition-colors hover-glow",
          isActive
            ? "text-white bg-[#0f4b2e] border border-[#1f8d56]/60"
            : "text-white/90 bg-[#0b1a14]/60 border border-[#0f4b2e]/60 hover:text-white",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

import Parallax from "@/components/site/Parallax";
import Search from "@/components/site/Search";

export function Layout({ children }: PropsWithChildren) {
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual" as History['scrollRestoration'];
      return () => {
        window.history.scrollRestoration = prev as History['scrollRestoration'];
      };
    }
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Parallax />

      <header className="sticky top-0 z-40">
        <div className="backdrop-blur-md bg-[#05160e]/85 border-b border-[#0f4b2e]/70">
          <nav className="container mx-auto flex items-center justify-between gap-3 py-3 px-4 sm:px-6">
            <Link to="/" className="flex items-center gap-3 group min-w-0">
              <img
                src="/wing.svg"
                alt="Steel Wing"
                className="h-8 w-8 animate-float drop-shadow"
              />
              <span className="font-minecrafter text-lg sm:text-xl tracking-wide text-white truncate">
                Steel Wing
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-2">
              <ActiveLink to="/" label="Home" />
              <ActiveLink to="/shorts" label="Shorts" />
              <ActiveLink to="/downloads" label="Download" />
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="px-3 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white/90 hover-glow"
              >
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
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="px-3 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white/90 hover-glow"
              >
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
              </button>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="px-3 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white/90 hover-glow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-[64px] left-0 right-0 mx-3 glass-panel outline-glow p-3 rounded-2xl">
            <div className="grid gap-2">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/shorts"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white"
              >
                Shorts
              </NavLink>
              <NavLink
                to="/downloads"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#0b1a14]/60 border border-[#0f4b2e]/60 text-white"
              >
                Download
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="relative">{children ?? <Outlet />}</main>

      <footer className="mt-24">
        <div className="container mx-auto py-8 text-center text-sm text-slate-600 dark:text-slate-300/80">
          <div className="flex items-center justify-center gap-2 opacity-80">
            <img src="/wing.svg" alt="wing" className="h-5 w-5 animate-float" />
            <p>Steel Wing • Minecraft creations</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
