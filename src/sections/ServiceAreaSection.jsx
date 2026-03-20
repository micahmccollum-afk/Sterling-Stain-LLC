import { SERVICE_AREAS } from '../data/constants';

export default function ServiceAreaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-[#2C2C2C] mb-4">
          Service Area
        </h2>
        <p className="text-center text-[#5D4E37]/90 mb-12 max-w-2xl mx-auto">
          Proudly serving Northwest Arkansas and surrounding communities
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 max-w-3xl mx-auto">
          {SERVICE_AREAS.map((city) => (
            <span
              key={city}
              className="text-[#2C2C2C] font-medium text-lg md:text-xl"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
