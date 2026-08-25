import { Reveal } from './Reveal';
import { therapists } from '@/lib/data';

export function Therapists() {
  return (
    <section id="therapists" className="relative bg-navy py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-gold">Our Therapists</span>
            <h2 className="mt-5 font-headline text-3xl font-light text-white sm:text-4xl md:text-[2.75rem]">
              Master hands, guided by intention.
            </h2>
            <p className="mt-4 text-white/70">
              Every member of our team is internationally certified with a minimum of eight years
              of dedicated practice. Meet the experts who will guide your journey.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {therapists.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-2xl bg-white/5">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-[1.1s] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <h3 className="font-headline text-xl font-light text-white">{t.name}</h3>
                    <p className="text-sm font-light text-gold">{t.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-luxe text-white/50">Specialties</p>
                  <ul className="mt-3 space-y-1.5">
                    {t.specialties.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-white/60">Experience</span>
                    <span className="font-headline text-sm font-medium text-gold">
                      {t.experience}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
