import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { HERO_METRICS } from '../data/site';

export function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 17 + 7) % 100}%`,
        top: `${(i * 23 + 11) % 100}%`,
        size: 4 + (i % 5) * 2,
        duration: 6 + (i % 5) * 2,
        delay: (i % 7) * 0.4,
      })),
    []
  );

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-hero-gradient pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
            }}
          />
        ))}
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute -right-10 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <img
          src="/images/rice.jpg"
          alt=""
          className="absolute right-[5%] top-[20%] hidden h-40 w-40 rotate-12 rounded-2xl object-cover opacity-20 blur-[1px] lg:block xl:h-52 xl:w-52"
        />
        <img
          src="/images/pulses.png"
          alt=""
          className="absolute bottom-[25%] left-[8%] hidden h-32 w-32 -rotate-6 rounded-2xl object-cover opacity-15 lg:block"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-8 lg:px-8 lg:pb-24">
        <Reveal>
          <p className="eyebrow">Vaali Foods · Agricultural Commodities Export</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
            150 Years of Agricultural Trading Excellence
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-creamMuted">
            Farmer-direct rice, pulses, groundnuts, and maize — laboratory-verified, fully traceable, and
            export-ready for global buyers.
          </p>
        </Reveal>
        <Reveal delay={2} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact" className="btn-gold">
            Get Your Import Quote <ArrowRight size={18} />
          </Link>
          <a href="#commodities" className="btn-ghost">
            Explore Products
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20 lg:gap-6">
          {HERO_METRICS.map((m, i) => (
            <Reveal key={m.label} delay={(i % 3) + 1}>
              <div className="glass rounded-2xl p-5 lg:p-6">
                <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">{m.value}</p>
                <p className="mt-1 text-xs text-creamMuted sm:text-sm">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <a
        href="#legacy"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-creamMuted transition hover:text-gold"
        aria-label="Scroll to legacy section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
