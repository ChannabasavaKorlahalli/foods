import { Reveal } from '../components/ui/Reveal';
import { WhyUs } from '../sections/WhyUs';
import { Quality } from '../sections/Quality';

export function WhyUsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8 lg:pb-12">
        <Reveal>
          <p className="eyebrow">Why Us</p>
          <h1 className="section-heading mt-4">Why global buyers choose Vaali</h1>
          <p className="section-lead">
            Farmer-direct sourcing, independent quality verification, and institutional execution — built on
            150+ years of agricultural trade.
          </p>
        </Reveal>
      </section>
      <WhyUs embedded />
      <Quality embedded />
    </div>
  );
}
