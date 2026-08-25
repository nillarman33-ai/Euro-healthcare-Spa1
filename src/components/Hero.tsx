import { Star } from 'lucide-react';
import { spaInfo } from '@/lib/data';

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative min-h-[82vh] overflow-hidden bg-navy md:min-h-screen" style={{ contentVisibility: 'auto' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: "url('/assets/hero/eeee.jpg')", willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/55 to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-luxe relative z-10 flex min-h-[82vh] flex-col items-center justify-center pt-24 text-center md:min-h-screen">
        <div className="max-w-2xl">
          <span className="hero-location block text-center animate-fade-in">Banani, Dhaka</span>
          <h1 className="mt-4 font-headline text-4xl font-light leading-[1.1] text-white animate-fade-up sm:mt-6 md:text-6xl lg:text-7xl">
            Where Stillness
            <br />
            Becomes <span className="shimmer-text">Luxury</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 animate-fade-up md:mt-7 md:text-lg">
            Euro Healthcare Spa brings a European standard of wellness to the heart of Banani.
            Internationally certified therapists, bespoke treatments, and a serene sanctuary
            designed for your complete restoration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up md:mt-10">
            <button onClick={onBook} className="btn-gold">
              Book Your Escape
            </button>
            <a href="#services" className="btn-outline">
              Explore Treatments
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/80 md:mt-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-light">4.9 / 5 from 1,200+ guests</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="text-sm font-light tracking-wide">
              Internationally Certified Therapists
            </span>
          </div>
        </div>
      </div>

      {/* Quick contact strip */}
      <div className="absolute bottom-0 right-0 z-10 hidden bg-navy/60 px-8 py-5 backdrop-blur-md lg:block">
        <p className="text-xs uppercase tracking-luxe text-gold">Reservations</p>
        <a
          href={`tel:${spaInfo.phones[0].replace(/\s/g, '')}`}
          className="mt-1 block font-headline text-lg font-light text-white"
        >
          {spaInfo.phones[0]}
        </a>
      </div>
    </section>
  );
}
