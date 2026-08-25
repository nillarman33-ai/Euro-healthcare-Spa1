import { useEffect } from 'react';
import { Reveal } from './Reveal';
import { blogArticles } from '@/lib/blog';
import { useRouter } from '@/lib/router';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';

export function Journal() {
  const { navigate } = useRouter();

  useEffect(() => {
    const section = document.getElementById('journal');
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-visible', 'true');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      section.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="journal" className="relative bg-panel py-24 md:py-32" style={{ contentVisibility: 'auto' }}>
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Wellness Journal</span>
              <h2 className="section-title mt-5">Insights for considered living.</h2>
              <p className="mt-4 text-navy/70">
                Expert perspectives on recovery, skincare, and the rituals that sustain
                wellbeing between visits.
              </p>
            </div>
            <button onClick={() => navigate('/journal')} className="btn-ghost">
              View all articles
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {blogArticles.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-[0_24px_60px_-30px_rgba(13,42,77,0.35)] transition-all duration-500 hover:-translate-y-1.5">
                <button
                  onClick={() => navigate(`/journal/${post.slug}`)}
                  className="relative block h-52 overflow-hidden text-left"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-luxe text-navy backdrop-blur-sm">
                    {post.category}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-wide text-navy/50">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-gold" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-light leading-snug text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{post.excerpt}</p>
                  <button
                    onClick={() => navigate(`/journal/${post.slug}`)}
                    className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.12em] text-navy transition hover:text-gold"
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
