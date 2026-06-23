import { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const navLinks = ['Home', 'Services', 'Gallery', 'About Us', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setOpen(false);
    const map: Record<string, string> = {
      'Home': 'hero',
      'Services': 'services',
      'Gallery': 'gallery',
      'About Us': 'about',
      'Contact': 'contact',
    };
    const id = map[label];
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bg-surface-container-lowest sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-level-2' : 'shadow-tactile'}`}>
      <div className="max-w-container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <Hammer size={22} className="text-on-primary" />
          </div>
          <div className="leading-tight">
            <p className="font-heading font-bold text-lg text-on-surface tracking-wide">
              MI IRONWORLD
            </p>
            <p className="text-xs text-on-surface-variant font-body">
              Fabrication Works
            </p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className="text-on-surface text-sm font-body font-medium hover:text-secondary transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919246261404"
          className="hidden md:inline-block btn-primary"
        >
          Get Free Quote
        </a>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleNavClick(link)}
                  className="w-full text-left text-on-surface text-sm font-body font-medium py-1.5 border-b border-outline-variant hover:text-secondary transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919515246324"
            className="block mt-4 btn-primary text-center"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
