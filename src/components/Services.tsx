import { useState } from 'react';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { Reveal } from './Reveal';
import { services, type Service } from '@/lib/data';

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString('en-US')}`;
}

const featuredIds = ['sv1', 'sv2', 'sv3', 'sv4', 'sv6', 'sv10'];

function ServiceCard({
  service,
  idx,
  getDurationIndex,
  setDurations,
  onBook,
}: {
  service: Service;
  idx: number;
  getDurationIndex: (s: Service) => number;
  setDurations: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  onBook: (service?: Service) => void;
}) {
  const di = getDurationIndex(service);
  const option = service.options[di];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/5 bg-[#DDE6EF] shadow-[0_24px_60px_-30px_rgba(13,42,77,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-30px_rgba(13,42,77,0.45)]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <span className="absolute bottom-3 right-3 rounded-full bg-gold px-3 py-1 text-xs font-medium text-navy">
          {formatPrice(option.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-headline text-lg font-medium text-navy">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/65">{service.description}</p>

        <div className="mt-4">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-navy/50">
            Duration
          </p>
          <div className="flex gap-2">
            {service.options.map((opt, oi) => (
              <button
                key={opt.duration}
                onClick={() =>
                  setDurations((prev) => ({ ...prev, [service.id]: oi }))
                }
                className={`flex-1 rounded-lg border px-2 py-2 text-xs font-medium transition-all ${
                  oi === di
                    ? 'border-navy bg-navy text-white'
                    : 'border-navy/15 bg-white text-navy/70 hover:border-gold hover:text-gold'
                }`}
              >
                {opt.duration}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <button
            onClick={() => onBook(service)}
            className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-navy transition-all duration-300 hover:bg-gold-600 hover:text-white active:scale-[0.98]"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export function Services({ onBook }: { onBook: (service?: Service) => void }) {
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [expanded, setExpanded] = useState(false);

  const featured = services.filter((s) => featuredIds.includes(s.id));
  const rest = services.filter((s) => !featuredIds.includes(s.id));
  const getDurationIndex = (service: Service) => durations[service.id] ?? 0;

  return (
    <section id="services" className="relative bg-white py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Services</span>
            <h2 className="section-title mt-5">Our most-loved treatments.</h2>
            <p className="mt-4 text-navy/70">
              A selection of our signature services. Choose your preferred duration and book
              instantly - every treatment is delivered by an internationally certified therapist.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard
                service={service}
                idx={i}
                getDurationIndex={getDurationIndex}
                setDurations={setDurations}
                onBook={onBook}
              />
            </Reveal>
          ))}
        </div>

        {/* Expandable remaining treatments */}
        <div
          className={`grid transition-all duration-700 ease-in-out ${
            expanded
              ? 'mt-7 grid-rows-[1fr] opacity-100'
              : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  idx={i}
                  getDurationIndex={getDurationIndex}
                  setDurations={setDurations}
                  onBook={onBook}
                />
              ))}
            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group/btn inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.12em] text-navy transition hover:text-gold"
            >
              {expanded ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5" />
                </>
              ) : (
                <>
                  View all treatments
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
