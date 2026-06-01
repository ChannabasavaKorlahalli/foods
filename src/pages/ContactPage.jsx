import { Reveal } from '../components/ui/Reveal';
import { Contact } from '../sections/Contact';
import { FinalCTA } from '../sections/FinalCTA';

export function ContactPage() {
  return (
    <div className="pt-32 lg:pt-36">
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="section-heading mt-4">Request an import quotation</h1>
          <p className="section-lead">
            Share your commodity, volume, destination, and quality requirements. Our export desk will respond
            with availability and commercial terms.
          </p>
        </Reveal>
      </section>
      <Contact embedded />
      <FinalCTA />
    </div>
  );
}
