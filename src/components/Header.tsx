import { useEffect, useState } from 'react';
import { Menu, Search, X, Phone } from 'lucide-react';
import { navLinks, spaInfo } from '@/lib/data';
import { useRouter } from '@/lib/router';
import { LanguageToggle } from './LanguageToggle';

type HeaderProps = {
  onBook: () => void;
  onSearch: () => void;
};

export function Header({ onBook, onSearch }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { navigate, path } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isSubPage = path !== '/';

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith('/')) {
      navigate(href);
    } else if (isSubPage) {
      navigate(`/${href}`);
    } else {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled || isSubPage
            ? 'bg-navy/95 shadow-[0_10px_40px_-20px_rgba(13,42,77,0.6)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxe flex h-20 items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center"
            aria-label="Euro Healthcare Spa home"
          >
            <img
              src="/assets/logo/Logo.png"
              alt="Euro Healthcare Spa"
              className="h-11 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </button>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-white/85"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={onSearch}
              aria-label="Search the site"
              className="grid h-10 w-10 place-items-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-gold"
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href={`tel:${spaInfo.phones[0].replace(/\s/g, '')}`}
              className="hidden h-10 w-10 place-items-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-gold sm:grid"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={onBook} className="btn-gold hidden md:inline-flex">
              Book Your Escape
            </button>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-navy transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="font-headline text-lg font-medium text-white">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6 pt-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="border-b border-white/10 py-4 text-left font-headline text-2xl font-light text-white/90 transition hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="btn-gold mt-8 w-full"
          >
            Book Your Escape
          </button>
        </nav>
      </div>
    </>
  );
}
