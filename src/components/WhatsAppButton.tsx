import { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/8801913369493';
const PHONE_URL = 'tel:+8801913369493';

const ICONS = [
  { key: 'whatsapp', node: <MessageCircle className="h-6 w-6" /> },
  { key: 'call', node: <Phone className="h-6 w-6" /> },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    if (open) return;
    const id = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % ICONS.length);
    }, 2600);
    return () => clearInterval(id);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp action */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 ease-out hover:scale-110 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-6 scale-50 opacity-0'
        }`}
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Call action */}
      <a
        href={PHONE_URL}
        aria-label="Call us"
        className={`grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-[0_10px_28px_-8px_rgba(13,42,77,0.7)] transition-all duration-300 ease-out hover:scale-110 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-6 scale-50 opacity-0'
        }`}
        style={{ transitionDelay: open ? '70ms' : '0ms' }}
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Main toggle button with ripple rings */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-[0_12px_34px_-8px_rgba(201,164,92,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Ripple rings (only when closed) */}
        {!open && (
          <>
            <span className="pointer-events-none absolute inset-0 animate-[ripple_2.6s_ease-out_infinite] rounded-full border border-gold/50" />
            <span className="pointer-events-none absolute inset-0 animate-[ripple_2.6s_ease-out_infinite_0.9s] rounded-full border border-gold/40" />
          </>
        )}

        {/* Alternating icons when closed; X when open */}
        <span className="relative grid h-6 w-6 place-items-center overflow-hidden">
          {open ? (
            <X key="close" className="h-6 w-6 animate-[iconslide_0.3s_ease-out]" />
          ) : (
            <span
              key={ICONS[iconIndex].key}
              className="absolute inset-0 grid place-items-center animate-[iconslide_0.55s_ease-out]"
            >
              {ICONS[iconIndex].node}
            </span>
          )}
        </span>
      </button>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        @keyframes iconslide {
          0% { transform: translateY(70%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
