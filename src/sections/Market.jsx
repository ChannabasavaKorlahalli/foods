import { Reveal } from '../components/ui/Reveal';
import { StatCounter } from '../components/ui/StatCounter';

export function Market() {
  return (
    <section id="market" className="border-y border-white/[0.06] bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Market Leadership</p>
          <h2 className="section-heading mt-4">A Dominant Presence in Agricultural Markets</h2>
          <p className="section-lead mx-auto">
            Generations of mandi presence, farmer relationships, and export execution — measured in decades,
            not quarters.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          <Reveal>
            <StatCounter end={150} suffix="+" label="Years Legacy" />
          </Reveal>
          <Reveal delay={1}>
            <StatCounter end={45} suffix="%" label="Monthly Market Share" />
          </Reveal>
          <Reveal delay={2}>
            <StatCounter end={12} suffix="K+" label="Farmers in Network" />
          </Reveal>
          <Reveal delay={3}>
            <StatCounter end={4} suffix="" label="Core Commodity Categories" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
