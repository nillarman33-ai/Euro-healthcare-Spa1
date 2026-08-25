import { Reveal } from './Reveal';
import { memberships, offers } from '@/lib/data';
import { Check, Crown, Gift, Sparkles } from 'lucide-react';

export function Membership() {
  return (
    <section id="membership" className="relative bg-white py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Loyalty & Membership</span>
            <h2 className="section-title mt-5">Exclusive memberships, lasting rewards.</h2>
            <p className="mt-4 text-navy/70">
              Join the Euro Circle and earn points on every visit, unlock member-only treatments,
              and enjoy priority access to seasonal packages.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {memberships.map((m, i) => (
            <Reveal key={m.id} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  m.highlight
                    ? 'border-gold bg-navy text-white shadow-[0_40px_80px_-30px_rgba(13,42,77,0.5)]'
                    : 'border-navy/10 bg-panel/40 text-navy hover:border-gold/40'
                }`}
              >
                {m.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-luxe text-navy">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full ${
                      m.highlight ? 'bg-gold/20 text-gold' : 'bg-navy/5 text-gold'
                    }`}
                  >
                    <Crown className="h-5 w-5" />
                  </span>
                  <h3 className="font-headline text-2xl font-light">{m.name}</h3>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-headline text-4xl font-light">৳ {m.price}</span>
                  <span className={`text-sm ${m.highlight ? 'text-white/60' : 'text-navy/50'}`}>
                    {m.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-xs uppercase tracking-luxe ${
                    m.highlight ? 'text-gold' : 'text-gold/80'
                  }`}
                >
                  {m.points}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {m.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          m.highlight ? 'text-gold' : 'text-gold'
                        }`}
                      />
                      <span className={m.highlight ? 'text-white/85' : 'text-navy/75'}>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                    m.highlight
                      ? 'bg-gold text-navy hover:bg-gold-600 hover:text-white'
                      : 'border border-navy/20 text-navy hover:border-gold hover:text-gold'
                  }`}
                >
                  Join {m.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Seasonal offers */}
        <Reveal>
          <div className="mt-20">
            <div className="flex items-center gap-3">
              <Gift className="h-5 w-5 text-gold" />
              <h3 className="font-headline text-xl font-light text-navy">Seasonal Packages</h3>
              <div className="gold-line flex-1" />
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {offers.map((o) => (
                <div
                  key={o.id}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-panel/50 p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(13,42,77,0.4)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-luxe text-gold-700">
                      <Sparkles className="h-3 w-3" />
                      {o.tag}
                    </span>
                    <span className="text-[11px] uppercase tracking-wide text-navy/50">
                      {o.validUntil}
                    </span>
                  </div>
                  <h4 className="mt-5 font-headline text-xl font-light text-navy">{o.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{o.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center text-sm font-medium uppercase tracking-[0.12em] text-gold transition hover:text-gold-700"
                  >
                    Enquire now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
