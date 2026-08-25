import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      className="hidden items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/80 transition hover:border-gold hover:text-gold sm:inline-flex"
      aria-label="Toggle language"
    >
      <Globe className="h-3.5 w-3.5" />
      {lang}
    </button>
  );
}
