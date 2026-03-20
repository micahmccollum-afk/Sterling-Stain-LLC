import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE, PHONE_LINK } from '../data/constants';

const navLinks = [
  { to: '/', label: 'About', hash: '#about' },
  { to: '/', label: 'Services', hash: '#services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e, link) => {
    if (link.hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = '/' + (link.hash || '');
      } else {
        const el = document.querySelector(link.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2C2C2C] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/SterlingStainLOGO.avif"
              alt="Sterling Stain LLC"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.to === '/gallery' || link.to === '/contact' ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-[#F7F4EF]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={'/' + (link.hash || '')}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white/90 hover:text-white font-medium transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_LINK}
              className="border-2 border-[#8B7355] bg-[#8B7355] hover:bg-[#7a6549] hover:border-[#7a6549] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Call now: {PHONE}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.to === '/gallery' || link.to === '/contact' ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-white py-2 font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={'/' + (link.hash || '')}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-white py-2 font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a href={PHONE_LINK} className="text-white py-2 font-medium">
                Call: {PHONE}
              </a>
              <a
                href={PHONE_LINK}
                className="border-2 border-[#8B7355] bg-[#8B7355] text-white px-5 py-3 rounded-full font-semibold text-center mt-2 block"
              >
                Call now: {PHONE}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
