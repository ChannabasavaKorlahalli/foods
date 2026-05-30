import { Reveal } from '../components/ui/Reveal';
import { REGIONS } from '../data/site';

const ORIGIN = { x: 68, y: 48 };

export function Global({ embedded = false }) {
  return (
    <section
      id="global"
      className={
        embedded
          ? 'border-t border-white/[0.06] bg-midnight py-16 lg:py-20'
          : 'py-24 lg:py-32'
      }
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          {embedded ? (
            <>
              <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                Global export network
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-creamMuted">
                Serving importers across the Middle East, Asia, Africa, and Europe from major Indian ports.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow">Global Reach</p>
              <h2 className="section-heading mt-4">Global Export Network</h2>
              <p className="section-lead">
                Serving importers across the Middle East, Asia, Africa, and Europe with containerized and bulk
                shipment programs from major Indian ports.
              </p>
            </>
          )}
        </Reveal>

        <Reveal className={embedded ? 'mt-10' : 'mt-14'}>
          <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-8">
            <svg viewBox="0 0 100 60" className="w-full text-midnightLight" aria-label="World map showing export regions">
              <rect width="100" height="60" fill="#0c1224" rx="2" />
              <ellipse cx="50" cy="30" rx="42" ry="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
              <ellipse cx="50" cy="30" rx="28" ry="14" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" />
              {REGIONS.map((r) => (
                <g key={r.id}>
                  <line
                    x1={ORIGIN.x}
                    y1={ORIGIN.y}
                    x2={r.x}
                    y2={r.y}
                    stroke="rgba(201, 162, 39, 0.35)"
                    strokeWidth="0.4"
                    className="map-line"
                  />
                  <circle cx={r.x} cy={r.y} r="1.8" fill="#c9a227" className="animate-pulse-glow" />
                  <text x={r.x} y={r.y - 3} textAnchor="middle" fill="#a8a49c" fontSize="2.8" fontFamily="Manrope, sans-serif">
                    {r.name}
                  </text>
                </g>
              ))}
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="2.5" fill="#e4c76b" />
              <text x={ORIGIN.x} y={ORIGIN.y + 5} textAnchor="middle" fill="#f5f3ef" fontSize="3" fontWeight="600">
                India
              </text>
            </svg>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {REGIONS.map((r) => (
                <div key={r.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-creamMuted">
                  {r.name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
