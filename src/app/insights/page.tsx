import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPublishedInsights } from '@/lib/all-insights'
import {
  formatInsightDate,
  getTracks,
  insightUrl,
  toMeta,
  totalMinutes,
} from '@/lib/insights-tracks'
import { InsightSearch } from '@/components/insights/InsightSearch'
import { LibraryContents } from '@/components/insights/LibraryContents'
import { ShareButton } from '@/components/insights/ShareButton'
import { TrackPanels } from '@/components/insights/TrackPanels'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Perspectives on emerging markets, cross-border expansion, financial inclusion, and business development from Burton Crapps of Purlieu Management.',
  alternates: { canonical: '/insights' },
}

const LATEST_COUNT = 3

export default async function InsightsPage() {
  const posts = (await getAllPublishedInsights()).map(toMeta)
  const tracks = getTracks(posts)
  const tracked = new Set(tracks.flatMap((t) => t.posts.map((p) => p.slug)))
  const untracked = posts.filter((p) => !tracked.has(p.slug))

  const featured = posts.find((p) => p.featured)
  const latest = posts.filter((p) => !p.featured).slice(0, LATEST_COUNT)

  const searchArticles = posts.map((p) => {
    const track = tracks.find((t) => t.posts.some((tp) => tp.slug === p.slug))
    return {
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      trackName: track?.name,
      trackColor: track?.color,
    }
  })

  return (
    <div className="pt-20">

      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Perspectives
          </p>
          <h1 className="font-display font-semibold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Insights
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-xl leading-relaxed">
            Thinking on emerging markets, cross-border expansion, financial inclusion,
            and what it takes to build businesses at the frontier.
          </p>
          <p className="mt-6 font-sans text-sm text-navy/60">
            {posts.length} articles · {tracks.length} reading tracks · about{' '}
            {Math.round(totalMinutes(posts) / 5) * 5} minutes of reading, start to finish
          </p>
        </div>
      </section>

      <InsightSearch articles={searchArticles}>

        {/* ── Tracks ─────────────────────────────────────────── */}
        <section aria-labelledby="tracks-heading" className="bg-white pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 id="tracks-heading" className="font-display font-semibold text-navy text-3xl md:text-4xl mb-2">
              What are you working on?
            </h2>
            <p className="font-sans text-navy/70 mb-8">
              Each track is a short reading list, in order.
            </p>
            <TrackPanels tracks={tracks} />
          </div>
        </section>

        {/* ── Featured and latest ────────────────────────────── */}
        {(featured || latest.length > 0) && (
          <section aria-label="Featured and latest" className="bg-white pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {featured && (
                <div className="lg:col-span-7">
                  <article className="relative flex h-full flex-col bg-navy rounded-sm p-10 md:p-12 transition-shadow duration-300 hover:shadow-xl">
                    <div className="mb-6">
                      <span className="inline-block font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold-light px-3 py-1.5 bg-gold/10 rounded-sm">
                        Featured · {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display font-semibold text-white text-2xl md:text-3xl leading-snug mb-5">
                      <Link
                        href={`/insights/${featured.slug}`}
                        className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-gold"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="font-sans text-sm text-white/70 leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <span className="font-sans text-xs text-white/60">{formatInsightDate(featured.date)}</span>
                      <div className="flex items-center gap-5">
                        <ShareButton title={featured.title} url={insightUrl(featured.slug)} tone="dark" />
                        <span className="hidden sm:flex items-center gap-2 font-sans text-sm font-semibold text-white">
                          Read Article <ArrowRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {latest.length > 0 && (
                <div className={featured ? 'lg:col-span-5' : 'lg:col-span-12'}>
                  <div className="flex h-full flex-col rounded-sm border border-cream-deeper p-8">
                    <h2 className="font-display font-semibold text-navy text-2xl">Latest</h2>
                    <ol className="mt-3 divide-y divide-cream-deeper">
                      {latest.map((post) => (
                        <li key={post.slug}>
                          <Link href={`/insights/${post.slug}`} className="group block py-4">
                            <span className="block font-display font-semibold text-navy text-lg leading-snug group-hover:text-navy-mid transition-colors">
                              {post.title}
                            </span>
                            <span className="mt-1 block font-sans text-xs text-navy/60">
                              {formatInsightDate(post.date)} · {post.readTime}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Every article ──────────────────────────────────── */}
        <section aria-labelledby="library-heading" className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 id="library-heading" className="font-display font-semibold text-navy text-3xl md:text-4xl mb-2">
              Every article, by track
            </h2>
            <p className="font-sans text-navy/70 mb-8">
              The whole library, in reading order.
            </p>
            <LibraryContents tracks={tracks} untracked={untracked} />

            <div className="mt-10 pt-10 border-t border-cream-deeper">
              <p className="font-sans text-sm text-navy/60 text-center">
                Follow Burton on{' '}
                <a href="https://linkedin.com/in/burtoncrapps" target="_blank" rel="noopener noreferrer"
                  className="text-navy/70 hover:text-navy underline transition-colors">
                  LinkedIn
                </a>{' '}
                for the latest perspectives and updates.
              </p>
            </div>
          </div>
        </section>
      </InsightSearch>
    </div>
  )
}
