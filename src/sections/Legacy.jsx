import { Reveal } from '../components/ui/Reveal';
import { TIMELINE } from '../data/site';

export function Legacy() {
  return (
    <section id="legacy" className="border-y border-white/[0.06] bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Heritage</p>
          <h2 className="section-heading mt-4">Built Across Generations</h2>
          <p className="section-lead">
            VAALI FOODS represents over 150 years of legacy in agricultural trading — from local mandis to
            integrated global export programs.
          </p>
        </Reveal>

        <div className="timeline-track mt-14 flex gap-5 overflow-x-auto pb-4 lg:mt-16 lg:gap-6">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={(i % 3) + 1} className="min-w-[280px] flex-shrink-0 sm:min-w-[300px]">
              <article className="group glass h-full rounded-2xl p-6 transition hover:border-gold/30 lg:p-8">
                <p className="font-display text-3xl font-semibold text-gold">{item.year}</p>
                <h3 className="mt-4 text-lg font-semibold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-creamMuted">{item.text}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
