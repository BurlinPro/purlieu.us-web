import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { totalMinutes, type TrackWithPosts } from '@/lib/insights-tracks'

/** One panel per track, led by what the reader is working on. The whole panel opens
 *  the track's first article. "See all" jumps to the track's contents. */
export function TrackPanels({ tracks }: { tracks: TrackWithPosts[] }) {
  const columns = tracks.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-6 ${columns}`}>
      {tracks.map((track) => {
        const first = track.posts[0]
        const count = track.posts.length
        return (
          <article
            key={track.slug}
            className="group relative flex flex-col rounded-sm border border-cream-deeper bg-white p-8 transition-all duration-300 hover:border-navy/20 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1"
              style={{ backgroundColor: track.color }}
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3
                className="font-sans text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: track.color }}
              >
                {track.name}
              </h3>
              <span className="font-sans text-xs text-navy/60">
                {count} {count === 1 ? 'article' : 'articles'} · {totalMinutes(track.posts)} min
              </span>
            </div>

            <p className="mt-5 mb-8 font-display text-2xl font-semibold leading-snug text-navy">
              {track.problem}
            </p>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t border-cream-deeper pt-5">
              <Link
                href={`/insights/${first.slug}`}
                className="min-w-0 flex-1 basis-48 after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
              >
                <span className="block font-sans text-xs uppercase tracking-[0.12em] text-navy/60">
                  Start with
                </span>
                <span className="mt-1 block font-sans text-sm font-semibold leading-snug text-navy">
                  {first.title}{' '}
                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                    className="inline align-[-1px] transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              {count > 1 && (
                <a
                  href={`#${track.slug}`}
                  className="relative z-10 inline-flex shrink-0 items-center gap-1 font-sans text-xs font-semibold text-navy/70 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  See all {count} <ArrowDown size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
