import { Nav } from './components/Nav';
import { useReveal } from './hooks/useReveal';
import { Hero } from './sections/Hero';
import { Legacy } from './sections/Legacy';
import { Products } from './sections/Products';
import { Rice } from './sections/Rice';
import { Procurement } from './sections/Procurement';
import { Quality } from './sections/Quality';
import { WhyUs } from './sections/WhyUs';
import { Market } from './sections/Market';
import { Global } from './sections/Global';
import { Process } from './sections/Process';
import { FaqSection } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { FinalCTA } from './sections/FinalCTA';
import { LOGO, TAGLINE } from './data/site';

export default function App() {
  useReveal();

  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <main className="bg-navy text-cream">
        <Hero />
        <Legacy />
        <Products />
        <Rice />
        <Procurement />
        <Quality />
        <WhyUs />
        <Market />
        <Global />
        <Process />
        <FaqSection />
        <Contact />
        <FinalCTA />
      </main>
      <footer className="flex flex-col items-center gap-4 border-t border-white/[0.06] bg-navy px-5 py-10">
        <img src={LOGO} alt="" className="h-9 w-auto opacity-90" width={140} height={44} aria-hidden />
        <p className="text-center text-xs text-creamMuted">
          © {new Date().getFullYear()} Vaali Foods · {TAGLINE}
        </p>
      </footer>
    </>
  );
}
