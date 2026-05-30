import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from '../components/Nav';
import { useReveal } from '../hooks/useReveal';
import { LOGO, TAGLINE } from '../data/site';

export function SiteLayout() {
  useReveal();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <main className="bg-navy text-cream">
        <Outlet />
      </main>
      <footer className="flex flex-col items-center gap-4 border-t border-white/[0.06] bg-navy px-5 py-10">
        <img
          src={LOGO}
          alt="Vaali Foods"
          className="h-14 w-auto object-contain opacity-95"
          width={144}
          height={96}
        />
        <p className="text-center text-xs text-creamMuted">
          © {new Date().getFullYear()} Vaali Foods · {TAGLINE}
        </p>
      </footer>
    </>
  );
}
