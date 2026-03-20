import { TAGLINE } from '../data/constants';

export default function TaglineBar() {
  return (
    <section className="bg-[#5D4E37] py-5">
      <p className="text-center text-[#F7F4EF] font-medium text-base md:text-lg">
        {TAGLINE}
      </p>
    </section>
  );
}
