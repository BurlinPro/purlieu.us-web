import Link from 'next/link'
import {
  formatInsightDate,
  insightUrl,
  totalMinutes,
  type InsightMeta,
  type TrackWithPosts,
} from '@/lib/insights-tracks'
import { ShareButton } from './ShareButton'

type Group = {
  slug: string
  name: string
  problem?: string
  color: string
  posts: InsightMeta[]
}

/** Every article as a table of contents, grouped by track in reading order. Each
 *  group's heading stays in view on wide screens while its articles scroll past. */
export function LibraryContents({
  tracks,
  untracked,
}: {
  tracks: TrackWithPosts[]
  /** Published articles no track claims, newest first. */
  untracked: InsightMeta[]
}) {
  const groups: Group[] = [
    ...tracks,
    ...(untracked.length
      ? [{ slug: 'more-insights', name: 'More Insights', color: '#0B2545', posts: untracked }]
      : []),
  ]

  return (
    <div className="divide-y divide-cream-deeper border-t border-cream-deeper">
      {groups.map((group) => (
        <section
          key={group.slug}
          id={group.slug}
          aria-labelledby={`${group.slug}-heading`}
          className="scroll-mt-24 py-10 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-12"
        >
          <header className="lg:sticky lg:top-28 lg:self-start">
            <h3
              id={`${group.slug}-heading`}
              className="flex items-center gap-3 font-display text-2xl font-semibold text-navy"
            >
              <span
                aria-hidden="true"
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: group.color }}
              />
              {group.name}
            </h3>
            {group.problem && (
              <p className="mt-2 font-sans text-sm leading-relaxed text-navy/70">{group.problem}</p>
            )}
            <p className="mt-2 font-sans text-xs text-navy/60">
              {group.posts.length} {group.posts.length === 1 ? 'article' : 'articles'} ·{' '}
              {totalMinutes(group.posts)} min
            </p>
          </header>

          <ol className="mt-6 lg:mt-0">
            {group.posts.map((post, i) => (
              <li
                key={post.slug}
                className="relative -mx-3 grid grid-cols-[2.5rem_1fr] gap-x-3 rounded-sm px-3 py-5 transition-colors hover:bg-cream sm:grid-cols-[2.5rem_1fr_auto] sm:gap-x-6"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-xl font-semibold leading-7 tabular-nums"
                  style={{ color: group.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h4 className="font-display text-xl font-semibold leading-snug text-navy">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <p className="mt-1 line-clamp-2 font-sans text-sm leading-relaxed text-navy/70">
                    {post.excerpt}
                  </p>
                </div>

                <div className="col-start-2 mt-3 flex items-center justify-between gap-4 sm:col-start-3 sm:row-start-1 sm:mt-0 sm:flex-col sm:items-end sm:justify-start sm:gap-2">
                  <p className="font-sans text-xs text-navy/60 sm:whitespace-nowrap sm:text-right">
                    {post.readTime}
                    <span className="block">{formatInsightDate(post.date)}</span>
                  </p>
                  <ShareButton title={post.title} url={insightUrl(post.slug)} />
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}
