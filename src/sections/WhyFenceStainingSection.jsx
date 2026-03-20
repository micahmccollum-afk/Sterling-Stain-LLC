const BENEFITS = [
  {
    title: 'Enhance Curb Appeal',
    description: 'A professionally stained fence instantly elevates the look of your home, giving it a clean, polished finish that stands out.',
  },
  {
    title: 'Increase Property Value',
    description: 'A well-maintained fence signals care and quality to potential buyers, helping boost overall resale value.',
  },
  {
    title: 'Protect Against the Elements',
    description: 'Sun, rain, and moisture can quickly damage untreated wood—causing warping, cracking, and rot. Staining creates a protective barrier that keeps your fence strong.',
  },
  {
    title: 'Extend the Life of Your Fence',
    description: 'Regular staining can add years to your fence\'s lifespan, saving you from costly repairs or premature replacement.',
  },
];

export default function WhyFenceStainingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C] mb-6">
              Why Fence Staining?
            </h2>
            <p className="text-[#5D4E37]/90 text-lg md:text-xl leading-relaxed">
              Your fence is one of the first things people notice about your property—but without protection, it won't stay that way for long.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/fencestaining.avif"
              alt="Professionally stained wooden fence"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#F7F4EF] rounded-xl p-6 md:p-8 border border-[#e8e4dd]"
            >
              <h3 className="font-heading text-xl md:text-2xl text-[#2C2C2C] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#5D4E37]/90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
