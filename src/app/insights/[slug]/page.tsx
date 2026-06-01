import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllInsights, getInsightBySlug } from '@/lib/insights'
import { getPublishedPosts, getPostBySlug } from '@/lib/db/posts'
import type { InsightPost } from '@/lib/types'
import { ShareButtons } from '@/components/insights/ShareButtons'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

function dbToInsight(p: Awaited<ReturnType<typeof getPublishedPosts>>[number]): InsightPost {
  return {
    slug: p.slug,
    title: p.title,
    date: p.published_at,
    category: p.category,
    readTime: p.read_time,
    excerpt: p.excerpt,
    content: p.content,
    featured: p.featured,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post =
    getInsightBySlug(slug) ??
    dbToInsight((await getPostBySlug(slug)) ?? ({ slug, title: '', excerpt: '', content: '', category: '', read_time: '', featured: false, published: true, published_at: '', created_at: '', updated_at: '', id: '' }))

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Burton W. Crapps Sr.'],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function InsightPost({ params }: Props) {
  const { slug } = await params

  // Try static first, then DB
  const staticPost = getInsightBySlug(slug)
  const dbRaw = !staticPost ? await getPostBySlug(slug) : null
  const dbPost = dbRaw ? dbToInsight(dbRaw) : null
  const post = staticPost ?? dbPost

  if (!post) notFound()

  // Build full list for prev/next
  const dbAll = await getPublishedPosts()
  const allPosts: InsightPost[] = [
    ...dbAll.map(dbToInsight),
    ...getAllInsights(),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const idx = allPosts.findIndex((p) => p.slug === slug)
  const prev = allPosts[idx + 1] ?? null
  const next = allPosts[idx - 1] ?? null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://purlieu.us'
  const postUrl = `${siteUrl}/insights/${slug}`

  return (
    <div className="pt-20">

      {/* ── Header ─────────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-navy/50 hover:text-navy transition-colors mb-10 tracking-wide uppercase"
          >
            <ArrowLeft size={13} /> All Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-xs font-semibold text-gold tracking-[0.15em] uppercase bg-gold/10 px-3 py-1.5 rounded-sm">
              {post.category}
            </span>
            <span className="font-sans text-xs text-navy/40">{post.readTime}</span>
          </div>

          <h1
            className="font-display font-semibold text-navy leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-7 h-0.5 bg-gold" />
              <span className="font-sans text-sm text-navy/50">{formatDate(post.date)}</span>
              <span className="text-navy/20">·</span>
              <span className="font-sans text-sm text-navy/50">Burton W. Crapps Sr.</span>
            </div>
            <ShareButtons title={post.title} url={postUrl} />
          </div>
        </div>
      </section>

      {/* ── Article body ───────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Lead */}
          <p className="font-display text-xl md:text-2xl text-navy/80 leading-snug mb-10 pb-10 border-b border-cream-deeper italic font-medium">
            {post.excerpt}
          </p>

          {/* Body */}
          <div className="insight-prose" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Share — repeat at bottom */}
          <div className="mt-12 pt-8 border-t border-cream-deeper flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ShareButtons title={post.title} url={postUrl} />
            <a
              href="https://linkedin.com/in/burtoncrapps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-navy/50 hover:text-navy transition-colors"
            >
              Follow Burton on LinkedIn →
            </a>
          </div>

          {/* Author card */}
          <div className="mt-10">
            <div className="flex items-start gap-4 bg-cream p-6 rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-white text-xl">B</span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-navy">Burton W. Crapps Sr.</p>
                <p className="font-sans text-xs text-navy/60 mt-0.5 leading-relaxed">
                  Founder &amp; Principal, Purlieu Management. 25+ years building companies and
                  entering markets across ASEAN and the United States.
                </p>
                <a
                  href="https://linkedin.com/in/burtoncrapps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-navy mt-3 hover:text-navy-mid transition-colors"
                >
                  Connect on LinkedIn <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / next ─────────────────────────────────────── */}
      {(prev || next) && (
        <section className="py-16 bg-cream border-t border-cream-deeper">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prev ? (
                <Link href={`/insights/${prev.slug}`}
                  className="group flex flex-col gap-2 p-6 bg-white border border-cream-deeper hover:border-navy/20 rounded-sm hover:shadow-sm transition-all">
                  <span className="flex items-center gap-1.5 font-sans text-xs font-semibold text-navy/40 uppercase tracking-wide">
                    <ArrowLeft size={12} /> Previous
                  </span>
                  <span className="font-display font-semibold text-navy text-lg leading-snug group-hover:text-navy-mid transition-colors">
                    {prev.title}
                  </span>
                </Link>
              ) : <div />}
              {next && (
                <Link href={`/insights/${next.slug}`}
                  className="group flex flex-col gap-2 p-6 bg-white border border-cream-deeper hover:border-navy/20 rounded-sm hover:shadow-sm transition-all text-right">
                  <span className="flex items-center gap-1.5 justify-end font-sans text-xs font-semibold text-navy/40 uppercase tracking-wide">
                    Next <ArrowRight size={12} />
                  </span>
                  <span className="font-display font-semibold text-navy text-lg leading-snug group-hover:text-navy-mid transition-colors">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-display text-3xl font-semibold text-white mb-4">
            Discuss Your Situation
          </p>
          <p className="font-sans text-sm text-white/60 mb-7">
            If this is relevant to where you&apos;re operating, let&apos;s talk.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-sans text-sm font-semibold rounded-sm hover:bg-cream transition-colors group">
            Get in Touch
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
