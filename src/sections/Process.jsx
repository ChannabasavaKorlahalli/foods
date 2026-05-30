import { Reveal } from '../components/ui/Reveal';
import { PROCESS } from '../data/site';

export function Process() {
  return (
    <section id="process" className="border-y border-white/[0.06] bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Execution</p>
          <h2 className="section-heading mt-4">How We Work</h2>
          <p className="section-lead">
            A disciplined export process from first conversation to vessel departure — designed for trading
            desks that demand clarity and accountability.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) + 1}>
              <article className="glass h-full rounded-2xl p-6 transition hover:border-gold/25">
                <span className="text-xs font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-creamMuted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
