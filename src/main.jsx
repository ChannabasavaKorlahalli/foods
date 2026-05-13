import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';
import './styles.css';

const produce = [
  {
    name: 'Cowpea',
    note: 'Cleaned, graded lots for wholesalers, millers, and food processors.',
    image:
      'https://images.unsplash.com/photo-1612197529245-f2d75e74c9ad?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Blackgram',
    note: 'Reliable urad sourcing with disciplined quality checks and dispatch planning.',
    image:
      'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Horsegram',
    note: 'Regional procurement strength for bulk movement and seasonal availability.',
    image:
      'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1200&q=85',
  },
];

const services = [
  {
    icon: Sprout,
    title: 'Sourcing & Aggregation',
    text: 'Market-connected procurement across pulses with steady supplier relationships and seasonal buying discipline.',
  },
  {
    icon: PackageCheck,
    title: 'Grading & Lot Control',
    text: 'Structured handling for moisture, size, cleanliness, packing, and buyer-specific requirements.',
  },
  {
    icon: Truck,
    title: 'Bulk Trade Logistics',
    text: 'Coordinated dispatches for traders, processors, wholesalers, and institutional buyers.',
  },
  {
    icon: BarChart3,
    title: 'Market Advisory',
    text: 'Practical guidance on availability, pricing windows, and movement timing for pulse categories.',
  },
];

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
      <ProduceShowcase />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-grain/50 bg-grain/10 text-sm font-semibold text-grain">
            K
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">KVK</span>
            <span className="block text-xs text-linen/55">Agricultural Trade</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-linen/70 md:flex">
          <a className="transition hover:text-grain" href="#produce">
            Produce
          </a>
          <a className="transition hover:text-grain" href="#services">
            Services
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
          src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=2400&q=90"
          alt="Premium pulses and grains arranged for agricultural trade"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/86 to-forest/58" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pt-28">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-grain">
            <Leaf size={14} /> Premium pulse trading
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Reliable agricultural trade, built for lasting supply.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-linen/72">
            KVK trades cowpea, blackgram, horsegram, and other pulses with a focus on quality,
            consistency, and dependable market execution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#contact">
              Start a trade conversation <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="#services">
              Explore services
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end">
          <div className="w-full max-w-md border border-white/12 bg-white/[0.06] p-5 shadow-premium backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-3">
              {['Cowpea', 'Blackgram', 'Horsegram'].map((item) => (
                <div key={item} className="border border-white/10 bg-ink/45 p-4 text-center">
                  <span className="block text-2xl font-semibold text-grain">01</span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-linen/58">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-4 border-t border-white/10 pt-5">
              <ShieldCheck className="mt-1 text-grain" size={28} />
              <p className="text-sm leading-6 text-linen/68">
                Quality-led sourcing, practical market insight, and dispatch coordination for buyers who
                value clarity before volume.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProduceShowcase() {
  return (
    <section id="produce" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Core Produce</p>
        <h2 className="section-title">Focused categories. Consistent movement.</h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {produce.map((item, index) => (
          <Reveal key={item.name} className="group overflow-hidden border border-white/10 bg-white/[0.04]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.image}
                alt={`${item.name} agricultural produce`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute left-5 top-5 text-sm text-grain">0{index + 1}</span>
              <div className="absolute bottom-0 p-6">
                <h3 className="font-display text-3xl text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-linen/70">{item.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-white/10 bg-forest/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="section-title">Trade services for serious pulse buyers.</h2>
          <p className="mt-6 leading-8 text-linen/68">
            From sourcing to dispatch, KVK supports agricultural produce transactions with a
            disciplined process and a practical understanding of regional markets.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="border border-white/10 bg-ink/45 p-6 transition hover:border-grain/40">
              <Icon className="text-grain" size={30} />
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-linen/64">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
      <Reveal>
        <img
          className="h-[560px] w-full object-cover shadow-premium"
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=88"
          alt="Agricultural field ready for pulse sourcing"
        />
      </Reveal>
      <Reveal>
        <p className="eyebrow">About KVK</p>
        <h2 className="section-title">Grounded in commodity discipline, shaped for modern buyers.</h2>
        <p className="mt-6 leading-8 text-linen/70">
          KVK is an agricultural produce trader serving buyers who need dependable pulse sourcing,
          transparent communication, and carefully managed lots. The business brings together
          local-market relationships and a premium service mindset for every transaction.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Pulses', 'Focused category expertise'],
            ['Quality', 'Lot checks and clear specs'],
            ['Dispatch', 'Coordinated bulk movement'],
          ].map(([label, text]) => (
            <div key={label} className="border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 className="text-grain" size={22} />
              <h3 className="mt-4 font-semibold text-white">{label}</h3>
              <p className="mt-2 text-sm leading-5 text-linen/58">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#050705]">
      <div className="absolute inset-0 opacity-35">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=2200&q=86"
          alt="Agricultural produce leaves in premium dark light"
        />
        <div className="absolute inset-0 bg-ink/88" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:py-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let’s discuss your next produce requirement.</h2>
          <p className="mt-6 max-w-2xl leading-8 text-linen/68">
            Share the commodity, quantity, quality expectation, and delivery location. KVK will
            respond with availability and a practical route forward.
          </p>
        </Reveal>
        <Reveal className="border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
          <div className="space-y-5">
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
          <a className="btn-primary mt-8 w-full justify-center" href="mailto:trade@kvk.example">
            Send enquiry <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
      <div className="relative border-t border-white/10 px-5 py-6 text-center text-xs uppercase tracking-[0.24em] text-linen/45">
        KVK Agricultural Produce Trading
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
