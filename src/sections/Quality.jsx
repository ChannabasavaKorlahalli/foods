import { Reveal } from '../components/ui/Reveal';
import { StatCounter } from '../components/ui/StatCounter';
import { QUALITY_METRICS } from '../data/site';

export function Quality({ embedded = false }) {
  return (
    <section
      id="quality"
      className={
        embedded
          ? 'border-t border-white/[0.06] bg-midnight py-16 lg:py-20'
          : 'border-y border-white/[0.06] bg-midnight py-24 lg:py-32'
      }
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Quality Assurance</p>
          <h2 className="section-heading mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Trust built on transparency
          </h2>
          <p className="section-lead">
            Laboratory-tested lots with documented moisture, purity, foreign matter, and grade — shared before
            every shipment release.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-2xl p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-creamMuted">Specification dashboard</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {QUALITY_METRICS.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-creamMuted">{m.label}</span>
                      <span className="font-semibold text-gold">{`${m.value}${m.unit}`}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gold-gradient transition-all duration-1000"
                        style={{ width: `${Math.min((m.value / m.max) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={1}>
              <div className="glass rounded-2xl border-gold/20 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Sample certificate</p>
                <div className="mt-4 space-y-2 font-mono text-xs text-creamMuted">
                  <p>VAALI FOODS — EXPORT LOT QC/2026/0847</p>
                  <p>Commodity: Basmati 1121 · Origin: India</p>
                  <p>Moisture: 12.4% · Broken: 1.2% · Grade: A</p>
                  <p className="pt-2 text-gold">Status: APPROVED FOR EXPORT</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <StatCounter end={99} suffix="%" label="Avg. Purity Score" duration={1800} />
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <StatCounter end={100} suffix="%" label="Lots Documented" duration={2000} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
