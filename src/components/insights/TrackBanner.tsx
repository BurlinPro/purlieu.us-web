import Link from 'next/link'
import type { TrackPosition } from '@/lib/insights-tracks'

/** "Banking, Credit & Fraud · Article 2 of 3" plus a dot per article in the track. */
export function TrackBanner({ position }: { position: TrackPosition }) {
  const { track, index } = position

  return (
    <nav aria-label={`${track.name} reading track`} className="mb-6">
      <p className="font-sans text-sm">
        <Link
          href={`/insights#${track.slug}`}
          className="font-semibold hover:underline"
          style={{ color: track.color }}
        >
          {track.name}
        </Link>
        <span className="text-navy/60"> · Article {index + 1} of {track.posts.length}</span>
      </p>

      <ol className="-ml-2 mt-1 flex flex-wrap items-center">
        {track.posts.map((post, i) => {
          const current = i === index
          return (
            <li key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                aria-label={`Article ${i + 1}: ${post.title}`}
                aria-current={current ? 'page' : undefined}
                title={post.title}
                className="group flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-navy"
              >
                <span
                  aria-hidden="true"
                  className={`block rounded-full transition-transform ${
                    current ? 'h-3 w-3' : 'h-2 w-2 opacity-30 group-hover:scale-125 group-hover:opacity-70'
                  }`}
                  style={{ backgroundColor: track.color }}
                />
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
