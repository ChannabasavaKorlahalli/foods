import { Reveal } from '../components/ui/Reveal';
import { Process } from '../sections/Process';
import { Procurement } from '../sections/Procurement';
import { Global } from '../sections/Global';
import { FaqSection } from '../sections/FAQ';

const anchors = [
  { href: '#process', label: 'Process' },
  { href: '#procurement', label: 'Sourcing' },
  { href: '#global', label: 'Markets' },
  { href: '#faq', label: 'FAQ' },
];

export function HowWeWorkPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">How We Work</p>
          <h1 className="section-heading mt-4">From inquiry to international delivery</h1>
          <p className="section-lead">
            A disciplined export process — farmer-direct sourcing, global market reach, and transparent
            answers to your commercial questions.
          </p>
        </Reveal>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="How we work sections">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-creamMuted transition hover:border-gold/40 hover:text-gold"
            >
              {a.label}
            </a>
          ))}
        </nav>
      </section>
      <Process embedded />
      <Procurement embedded />
      <Global embedded />
      <FaqSection embedded />
    </div>
  );
}
