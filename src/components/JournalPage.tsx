import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { Reveal } from './Reveal';
import { blogArticles } from '@/lib/blog';
import { useRouter } from '@/lib/router';

export function JournalPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Wellness Journal | Euro Healthcare Spa';
  }, []);

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[42vh] items-center overflow-hidden bg-navy pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3998013/pexels-photo-3998013.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
        <div className="container-luxe relative z-10 py-20">
          <Reveal>
            <span className="eyebrow text-gold">Euro Healthcare Spa</span>
            <h1 className="mt-5 font-headline text-4xl font-light text-white sm:text-5xl md:text-[3.25rem]">
              Wellness Journal
            </h1>
            <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-white/75">
              Insights, tips, and news for your mind, body, and soul.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-panel py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h2 className="mt-4 font-headline text-xl font-light leading-snug text-navy">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button
                      onClick={() => navigate(`/journal/${post.slug}`)}
                      className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.12em] text-gold transition hover:text-gold-600"
                    >
                      Read Article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
