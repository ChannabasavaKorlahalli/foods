import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BackToTop } from '../components/BackToTop';
import { Nav } from '../components/Nav';
import { LOGO, TAGLINE } from '../data/site';

export function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <main className="bg-hero-gradient text-cream">
        <Outlet />
      </main>
      <BackToTop />
      <footer className="flex flex-col items-center gap-4 border-t border-white/[0.06] bg-navy px-5 py-10">
        <span className="logo-shell">
          <img
            src={LOGO}
            alt="Vaali Foods"
            className="logo-img opacity-95"
            width={167}
            height={161}
            loading="lazy"
            decoding="async"
          />
        </span>
        <p className="text-center text-xs text-creamMuted">
          © {new Date().getFullYear()} Vaali Foods · {TAGLINE}
        </p>
      </footer>
    </>
  );
}
