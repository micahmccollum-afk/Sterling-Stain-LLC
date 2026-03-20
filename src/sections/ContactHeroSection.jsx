import { CTA_HEADLINE } from '../data/constants';
import ContactForm from '../components/ContactForm';

export default function ContactHeroSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#F7F4EF] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C] leading-tight mb-4">
            {CTA_HEADLINE}
          </h2>
          <p className="text-[#5D4E37]/90 text-lg">
            Contact us for a free, no-obligation estimate
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div
            className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(44,44,44,0.15),0_4px_20px_-4px_rgba(93,78,55,0.1)]"
            style={{ boxShadow: '0 20px 60px -15px rgba(44,44,44,0.2), 0 8px 30px -8px rgba(93,78,55,0.12)' }}
          >
            <h3 className="text-[#2C2C2C] font-semibold text-lg mb-6">
              Contact us for a free estimate:
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
