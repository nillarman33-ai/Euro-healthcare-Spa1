import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace('#', '');
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      scrollToHash(window.location.hash);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const newPath = url.pathname;
    const hash = url.hash;
    if (newPath === window.location.pathname && !hash) return;
    window.history.pushState({}, '', to);
    setPath(newPath);
    if (hash) {
      scrollToHash(hash);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

export type Route =
  | { name: 'home' }
  | { name: 'journal' }
  | { name: 'article'; slug: string }
  | { name: 'notfound' };

export function parseRoute(path: string): Route {
  const clean = path.replace(/\/+$/, '');
  if (clean === '' || clean === '/') return { name: 'home' };
  if (clean === '/journal') return { name: 'journal' };
  if (clean.startsWith('/journal/')) {
    const slug = clean.slice('/journal/'.length);
    if (slug) return { name: 'article', slug };
  }
  return { name: 'notfound' };
}
