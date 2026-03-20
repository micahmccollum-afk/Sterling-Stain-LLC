import { CTA_HEADLINE, PHONE, PHONE_LINK, EMAIL_LINK } from '../data/constants';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] leading-tight mb-6">
                {CTA_HEADLINE}
              </h1>
              <p className="text-[#5D4E37]/90 text-lg md:text-xl">
                Contact us for a free, no-obligation estimate
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(44,44,44,0.2),0_8px_30px_-8px_rgba(93,78,55,0.12)]">
              <h2 className="text-[#2C2C2C] font-semibold text-xl mb-8">
                Contact us for a free estimate
              </h2>
              <ContactForm variant="enlarged" />

              <div className="mt-10 pt-10 border-t border-[#e8e4dd]">
                <p className="text-[#5D4E37] font-medium mb-2">Prefer to reach out directly?</p>
                <a href={PHONE_LINK} className="block text-[#2C2C2C] hover:text-[#8B7355] font-semibold transition-colors">
                  {PHONE}
                </a>
                <a href={EMAIL_LINK} className="block text-[#2C2C2C] hover:text-[#8B7355] font-semibold transition-colors mt-1">
                  mtill@sterlingstain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
