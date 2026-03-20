import { Link } from 'react-router-dom';
import { HERO_HEADLINE } from '../data/constants';

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/wideshot.avif)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
          {HERO_HEADLINE}
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Premium fence staining and deck care across Northwest Arkansas
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-[#8B7355] hover:bg-[#7a6549] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Get a Full Estimate
        </Link>
      </div>
    </section>
  );
}
