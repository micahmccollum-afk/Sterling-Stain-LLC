import { OUR_STORY } from '../data/constants';

export default function OurStorySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/owner.avif"
              alt="Sterling Stain - Fence staining professional at work"
              className="w-full h-80 md:h-[450px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-[#2C2C2C] text-white p-8 md:p-10 rounded-xl shadow-lg">
              <h2 className="font-heading text-2xl md:text-3xl font-bold underline underline-offset-4 decoration-[#8B7355] mb-6">
                {OUR_STORY.heading}
              </h2>
              <p className="text-white/95 leading-relaxed text-base md:text-lg">
                {OUR_STORY.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
