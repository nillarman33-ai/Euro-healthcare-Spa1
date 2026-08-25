import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { Reveal } from './Reveal';
import { getArticleBySlug, blogArticles } from '@/lib/blog';
import { useRouter } from '@/lib/router';

type ArticlePageProps = {
  slug: string;
};

export function ArticlePage({ slug }: ArticlePageProps) {
  const { navigate } = useRouter();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Euro Healthcare Spa`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && article.metaDescription) {
        meta.setAttribute('content', article.metaDescription);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <section className="bg-panel pt-32 pb-24 md:pt-40">
        <div className="container-luxe text-center">
          <h1 className="section-title">Article not found</h1>
          <p className="mt-4 text-navy/70">The article you are looking for does not exist.</p>
          <button onClick={() => navigate('/journal')} className="btn-gold mt-8">
            Back to Journal
          </button>
        </div>
      </section>
    );
  }

  const others = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="bg-panel pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Hero */}
      <div className="container-luxe">
        <Reveal>
          <button
            onClick={() => navigate('/journal')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </button>
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow">{article.category}</span>
            <h1 className="mt-5 font-headline text-3xl font-light leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
              {article.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-[11px] uppercase tracking-wide text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-gold" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold" />
                {article.readTime}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="h-[40vh] w-full object-cover md:h-[52vh]"
            />
          </div>
        </Reveal>

        {/* Body */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-navy/80">{article.intro}</p>
          </Reveal>

          {article.sections.map((section, i) =>
            section.level === 'h2' ? (
              <Reveal key={i} delay={60}>
                <div className="mt-10">
                  <h2 className="font-headline text-2xl font-light text-navy">{section.heading}</h2>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="mt-4 leading-relaxed text-navy/75">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ) : (
              <Reveal key={i} delay={60}>
                <div className="mt-8">
                  <h3 className="font-headline text-xl font-light text-navy">{section.heading}</h3>
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="mt-4 leading-relaxed text-navy/75">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ),
          )}

          <Reveal>
            <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6">
              <p className="leading-relaxed text-navy/80">{article.conclusion}</p>
            </div>
          </Reveal>
        </div>

        {/* More articles */}
        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="section-title">Continue reading</h2>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {others.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-[0_24px_60px_-30px_rgba(13,42,77,0.35)] transition-all duration-500 hover:-translate-y-1.5">
                    <button
                      onClick={() => navigate(`/journal/${post.slug}`)}
                      className="relative block h-48 overflow-hidden text-left"
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
                      <h3 className="font-headline text-lg font-light leading-snug text-navy">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                        {post.excerpt}
                      </p>
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
        )}
      </div>
    </article>
  );
}
