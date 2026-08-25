import { useState } from 'react';
import { Reveal } from './Reveal';
import { faqs, spaInfo } from '@/lib/data';
import { ChevronDown, Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-headline text-base font-medium text-navy">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-navy/65">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-panel py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Visit Euro Healthcare Spa</span>
            <h2 className="section-title mt-5">Your sanctuary awaits in Banani.</h2>
            <p className="mt-4 text-navy/70">
              Reach us by phone, WhatsApp, or the form below. We respond to all enquiries within
              one business hour.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left: contact details + map + faq */}
          <Reveal>
            <div className="space-y-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="card-surface p-6">
                  <MapPin className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-headline text-base font-medium text-navy">Address</h3>
                  <a
                    href={spaInfo.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-navy/65 transition hover:text-gold"
                  >
                    {spaInfo.address}
                  </a>
                </div>
                <div className="card-surface p-6">
                  <Phone className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-headline text-base font-medium text-navy">Phone Lines</h3>
                  {spaInfo.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm text-navy/65 transition hover:text-gold"
                    >
                      {p}
                    </a>
                  ))}
                </div>
                <div className="card-surface p-6">
                  <Mail className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-headline text-base font-medium text-navy">Email</h3>
                  <a
                    href={`mailto:${spaInfo.email}`}
                    className="mt-1 block text-sm text-navy/65 transition hover:text-gold"
                  >
                    {spaInfo.email}
                  </a>
                </div>
                <div className="card-surface p-6">
                  <Clock className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-headline text-base font-medium text-navy">Hours</h3>
                  {spaInfo.hours.map((h) => (
                    <p key={h.day} className="mt-1 text-sm text-navy/65">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${spaInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-[#25D366] px-6 py-4 text-white transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.6)]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </span>
                <span className="text-sm font-light opacity-90 transition group-hover:translate-x-1">
                  Instant reply
                </span>
              </a>

              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
                <iframe
                  title="Euro Healthcare Spa location"
                  src={spaInfo.mapEmbed}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: form + faq */}
          <Reveal delay={120}>
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="card-surface p-7">
                <h3 className="font-headline text-xl font-light text-navy">Send us a message</h3>
                <p className="mt-1 text-sm text-navy/55">
                  For bookings, please use the "Book Your Escape" button. For all other
                  enquiries, use this form.
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy/60">
                      Full name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-luxe"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy/60">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-luxe"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy/60">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-luxe resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    {sent ? 'Message sent' : 'Send message'}
                  </button>
                  {sent && (
                    <p className="text-center text-sm text-gold-700">
                      Thank you. We will be in touch shortly.
                    </p>
                  )}
                </div>
              </form>

              <div className="card-surface p-7">
                <h3 className="font-headline text-xl font-light text-navy">Frequently asked</h3>
                <div className="mt-4">
                  {faqs.map((f) => (
                    <Accordion key={f.id} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
