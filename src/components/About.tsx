import { Reveal } from './Reveal';
import { Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-panel py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.pexels.com/photos/7789652/pexels-photo-7789652.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Euro Healthcare Spa interior"
                className="h-[520px] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                loading="lazy"
                decoding="async"
                width={1000}
                height={520}
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl border border-gold/30 bg-navy p-6 shadow-xl sm:block">
              <p className="font-headline text-4xl font-light text-gold">12+</p>
              <p className="mt-1 text-sm font-light text-white/80">
                Years of curated wellness in Banani, Dhaka
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">About Euro Healthcare Spa</span>
          <h2 className="section-title mt-5">Welcome to Euro Healthcare Spa</h2>
          <p className="mt-6 text-navy/70">
            Banani's premier destination for relaxation and restoration. Euro Healthcare Spa
            brings a European standard of wellness to the heart of Dhaka, offering internationally
            certified therapists and a meticulously hygienic environment.
          </p>
          <p className="mt-4 text-navy/70">
            Every detail - from the botanical products to the considered lighting - is designed to
            guide you into stillness and leave you restored, not merely pampered. Step away from
            the city and into a sanctuary crafted for your complete wellbeing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="btn-ghost">
              Explore Treatments
            </a>
            <a
              href={`https://wa.me/${'8801913369493'}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-gold transition hover:text-gold-700"
            >
              <Sparkles className="h-4 w-4" />
              Chat with us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
