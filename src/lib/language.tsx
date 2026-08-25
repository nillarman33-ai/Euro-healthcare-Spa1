import { createContext, useContext, useState, type ReactNode } from 'react';

type Lang = 'EN' | 'BN';
type LangContextType = { lang: Lang; toggle: () => void; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('EN');
  const toggle = () => setLang((l) => (l === 'EN' ? 'BN' : 'EN'));
  return (
    <LangContext.Provider value={{ lang, toggle, setLang }}>{children}</LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
