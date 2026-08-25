import { useState } from 'react';
import { LanguageProvider } from '@/lib/language';
import { RouterProvider, useRouter, parseRoute } from '@/lib/router';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServiceTicker } from '@/components/ServiceTicker';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Gallery } from '@/components/Gallery';
import { Journal } from '@/components/Journal';
import { JournalPage } from '@/components/JournalPage';
import { ArticlePage } from '@/components/ArticlePage';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BookingModal } from '@/components/BookingModal';
import { SearchOverlay } from '@/components/SearchOverlay';
import type { Service } from '@/lib/data';

function SpaSite() {
  const { path } = useRouter();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [preselected, setPreselected] = useState<Service | null>(null);

  const openBooking = (service?: Service) => {
    setPreselected(service ?? null);
    setBookingOpen(true);
  };

  const route = parseRoute(path);

  return (
    <div className="min-h-screen bg-panel">
      <Header onBook={() => openBooking()} onSearch={() => setSearchOpen(true)} />
      <main>
        {route.name === 'home' && (
          <>
            <Hero onBook={() => openBooking()} />
            <ServiceTicker />
            <About />
            <Services onBook={(s) => openBooking(s)} />
            <WhyChooseUs />
            <Gallery />
            <Journal />
            <Contact />
          </>
        )}
        {route.name === 'journal' && <JournalPage />}
        {route.name === 'article' && <ArticlePage slug={route.slug} />}
        {route.name === 'notfound' && (
          <section className="bg-panel pt-40 pb-32">
            <div className="container-luxe text-center">
              <h1 className="section-title">Page not found</h1>
              <p className="mt-4 text-navy/70">The page you are looking for does not exist.</p>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselected={preselected}
      />
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onBook={() => openBooking()}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <SpaSite />
      </RouterProvider>
    </LanguageProvider>
  );
}
