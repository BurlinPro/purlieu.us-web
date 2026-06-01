import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllInsights } from '@/lib/insights'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function InsightsPreview() {
  const posts = getAllInsights().slice(0, 3)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="gold-rule" />
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Insights
            </p>
            <h2
              className="font-display font-semibold text-navy leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Perspectives from
              <br />
              the Frontier
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-navy-mid group transition-colors flex-shrink-0"
          >
            All Insights
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col border border-cream-deeper hover:border-navy/20 hover:shadow-md rounded-sm overflow-hidden transition-all duration-300"
            >
              {/* Category bar */}
              <div className={`h-1 w-full ${i === 0 ? 'bg-gold' : 'bg-navy/20'}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-sans text-xs font-semibold text-gold tracking-wide uppercase">
                    {post.category}
                  </span>
                  <span className="text-navy/20">·</span>
                  <span className="font-sans text-xs text-navy/50">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-navy text-xl leading-snug mb-4 group-hover:text-navy-mid transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-navy/60 leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-cream-deeper">
                  <span className="font-sans text-xs text-navy/40">{formatDate(post.date)}</span>
                  <span className="font-sans text-xs font-semibold text-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
