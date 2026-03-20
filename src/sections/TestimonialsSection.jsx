import { TESTIMONIALS } from '../data/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-[#2C2C2C] mb-12">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F7F4EF] rounded-xl p-6 md:p-8 border border-[#e8e4dd]"
            >
              <svg
                className="w-10 h-10 text-[#8B7355] mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#2C2C2C] leading-relaxed mb-4 text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-[#5D4E37]">
                {t.author}, {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
