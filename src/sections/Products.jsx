import { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { TiltCard } from '../components/ui/TiltCard';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { PRODUCTS } from '../data/site';

export function Products() {
  const [active, setActive] = useState(null);

  return (
    <section id="commodities" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Export commodities</p>
          <h2 className="section-heading mt-4">What we supply to global buyers</h2>
          <p className="section-lead">
            Farmer-direct rice, pulses, groundnuts, and maize — graded, documented, and shipped to importers
            worldwide.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) + 1}>
              <TiltCard className="glass overflow-hidden rounded-2xl">
                <div onMouseEnter={() => setActive(p.id)} onMouseLeave={() => setActive(null)}>
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    onFocus={() => setActive(p.id)}
                    onBlur={() => setActive(null)}
                  >
                    <OptimizedImage
                      src={p.image}
                      alt={p.name}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <div className="absolute bottom-0 p-6 lg:p-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.tagline}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-cream lg:text-3xl">{p.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <ul className="space-y-2 text-sm text-creamMuted">
                      {p.specs.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="text-gold">—</span> {s}
                        </li>
                      ))}
                    </ul>
                    <p
                      className={`mt-4 text-sm leading-relaxed text-cream/80 transition-all duration-500 ${
                        active === p.id
                          ? 'max-h-40 opacity-100'
                          : 'max-h-0 overflow-hidden opacity-0 lg:max-h-40 lg:opacity-100'
                      }`}
                    >
                      {p.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
