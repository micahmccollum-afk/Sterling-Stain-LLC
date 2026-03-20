import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import TaglineBar from '../sections/TaglineBar';
import WhyFenceStainingSection from '../sections/WhyFenceStainingSection';
import OurStorySection from '../sections/OurStorySection';
import ServicesSection from '../sections/ServicesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactHeroSection from '../sections/ContactHeroSection';
import ServiceAreaSection from '../sections/ServiceAreaSection';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }, [hash]);
  return (
    <main>
      <HeroSection />
      <TaglineBar />
      <OurStorySection />
      <WhyFenceStainingSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactHeroSection />
      <ServiceAreaSection />
    </main>
  );
}
