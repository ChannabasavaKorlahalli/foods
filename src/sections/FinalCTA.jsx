import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gold-gradient opacity-[0.07]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.15),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
            Partner With One Of India&apos;s Most Trusted Agricultural Trading Families
          </h2>
          <p className="mt-6 text-lg text-creamMuted">
            150 years of expertise. Farmer-direct sourcing. Global execution.
          </p>
          <Link to="/contact" className="btn-gold mt-10 inline-flex">
            Get Your Import Quote <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
