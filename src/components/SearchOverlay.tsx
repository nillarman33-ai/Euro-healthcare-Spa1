import { useEffect, useMemo, useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { services, navLinks, therapists } from '@/lib/data';
import { blogArticles } from '@/lib/blog';
import { useRouter } from '@/lib/router';

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
  onBook: () => void;
};

type Result = {
  label: string;
  description: string;
  href: string;
  kind: string;
};

export function SearchOverlay({ open, onClose, onBook }: SearchOverlayProps) {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const corpus: Result[] = useMemo(
    () => [
      ...navLinks.map((l) => ({ label: l.label, description: 'Page section', href: l.href, kind: 'Page' })),
      ...services.map((s) => ({
        label: s.name,
        description: `From ৳ ${s.options[0].price.toLocaleString()} - ${s.options.map((o) => o.duration).join(' / ')}`,
        href: '#services',
        kind: 'Service',
      })),
      ...therapists.map((t) => ({
        label: t.name,
        description: t.title,
        href: '#therapists',
        kind: 'Therapist',
      })),
      ...blogArticles.map((b) => ({
        label: b.title,
        description: b.excerpt,
        href: `/journal/${b.slug}`,
        kind: 'Article',
      })),
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return corpus.slice(0, 6);
    return corpus.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.description.toLowerCase().includes(q),
    );
  }, [query, corpus]);

  if (!open) return null;

  const handleClick = (href: string) => {
    onClose();
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[70] bg-navy/80 backdrop-blur-md" onClick={onClose}>
      <div
        className="mx-auto mt-24 w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl bg-panel shadow-2xl">
          <div className="flex items-center gap-3 border-b border-navy/10 px-5 py-4">
            <Search className="h-5 w-5 text-gold" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search treatments, therapists, articles..."
              className="flex-1 bg-transparent text-navy placeholder:text-navy/40 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-full text-navy/60 transition hover:bg-navy/5"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-navy/50">
                No results for "{query}"
              </p>
            ) : (
              results.map((r) => (
                <button
                  key={`${r.kind}-${r.label}`}
                  onClick={() => handleClick(r.href)}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-white"
                >
                  <div className="min-w-0">
                    <p className="truncate font-headline text-sm font-medium text-navy">{r.label}</p>
                    <p className="truncate text-xs text-navy/55">{r.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-navy/60">
                      {r.kind}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-navy/30 transition group-hover:text-gold" />
                  </div>
                </button>
              ))
            )}
          </div>
          <div className="border-t border-navy/10 px-5 py-3">
            <button onClick={() => { onClose(); onBook(); }} className="text-sm font-medium text-gold transition hover:text-gold-700">
              Or book your escape directly →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
