import { Reveal } from './Reveal';
import { Sparkles, ShieldCheck, Gem, Users, UserCheck, Award } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Expert Therapists',
    text: 'Internationally certified professionals with years of dedicated practice, ensuring every treatment is delivered with precision and care.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Hygiene',
    text: 'Hospital-grade sanitation, single-use linens, and rigorously sterilized equipment for every guest - your safety is our highest priority.',
  },
  {
    icon: Gem,
    title: 'Luxurious Ambiance',
    text: 'A serene sanctuary in the heart of Banani, where every detail - from lighting to aroma - is crafted to transport you into deep relaxation.',
  },
  {
    icon: Users,
    title: '5,000+ Satisfied Clients',
    text: 'Trusted by thousands of guests who have experienced our wellness services.',
  },
  {
    icon: UserCheck,
    title: '20+ Experienced Staff',
    text: 'A dedicated team of skilled and professional wellness specialists.',
  },
  {
    icon: Award,
    title: '10+ Years of Experience',
    text: 'More than a decade of experience delivering quality wellness and relaxation services.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-navy py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-gold">Why Choose Us</span>
            <h2 className="mt-5 font-headline text-3xl font-light text-white sm:text-4xl md:text-[2.75rem]">
              The Euro Healthcare difference.
            </h2>
            <p className="mt-4 text-white/70">
              Six commitments that set us apart as Banani's premier wellness destination.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.08]">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-light text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
