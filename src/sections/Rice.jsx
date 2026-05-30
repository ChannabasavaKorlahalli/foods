import { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { RICE_VARIETIES } from '../data/site';

export function Rice() {
  const [filter, setFilter] = useState('basmati');
  const varieties = filter === 'basmati' ? RICE_VARIETIES.basmati : RICE_VARIETIES.nonBasmati;

  return (
    <section id="rice" className="relative overflow-hidden border-y border-gold/20 bg-midnight py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Rice Specialization</p>
          <h2 className="section-heading mt-4 max-w-3xl">India&apos;s Complete Rice Supply Partner</h2>
          <p className="section-lead max-w-3xl">
            We supply all major varieties of Basmati and Non-Basmati rice directly from sourcing regions and
            farmers — with buyer-defined moisture, broken percentage, and packaging.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {['basmati', 'nonBasmati'].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                filter === key
                  ? 'bg-gold-gradient text-navy shadow-glow'
                  : 'glass text-creamMuted hover:text-cream'
              }`}
            >
              {key === 'basmati' ? 'Basmati' : 'Non-Basmati'}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {varieties.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) + 1}>
              <article className="glass group rounded-2xl p-6 transition hover:border-gold/40 hover:shadow-glow">
                <h3 className="font-display text-xl font-semibold text-gold">{v.name}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  {[
                    ['Grain length', v.grain],
                    ['Moisture', v.moisture],
                    ['Broken', v.broken],
                    ['Packaging', v.pack],
                  ].map(([dt, dd]) => (
                    <div key={dt} className="flex justify-between gap-4 border-b border-white/5 pb-2">
                      <dt className="text-creamMuted">{dt}</dt>
                      <dd className="text-right font-medium text-cream">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
