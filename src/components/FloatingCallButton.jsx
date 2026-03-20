import { PHONE, PHONE_LINK } from '../data/constants';

export default function FloatingCallButton() {
  return (
    <a
      href={PHONE_LINK}
      className="md:hidden fixed bottom-6 left-4 right-4 z-40 flex items-center justify-center gap-2 bg-[#8B7355] hover:bg-[#7a6549] text-white py-4 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300"
      aria-label="Call now"
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call now: {PHONE}
    </a>
  );
}
