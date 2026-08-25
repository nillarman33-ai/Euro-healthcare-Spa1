import { spaInfo, navLinks } from '@/lib/data';
import { useRouter } from '@/lib/router';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { Fireflies } from './Fireflies';

export function Footer() {
  const { navigate, path } = useRouter();

  const handleNav = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (path !== '/') {
      navigate(`/${href}`);
    } else {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-luxe relative overflow-hidden text-white">
      <Fireflies />

      {/* Botanical line-art pattern */}
      <div className="footer-botanical pointer-events-none absolute inset-0" />

      {/* Champagne-gold ambient glows behind the two columns */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-[22%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-[22%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-8 md:px-10 md:py-14">
        {/* Brand */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <img
              src="/assets/logo/Logo.png"
              alt="Euro Healthcare Spa"
              className="h-11 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="font-headline text-lg font-medium">Euro Healthcare Spa</span>
            {/* Ornament under brand name */}
            <span className="flex items-center gap-2 text-gold/60">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-[0.6em]">✦</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/60">
            Banani's premier destination for relaxation and restoration. Internationally
            certified therapists, premium hygiene, and a luxurious ambiance crafted for your
            complete wellbeing.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="footer-social grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 transition hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="footer-social grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 transition hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`tel:${spaInfo.phones[0].replace(/[^+\d]/g, '')}`}
              aria-label="Call"
              className="footer-social grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 transition hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links + Contact Info */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-12 md:mt-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-headline text-sm font-medium uppercase tracking-luxe text-gold">
              Quick Links
            </h4>
            <ul className="mt-3 grid grid-cols-3 gap-x-4 gap-y-1.5 md:flex md:flex-col md:space-y-1.5">
              {navLinks.map((l) => (
                <li key={l.href} className="flex justify-center">
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-sm font-light text-white/65 transition hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-headline text-sm font-medium uppercase tracking-luxe text-gold">
              Contact Info
            </h4>
            <ul className="mt-3 space-y-2 text-sm font-light text-white/65">
              <li className="flex items-start justify-center gap-3 text-center">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={spaInfo.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-[16rem] transition hover:text-gold"
                >
                  {spaInfo.address}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${spaInfo.phones[0].replace(/[^+\d]/g, '')}`}
                  className="transition hover:text-gold"
                >
                  {spaInfo.phones[0]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider with ornament */}
        <div className="mt-6 flex items-center justify-center gap-3 md:mt-8">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40 md:w-24" />
          <span className="text-gold/60">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40 md:w-24" />
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center text-xs text-white/45 sm:flex-row sm:gap-6">
          <p>© {new Date().getFullYear()} Euro Healthcare Spa. All rights reserved.</p>
          <span className="hidden sm:inline text-white/20">•</span>
          <p className="font-light">Banani, Dhaka - Crafted for restoration.</p>
        </div>
      </div>
    </footer>
  );
}
