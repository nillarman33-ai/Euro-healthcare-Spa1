import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Reveal } from './Reveal';
import { galleryItems, galleryFilters } from '@/lib/data';

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? p : (p + 1) % filtered.length));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, filtered.length]);

  return (
    <section id="gallery" className="relative bg-panel py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">The Gallery</span>
              <h2 className="section-title mt-5">A glimpse into the sanctuary.</h2>
              <p className="mt-4 text-navy/70">
                Explore our treatment suites, serene interiors, and the considered details that
                define the Euro Healthcare Spa experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {galleryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                    filter === cat
                      ? 'bg-gold text-navy'
                      : 'border border-navy/15 text-navy/70 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 8) * 50}>
              <button
                onClick={() => setLightbox(i)}
                className={`group relative block w-full overflow-hidden rounded-xl ${
                  i % 5 === 0 ? 'row-span-2 h-full min-h-[320px]' : 'h-52'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 transition-all duration-500 group-hover:bg-navy/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-navy/70 px-3 py-1 text-[10px] uppercase tracking-luxe text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length));
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-light text-white/70">
              {filtered[lightbox].alt} - {lightbox + 1} / {filtered.length}
            </figcaption>
          </figure>
          <button
            className="absolute right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p + 1) % filtered.length));
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
