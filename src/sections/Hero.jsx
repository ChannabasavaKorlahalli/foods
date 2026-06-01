import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Droplets, Globe2, Layers, Sprout, Wheat } from 'lucide-react';
import { HERO_METRICS, TAGLINE } from '../data/site';

const commodities = [
  { label: 'Rice', icon: Wheat },
  { label: 'Pulses', icon: Layers },
  { label: 'Neem Oil', icon: Droplets },
  { label: 'Maize', icon: Sprout },
];

function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto aspect-square w-full max-w-md lg:max-w-none" aria-hidden>
      {/* Orbital rings */}
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-ring hero-ring-3" />

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-midnight/90 shadow-glow backdrop-blur-md">
          <Globe2 className="text-gold" size={36} strokeWidth={1.25} />
        </div>
        <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">India → World</span>
      </div>

      {/* Commodity nodes on orbit */}
      {commodities.map((c, i) => {
        const Icon = c.icon;
        const angle = (i / commodities.length) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const r = 42;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div
            key={c.label}
            className="hero-orbit-node absolute z-20 flex flex-col items-center gap-1.5"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-midnight/80 shadow-card backdrop-blur-md transition hover:border-gold/40">
              <Icon className="text-goldLight" size={20} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-creamMuted">{c.label}</span>
          </div>
        );
      })}

      {/* Connecting lines SVG */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(201,162,39,0.12)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(137,171,227,0.1)" strokeWidth="1" />
        {[0, 90, 180, 270].map((deg) => {
          const rad = ((deg - 90) * Math.PI) / 180;
          const x2 = 200 + 168 * Math.cos(rad);
          const y2 = 200 + 168 * Math.sin(rad);
          return (
            <line
              key={deg}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="rgba(201,162,39,0.15)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Large watermark year */}
      <span className="hero-watermark font-display">150</span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Background layers — no photos */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="hero-glow-gold absolute -left-32 top-0 h-[480px] w-[480px] rounded-full" />
        <div className="hero-glow-blue absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-6 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy column */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Vaali Foods · Export
              </span>
            </div>

            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
              <span className="block text-creamMuted/90">150 years of</span>
              <span className="mt-1 block bg-gold-gradient bg-clip-text text-transparent">
                agricultural trading excellence
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-creamMuted sm:text-lg">
              Farmer-direct rice, pulses, neem oil, and maize — laboratory-verified, fully traceable,
              and export-ready for global buyers.
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-gold/80">{TAGLINE}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className="btn-gold">
                Get Your Import Quote <ArrowRight size={18} />
              </Link>
              <a href="#commodities" className="btn-ghost">
                Explore Products
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
              {commodities.map((c) => (
                <span
                  key={c.label}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-creamMuted"
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mt-14 lg:mt-20">
          <div className="hero-metrics glass overflow-hidden rounded-2xl border-gold/10">
            <div className="grid grid-cols-2 divide-white/5 sm:grid-cols-4 sm:divide-x">
              {HERO_METRICS.map((m) => (
                <div key={m.label} className="px-5 py-6 text-center sm:px-6 lg:py-7">
                  <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">{m.value}</p>
                  <p className="mt-1.5 text-xs text-creamMuted sm:text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#legacy"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-creamMuted transition hover:text-gold"
        aria-label="Scroll to heritage section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
