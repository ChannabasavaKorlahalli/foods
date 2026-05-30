import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LOGO, TAGLINE } from '../data/site';

const links = [
  { href: '#legacy', label: 'Legacy' },
  { href: '#products', label: 'Products' },
  { href: '#rice', label: 'Rice' },
  { href: '#quality', label: 'Quality' },
  { href: '#global', label: 'Global' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img src={LOGO} alt="Vaali Foods" className="h-10 w-auto object-contain sm:h-11" width={140} height={44} />
          <span className="hidden text-xs text-creamMuted lg:block">{TAGLINE}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-gold">
            Get Export Quote <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-cream lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong border-t border-white/10 px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-base" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold mt-2 justify-center" onClick={() => setOpen(false)}>
              Get Export Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
