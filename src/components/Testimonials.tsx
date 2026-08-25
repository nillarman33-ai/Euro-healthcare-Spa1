import { Reveal } from './Reveal';
import { testimonials } from '@/lib/data';
import { Quote, Star, BadgeCheck } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-navy py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-gold">Guest Voices</span>
            <h2 className="mt-5 font-headline text-3xl font-light text-white sm:text-4xl md:text-[2.75rem]">
              Verified experiences, lasting impressions.
            </h2>
            <p className="mt-4 text-white/70">
              We partner with Google to surface verified reviews alongside our guest
              testimonials - so you can trust every word.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-md">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-light text-white/80">
              4.9 average from 1,200+ verified Google reviews
            </span>
            <BadgeCheck className="h-5 w-5 text-gold" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.08]">
                <Quote className="h-8 w-8 text-gold/60" />
                <blockquote className="mt-4 flex-1 text-sm font-light leading-relaxed text-white/85">
                  "{t.text}"
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 font-headline text-sm font-medium text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <figcaption className="font-headline text-sm font-medium text-white">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-white/55">{t.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
