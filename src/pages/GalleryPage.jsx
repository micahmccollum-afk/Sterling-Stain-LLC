import { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../data/constants';

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lightboxRef = useRef(null);

  useEffect(() => {
    if (lightboxOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goPrev = () => {
    setSelectedIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
  };

  const goNext = () => {
    setSelectedIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));
  };

  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl text-center text-[#2C2C2C] mb-12">
            Our Work
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(index)}
                className="block aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2"
              >
                <img
                  src={src}
                  alt={`Sterling Stain work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              goPrev();
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              goNext();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          ref={lightboxRef}
          style={{ outline: 'none' }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 z-10 text-white p-2.5 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-white bg-white/20 hover:bg-white/30 rounded-full transition-colors shrink-0"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="flex-1 flex items-center justify-center px-16 md:px-24 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[selectedIndex]}
              alt={`Sterling Stain work ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain select-none"
              draggable={false}
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-white bg-white/20 hover:bg-white/30 rounded-full transition-colors shrink-0"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium">
            {selectedIndex + 1} of {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </main>
  );
}
