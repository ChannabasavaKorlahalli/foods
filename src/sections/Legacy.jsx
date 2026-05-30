import { Reveal } from '../components/ui/Reveal';
import { TIMELINE } from '../data/site';

export function Legacy() {
  return (
    <section id="legacy" className="border-y border-white/[0.06] bg-midnight py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Heritage</p>
          <h2 className="section-heading mt-4">Built Across Generations</h2>
          <p className="section-lead max-w-2xl">
            Over 150 years of agricultural trading — from local mandis to integrated global export programs.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:mt-12 lg:grid-cols-4">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={(i % 3) + 1}>
              <article className="glass h-full rounded-2xl p-5 transition hover:border-gold/25">
                <p className="font-display text-2xl font-semibold text-gold">{item.year}</p>
                <h3 className="mt-3 text-sm font-semibold text-cream">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-creamMuted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
