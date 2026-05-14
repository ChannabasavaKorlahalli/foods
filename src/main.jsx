import React, { useEffect, useId } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import './styles.css';

/** Assorted dals / pulses — used site-wide so we don’t pair wrong stock with each variety. */
const PULSE_VISUAL =
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=88';

const pulses = [
  'Cowpea',
  'Blackgram',
  'Horse gram',
  'Pigeon peas',
  'Kala chana',
  'Mung',
];

/** Geometric mark: gold + steel, connected nodes (reference-style). */
function BrandMark({ className }) {
  const uid = useId().replace(/:/g, '');
  const gradId = `kvk-mark-grad-${uid}`;
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="6" y1="10" x2="50" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d5ad6d" />
          <stop offset="1" stopColor="#9eb0bf" />
        </linearGradient>
      </defs>
      <path
        d="M12 42 L22 12 L30 42"
        stroke="#d5ad6d"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 12 L34 42 L26 12"
        stroke="#9eb0bf"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="21" y1="28" x2="35" y2="28" stroke={`url(#${gradId})`} strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="21" cy="28" r="3.2" fill="#d5ad6d" />
      <circle cx="35" cy="28" r="3.2" fill="#9eb0bf" />
    </svg>
  );
}

function BrandLogo({ variant = 'header', className = '' }) {
  const footer = variant === 'footer';
  return (
    <div
      className={`flex items-center gap-2.5 sm:gap-3 ${footer ? 'opacity-95' : ''} ${className}`}
    >
      <BrandMark className={footer ? 'h-9 w-9 shrink-0 sm:h-10 sm:w-10' : 'h-10 w-10 shrink-0 sm:h-11 sm:w-11'} />
      <div className="min-w-0 leading-none">
        <p className="font-sans text-lg font-semibold tracking-[0.38em] text-grain sm:text-xl">KVK</p>
        <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
          <span className="h-px w-4 shrink-0 bg-grain/50 sm:w-5" />
          <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-grain/90 sm:text-[9px]">
            Pulses trading
          </span>
          <span className="h-px w-4 shrink-0 bg-grain/50 sm:w-5" />
        </div>
        {!footer && (
          <p className="mt-1.5 hidden text-[9px] font-medium uppercase tracking-[0.18em] text-steel/95 sm:block">
            K. Veerabhadrappa &amp; Co
          </p>
        )}
      </div>
    </div>
  );
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-linen">
      <Navigation />
      <Hero />
      <Pulses />
      <About />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <header className="nav-grid fixed left-0 right-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4">
        <a href="#home" className="group min-w-0 shrink focus:outline-none focus-visible:ring-2 focus-visible:ring-grain/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          <span className="sr-only">KVK — K. Veerabhadrappa &amp; Co, pulses trading</span>
          <BrandLogo />
        </a>
        <div className="hidden items-center gap-8 text-sm text-linen/70 md:flex">
          <a className="transition hover:text-grain" href="#pulses">
            Pulses
          </a>
          <a className="transition hover:text-grain" href="#about">
            About
          </a>
          <a className="transition hover:text-grain" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-grain/40 px-4 text-sm font-medium text-grain transition hover:border-grain hover:bg-grain hover:text-ink"
        >
          Enquire <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={PULSE_VISUAL}
          alt="Bowls of cooked pulses and dals"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/88 to-forest/55" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-28">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-grain/35 bg-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-grain sm:text-xs sm:tracking-[0.28em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-grain" aria-hidden />
            Wholesale pulses · 50+ years
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Wholesale pulses.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-linen/75">
            Whole and split lots. Local APMC pulse share over 40%. Five decades in trade.
          </p>
          <a className="btn-primary mt-8 inline-flex" href="#contact">
            Enquire <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal className="lg:justify-self-end">
          <dl className="grid max-w-sm gap-4 border border-white/12 bg-white/[0.06] p-6 shadow-premium backdrop-blur-xl">
            <div className="border-b border-white/10 pb-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-linen/50">Trading history</dt>
              <dd className="mt-1 font-display text-4xl text-grain">50+</dd>
              <dd className="text-sm text-linen/65">years</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-linen/50">Local APMC (pulses)</dt>
              <dd className="mt-1 font-display text-4xl text-grain">&gt;40%</dd>
              <dd className="text-sm text-linen/65">market share</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Pulses() {
  return (
    <section id="pulses" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Pulses</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl lg:text-5xl">What we move.</h2>
          <p className="mt-4 text-sm text-linen/60">Available whole and split, as per lot and season.</p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {pulses.map((name) => (
              <li
                key={name}
                className="border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <div className="overflow-hidden border border-white/10 shadow-premium">
            <img
              className="aspect-[4/3] w-full object-cover lg:aspect-square"
              src={PULSE_VISUAL}
              alt="Assorted pulses and dals"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-forest/50 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">KVK</h2>
          <p className="mt-6 text-base leading-7 text-linen/68">
            Pulses trading through the local APMC channel. Sourcing, grading, and bulk dispatch for
            buyers who work in volume.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#050705]">
      <div className="absolute inset-0 opacity-25">
        <img className="h-full w-full object-cover" src={PULSE_VISUAL} alt="" aria-hidden />
        <div className="absolute inset-0 bg-ink/92" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">Pulse enquiry.</h2>
          <p className="mt-4 max-w-md text-sm text-linen/60">
            Commodity, quantity, spec, and delivery point.
          </p>
        </Reveal>
        <Reveal className="border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
          <div className="space-y-4">
            <a className="contact-row" href="tel:+910000000000">
              <Phone size={20} />
              <span>+91 00000 00000</span>
            </a>
            <a className="contact-row" href="mailto:trade@kvk.example">
              <ArrowRight size={20} />
              <span>trade@kvk.example</span>
            </a>
            <div className="contact-row">
              <MapPin size={20} />
              <span>India</span>
            </div>
          </div>
          <a className="btn-primary mt-6 w-full justify-center" href="mailto:trade@kvk.example">
            Email <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
      <div className="relative flex flex-col items-center gap-4 border-t border-white/10 px-5 py-8 sm:flex-row sm:justify-center sm:gap-8">
        <BrandLogo variant="footer" />
        <p className="max-w-xs text-center text-[10px] uppercase leading-relaxed tracking-[0.2em] text-linen/40 sm:max-w-none sm:text-left">
          K. Veerabhadrappa &amp; Co
        </p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
