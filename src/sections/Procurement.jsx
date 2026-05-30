import { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { PROCUREMENT_STEPS } from '../data/site';

export function Procurement({ embedded = false }) {
  const [active, setActive] = useState(0);

  return (
    <section id="procurement" className={embedded ? 'py-16 lg:py-20' : 'py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          {embedded ? (
            <>
              <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                Farmer-direct sourcing
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-creamMuted">
                Direct procurement from farmers and networks — lower cost, faster execution, full traceability.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow">Supply Chain</p>
              <h2 className="section-heading mt-4">The Advantage of Farmer-Direct Sourcing</h2>
              <p className="section-lead">
                Direct procurement from farmers and farmer networks — lower cost, faster execution, and complete
                traceability from field to foreign port.
              </p>
            </>
          )}
        </Reveal>

        <div className={`lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 ${embedded ? 'mt-10' : 'mt-14'}`}>
          <div className="relative hidden lg:block">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />
            <div className="space-y-2">
              {PROCUREMENT_STEPS.map((s, i) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition ${
                    active === i ? 'glass text-cream' : 'text-creamMuted hover:text-cream'
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      active === i ? 'bg-gold text-navy' : 'border border-white/20'
                    }`}
                  >
                    {s.step}
                  </span>
                  <span className="text-sm font-medium">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="glass rounded-2xl p-8 lg:p-10">
              <p className="text-sm font-semibold text-gold">Step {PROCUREMENT_STEPS[active].step}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cream lg:text-3xl">
                {PROCUREMENT_STEPS[active].title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-creamMuted">
                {PROCUREMENT_STEPS[active].text}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
          {PROCUREMENT_STEPS.map((s, i) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${
                active === i ? 'bg-gold/20 text-gold' : 'glass text-creamMuted'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
