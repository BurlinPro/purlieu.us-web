import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllInsights, getFeaturedInsight } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Perspectives on emerging markets, cross-border expansion, financial inclusion, and business development from Burton Crapps of Purlieu Management.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function InsightsPage() {
  const featured = getFeaturedInsight()
  const all = getAllInsights()
  const rest = all.filter((p) => !p.featured)

  return (
    <div className="pt-20">

      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Perspectives
          </p>
          <h1
            className="font-display font-semibold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Insights
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-xl leading-relaxed">
            Thinking on emerging markets, cross-border expansion, financial inclusion,
            and what it takes to build businesses at the frontier.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ── Featured post ──────────────────────────────── */}
          {featured && (
            <div className="mb-16">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
                Featured
              </p>
              <Link
                href={`/insights/${featured.slug}`}
                className="group block bg-navy rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 md:p-14">
                    <span className="inline-block font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6 px-3 py-1.5 bg-gold/10 rounded-sm">
                      {featured.category}
                    </span>
                    <h2 className="font-display font-semibold text-white text-2xl md:text-3xl leading-snug mb-5 group-hover:text-white/90 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="font-sans text-xs text-white/40">{formatDate(featured.date)}</span>
                      <span className="flex items-center gap-2 font-sans text-sm font-semibold text-white group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                  {/* Decorative right panel */}
                  <div className="hidden lg:flex items-center justify-center bg-navy-dark p-14">
                    <div className="text-center">
                      <div className="w-px h-20 bg-gold/30 mx-auto mb-8" />
                      <p className="font-display text-4xl font-semibold italic text-white/20 leading-none">
                        Beyond<br />Established<br />Markets.
                      </p>
                      <div className="w-px h-20 bg-gold/30 mx-auto mt-8" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Post grid ──────────────────────────────────── */}
          {rest.length > 0 && (
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-8">
                All Posts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="group flex flex-col border border-cream-deeper hover:border-navy/20 hover:shadow-md rounded-sm overflow-hidden transition-all duration-300"
                  >
                    <div className="h-1 bg-navy/10 group-hover:bg-gold transition-colors duration-300" />
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-sans text-xs font-semibold text-gold tracking-wide uppercase">
                          {post.category}
                        </span>
                        <span className="text-navy/20">·</span>
                        <span className="font-sans text-xs text-navy/50">{post.readTime}</span>
                      </div>
                      <h3 className="font-display font-semibold text-navy text-xl leading-snug mb-4 group-hover:text-navy-mid transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="font-sans text-sm text-navy/60 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-5 border-t border-cream-deeper">
                        <span className="font-sans text-xs text-navy/40">{formatDate(post.date)}</span>
                        <span className="font-sans text-xs font-semibold text-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Submission note */}
          <div className="mt-20 pt-10 border-t border-cream-deeper">
            <p className="font-sans text-sm text-navy/40 text-center">
              Follow Burton on{' '}
              <a
                href="https://linkedin.com/in/burtoncrapps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/60 hover:text-navy underline transition-colors"
              >
                LinkedIn
              </a>{' '}
              for the latest perspectives and updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
