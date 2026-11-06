import { getPublishedPosts, type DbPost } from './db/posts'
import { getAllInsights } from './insights'
import type { InsightPost } from './types'

export function dbToInsight(p: DbPost): InsightPost {
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

/** Every published article, from Supabase and from lib/insights.ts, newest first.
 *  On a slug in both, the Supabase post wins. */
export async function getAllPublishedInsights(): Promise<InsightPost[]> {
  let dbPosts: InsightPost[] = []
  try {
    dbPosts = (await getPublishedPosts()).map(dbToInsight)
  } catch {
    // Supabase unavailable: show the articles in the repo.
  }

  const seen = new Set<string>()
  return [...dbPosts, ...getAllInsights()]
    .filter((p) => {
      if (seen.has(p.slug)) return false
      seen.add(p.slug)
      return true
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  ndash: '–',
  hellip: '…',
}

/** Article HTML as plain text, for search. */
export function htmlToSearchText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#\d+|[a-z]+);/gi, (whole, entity: string) =>
      entity.startsWith('#')
        ? String.fromCodePoint(Number(entity.slice(1)))
        : (ENTITIES[entity.toLowerCase()] ?? whole),
    )
    .replace(/\s+/g, ' ')
    .trim()
}
