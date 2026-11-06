// Search over Insights, run in the browser. There is no server query and no
// dependency: at this size a scan of every article takes about a millisecond.
// Titles and excerpts ship with the page, so they match immediately. Full article
// text arrives separately (see /api/insights/search-index) and widens the results
// once it loads.

export type SearchArticle = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  /** Unset for articles not in a reading track. */
  trackName?: string
  trackColor?: string
}

export type SearchResult = {
  article: SearchArticle
  /** The excerpt, or a passage from the article when the match is in there. */
  passage: string
}

export type TextPart = { text: string; match: boolean }

const STOP_WORDS = new Set(
  `a about an and are as at be but by can could do does for from get got had has
  have how i if in into is it me much my need of on or our should so than that the
  their them then there these they this to was we were what when where which who
  why will with would you your`.split(/\s+/),
)

const SCORE = { title: 10, excerpt: 5, label: 3, body: 1 }
const MAX_BODY_MATCHES_SCORED = 5
const PASSAGE_BEFORE = 70
const PASSAGE_AFTER = 130

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** The pattern for one query word. Longer words match word starts and take in the
 *  rest of the word for highlighting, so "invest" finds all of "investment". One-
 *  and two-letter words match whole words only, so "ph" does not find "phase".
 *  Simple plurals fold, so "banks" finds "bank". */
function wordPattern(word: string): RegExp {
  if (word.length <= 2) return new RegExp(`\\b${escapeRegExp(word)}\\b`, 'gi')

  let stem = escapeRegExp(word)
  if (/[a-z]{2,}ies$/.test(word)) stem = stem.slice(0, -3) + '(?:y|ies)'
  else if (/[a-z]{3,}y$/.test(word)) stem = stem.slice(0, -1) + '(?:y|ies)'
  else if (word.endsWith('sses')) stem = stem.slice(0, -2)
  else if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) {
    stem = stem.slice(0, -1)
  }
  // Articles mix curly and straight apostrophes; people type straight ones.
  return new RegExp(`\\b${stem.replace(/'/g, "['’]")}\\w*`, 'gi')
}

/** Splits a query into word patterns, dropping filler so "how do banks handle
 *  fraud" searches for "banks handle fraud". */
export function parseQuery(query: string): RegExp[] {
  const words = query
    .toLowerCase()
    .replace(/’/g, "'")
    .split(/\s+/)
    .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter(Boolean)
  const unique = [...new Set(words)]
  const meaningful = unique.filter((w) => !STOP_WORDS.has(w))
  return (meaningful.length ? meaningful : unique).map(wordPattern)
}

function has(text: string, term: RegExp): boolean {
  return text.search(term) !== -1
}

function count(text: string, term: RegExp): number {
  return text.match(term)?.length ?? 0
}

/** A passage from the article around the first match of a term. */
function bodyPassage(body: string, term: RegExp): string {
  const at = body.search(term)
  let start = Math.max(0, at - PASSAGE_BEFORE)
  let end = Math.min(body.length, at + PASSAGE_AFTER)
  // Move out to whole words, and to the sentence start when one is close.
  if (start > 0) {
    const sentence = body.lastIndexOf('. ', at)
    start = sentence >= start ? sentence + 2 : body.indexOf(' ', start) + 1 || start
  }
  if (end < body.length) end = body.lastIndexOf(' ', end)
  const passage = body.slice(start, end).trim()
  const opensSentence = start === 0 || body[start - 2] === '.'
  return `${opensSentence ? '' : '…'}${passage}${end < body.length ? '…' : ''}`
}

/** Articles matching every term, best match first. Ties keep the order `articles`
 *  came in, which is newest first. */
export function searchArticles(
  articles: SearchArticle[],
  bodies: Record<string, string> | null,
  terms: RegExp[],
): SearchResult[] {
  if (!terms.length) return []

  const scored: { result: SearchResult; score: number }[] = []
  for (const article of articles) {
    const body = bodies?.[article.slug] ?? ''
    const label = `${article.category} ${article.trackName ?? ''}`
    const inSummary = (t: RegExp) =>
      has(article.title, t) || has(article.excerpt, t) || has(label, t)

    if (!terms.every((t) => inSummary(t) || has(body, t))) continue

    let score = 0
    for (const t of terms) {
      if (has(article.title, t)) score += SCORE.title
      if (has(article.excerpt, t)) score += SCORE.excerpt
      if (has(label, t)) score += SCORE.label
      score += Math.min(count(body, t), MAX_BODY_MATCHES_SCORED) * SCORE.body
    }

    const onlyInBody = terms.find((t) => !inSummary(t))
    scored.push({
      score,
      result: {
        article,
        passage: onlyInBody ? bodyPassage(body, onlyInBody) : article.excerpt,
      },
    })
  }

  return scored.sort((a, b) => b.score - a.score).map((s) => s.result)
}

/** Splits text into matched and unmatched runs for highlighting. */
export function highlightParts(text: string, terms: RegExp[]): TextPart[] {
  const ranges = terms
    .flatMap((t) => [...text.matchAll(t)])
    .map((m) => [m.index, m.index + m[0].length] as const)
    .sort((a, b) => a[0] - b[0])

  const parts: TextPart[] = []
  let at = 0
  for (const [start, end] of ranges) {
    if (end <= at) continue
    const from = Math.max(start, at)
    if (from > at) parts.push({ text: text.slice(at, from), match: false })
    parts.push({ text: text.slice(from, end), match: true })
    at = end
  }
  if (at < text.length) parts.push({ text: text.slice(at), match: false })
  return parts
}
