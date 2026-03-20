import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PHONE, PHONE_LINK, EMAIL_LINK, OWNER_NAME, COMPANY_NAME, SCRIPTURE } from '../data/constants';

const navLinks = [
  { to: '/', label: 'About', hash: '#about' },
  { to: '/', label: 'Services', hash: '#services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, link) => {
    if (link.to === '/gallery' || link.to === '/contact') return;
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + (link.hash || ''));
    } else {
      const el = document.querySelector(link.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-[#2C2C2C] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <img
                src="/images/SterlingStainLOGO.avif"
                alt={COMPANY_NAME}
                className="h-14 w-auto"
              />
            </Link>
            <p className="font-heading text-lg text-white/90">
              {COMPANY_NAME}
            </p>
            <p className="text-white/80 text-sm mt-1">{SCRIPTURE}</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-[#F7F4EF] mb-3">Contact</h4>
            <p className="font-medium text-white">{OWNER_NAME}</p>
            <a
              href={PHONE_LINK}
              className="block text-white/90 hover:text-white transition-colors mt-1"
            >
              {PHONE}
            </a>
            <a
              href={EMAIL_LINK}
              className="block text-white/90 hover:text-white hover:underline transition-colors mt-1"
            >
              mtill@sterlingstain.com
            </a>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-[#F7F4EF] mb-3">Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.to === '/gallery' || link.to === '/contact' ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={'/' + (link.hash || '')}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
