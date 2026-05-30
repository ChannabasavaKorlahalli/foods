import { Reveal } from '../components/ui/Reveal';
import { WHY_US } from '../data/site';

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Buyer Advantage</p>
          <h2 className="section-heading mt-4">Why Global Buyers Choose Vaali</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) + 1}>
              <article className="group glass flex h-full flex-col rounded-2xl p-8 transition hover:border-gold/30 hover:shadow-glow lg:p-10">
                <span className="font-display text-5xl font-semibold text-gold/30 transition group-hover:text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream lg:text-2xl">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-creamMuted lg:text-base">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
