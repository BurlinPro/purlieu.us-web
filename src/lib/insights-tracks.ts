import { SITE_URL } from './seo'
import type { InsightPost } from './types'

// Reading tracks group Insights by what the reader is working on, in a set
// reading order. Adding an article: put its slug in a track's `slugs`, where it
// belongs in the order. A post created in the admin (Supabase) that is not listed
// joins the end of the track that claims its category, and a post no track claims
// lands in "More Insights". Tracks with no published articles are not shown.

export type InsightMeta = Omit<InsightPost, 'content'>

export type Track = {
  slug: string
  name: string
  /** What the reader is working on, in their terms. */
  problem: string
  /** Hex for the track bar and label. Dark enough to read on white and cream. */
  color: string
  /** Article slugs in reading order. */
  slugs: string[]
  /** Categories this track takes in when a post's slug is not listed anywhere. */
  categories: string[]
}

export const TRACKS: Track[] = [
  {
    slug: 'entering-the-market',
    name: 'Entering the Market',
    problem: "You're planning a move into Southeast Asia, and the checklist isn't telling you what decides it.",
    color: '#1A3F6F',
    slugs: [
      'relationships-market-entry-philippines',
      'invisible-infrastructure-emerging-markets',
      'asean-fdi-boom-philippines',
    ],
    categories: ['Market Entry', 'Emerging Markets', 'Cross-Border'],
  },
  {
    slug: 'banking-credit-fraud',
    name: 'Banking, Credit & Fraud',
    problem: 'Philippine lenders are being asked to open up while fraud and credit costs climb.',
    color: '#7A5C2E',
    slugs: [
      'credit-scoring-unbanked-philippines',
      'open-finance-open-data-philippine-lenders',
      'afasa-fraud-balance-sheet-philippine-banks',
    ],
    categories: ['Financial Inclusion', 'Risk & Compliance'],
  },
  {
    slug: 'building-at-the-frontier',
    name: 'Building at the Frontier',
    problem: "You're rebuilding after disruption, or building where the rules aren't written yet.",
    color: '#2F6B5E',
    slugs: ['building-at-the-frontier', 'start-over-strong'],
    categories: ['Strategy'],
  },
]

export type TrackWithPosts = Omit<Track, 'slugs' | 'categories'> & { posts: InsightMeta[] }

export type TrackPosition = {
  track: TrackWithPosts
  /** Zero-based position of the article within the track. */
  index: number
  previous: InsightMeta | null
  next: InsightMeta | null
  /** The track after this one, wrapping around. Null when there is only one. */
  nextTrack: TrackWithPosts | null
}

export function toMeta(post: InsightPost): InsightMeta {
  const { slug, title, date, category, excerpt, readTime, featured } = post
  return { slug, title, date, category, excerpt, readTime, featured }
}

/** Tracks with their published articles resolved in reading order. */
export function getTracks(posts: InsightMeta[]): TrackWithPosts[] {
  const bySlug = new Map(posts.map((p) => [p.slug, p]))
  const listed = new Set(TRACKS.flatMap((t) => t.slugs))
  return TRACKS.map(({ slugs, categories, ...track }) => ({
    ...track,
    posts: [
      ...slugs.flatMap((s) => bySlug.get(s) ?? []),
      ...posts.filter((p) => !listed.has(p.slug) && categories.includes(p.category)),
    ],
  })).filter((track) => track.posts.length > 0)
}

export function getTrackPosition(slug: string, posts: InsightMeta[]): TrackPosition | null {
  const tracks = getTracks(posts)
  const at = tracks.findIndex((t) => t.posts.some((p) => p.slug === slug))
  if (at === -1) return null

  const track = tracks[at]
  const index = track.posts.findIndex((p) => p.slug === slug)
  return {
    track,
    index,
    previous: track.posts[index - 1] ?? null,
    next: track.posts[index + 1] ?? null,
    nextTrack: tracks.length > 1 ? tracks[(at + 1) % tracks.length] : null,
  }
}

export function readMinutes(post: Pick<InsightMeta, 'readTime'>): number {
  return Number(post.readTime.match(/\d+/)?.[0] ?? 5)
}

export function totalMinutes(posts: InsightMeta[]): number {
  return posts.reduce((sum, p) => sum + readMinutes(p), 0)
}

export function insightUrl(slug: string): string {
  return `${SITE_URL}/insights/${slug}`
}

/** Dates are stored as calendar days, so format in UTC. Otherwise a server west of
 *  Greenwich shows the day before. */
export function formatInsightDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
