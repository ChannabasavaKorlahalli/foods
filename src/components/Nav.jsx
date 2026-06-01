import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LOGO } from '../data/site';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/why-us', label: 'Why Us' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/contact', label: 'Contact' },
];

const navClass = ({ isActive }) =>
  `nav-link ${isActive ? 'text-gold' : ''}`.trim();

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40 bg-transparent">
      <nav className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8 lg:py-3">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" onClick={() => setOpen(false)}>
          <span className="logo-shell">
            <img
              src={LOGO}
              alt="Vaali Foods"
              width={167}
              height={161}
              className="logo-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">
            Get Your Import Quote <ArrowRight size={16} />
          </Link>
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
        <div className="glass-strong mx-5 mt-2 rounded-2xl border border-white/10 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-gold mt-2 justify-center" onClick={() => setOpen(false)}>
              Get Your Import Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
