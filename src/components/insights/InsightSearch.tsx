'use client'

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'
import { Search, X } from 'lucide-react'
import {
  highlightParts,
  parseQuery,
  searchArticles,
  type SearchArticle,
} from '@/lib/insights-search'
import { insightUrl } from '@/lib/insights-tracks'
import { ShareButton } from './ShareButton'

const URL_WRITE_DELAY_MS = 300
const SEARCH_LOG_DELAY_MS = 1500

/** Applies `?q=` from the URL: on a shared link, on the way back from an article,
 *  and when a link clears it. useSearchParams client-renders everything up to its
 *  Suspense boundary, so it lives in this empty leaf. Anywhere higher up would take
 *  the article list out of the server HTML that crawlers read. */
function UrlQuerySync({ onExternalChange }: { onExternalChange: (q: string) => void }) {
  const q = useSearchParams().get('q') ?? ''
  useEffect(() => onExternalChange(q), [q, onExternalChange])
  return null
}

function Highlighted({ text, terms }: { text: string; terms: RegExp[] }) {
  return highlightParts(text, terms).map((part, i) =>
    part.match ? (
      <mark key={i} className="rounded-[2px] bg-gold-light/40 text-inherit">
        {part.text}
      </mark>
    ) : (
      part.text
    ),
  )
}

/** The search box and its results. While a search is active the results take the
 *  place of `children`, the normal browse-by-track sections. */
export function InsightSearch({
  articles,
  children,
}: {
  /** Published articles, newest first. */
  articles: SearchArticle[]
  children: ReactNode
}) {
  const [query, setQuery] = useState('')
  const [bodies, setBodies] = useState<Record<string, string> | null>(null)
  const [bodiesFailed, setBodiesFailed] = useState(false)
  const bodiesRequested = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  // The URL trails typing by a moment, since browsers rate-limit replaceState.
  // `urlQuery` tells our own writes apart from outside navigation, so a late echo
  // of an earlier write can't overwrite what the reader has typed since.
  const urlQuery = useRef('')
  const urlTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const typedQuery = useRef(false)
  const lastLogged = useRef('')

  useEffect(() => () => clearTimeout(urlTimer.current), [])

  const onExternalChange = useCallback((q: string) => {
    if (q === urlQuery.current) return
    clearTimeout(urlTimer.current)
    urlQuery.current = q
    typedQuery.current = false
    setQuery(q)
  }, [])

  function changeQuery(next: string) {
    typedQuery.current = true
    setQuery(next)
    clearTimeout(urlTimer.current)
    urlTimer.current = setTimeout(() => {
      const url = new URL(window.location.href)
      if (next.trim()) url.searchParams.set('q', next)
      else url.searchParams.delete('q')
      urlQuery.current = url.searchParams.get('q') ?? ''
      window.history.replaceState(null, '', url)
    }, URL_WRITE_DELAY_MS)
  }

  const loadBodies = useCallback(() => {
    if (bodiesRequested.current) return
    bodiesRequested.current = true
    fetch('/api/insights/search-index')
      .then((res) => {
        if (!res.ok) throw new Error(`search index: ${res.status}`)
        return res.json()
      })
      .then(setBodies)
      .catch(() => setBodiesFailed(true))
  }, [])

  const active = query.trim() !== ''
  useEffect(() => {
    if (active) loadBodies()
  }, [active, loadBodies])

  const terms = useMemo(() => parseQuery(query), [query])
  const results = useMemo(
    () => searchArticles(articles, bodies, terms),
    [articles, bodies, terms],
  )
  const stillLoading = bodies === null && !bodiesFailed
  const resultCount = results.length

  // Log what readers look for, once they pause, using GA4's standard `search`
  // event. It waits for the full text so the count is the real one. Searches
  // restored from the URL are skipped, so going back from an article doesn't count
  // twice, and anything that looks like an email or phone number stays out of GA.
  useEffect(() => {
    const term = query.trim().toLowerCase()
    if (!typedQuery.current || !term || stillLoading) return
    if (term === lastLogged.current || /@|\d{7,}/.test(term)) return
    const id = setTimeout(() => {
      lastLogged.current = term
      sendGAEvent('event', 'search', { search_term: term, results_count: resultCount })
    }, SEARCH_LOG_DELAY_MS)
    return () => clearTimeout(id)
  }, [query, resultCount, stillLoading])

  function clear() {
    changeQuery('')
    inputRef.current?.focus()
  }

  return (
    <>
      <Suspense fallback={null}>
        <UrlQuerySync onExternalChange={onExternalChange} />
      </Suspense>

      <section className="bg-white pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault()
              // Enter has nothing to submit. On a phone it should put the keyboard
              // away so the results can be read.
              inputRef.current?.blur()
            }}
            className="relative max-w-xl"
          >
            <label htmlFor="insight-search" className="sr-only">
              Search Insights
            </label>
            <Search
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/50"
            />
            <input
              ref={inputRef}
              id="insight-search"
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              maxLength={100}
              value={query}
              placeholder="Search articles, like AFASA"
              onChange={(e) => changeQuery(e.target.value)}
              onFocus={loadBodies}
              onKeyDown={(e) => {
                if (e.key === 'Escape') clear()
              }}
              className="w-full rounded-sm border border-cream-deeper bg-white py-3.5 pl-11 pr-12 font-sans text-base text-navy placeholder:text-navy/50 focus:border-navy/40 focus:outline-none focus:ring-2 focus:ring-navy/10 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={clear}
                aria-label="Clear search"
                className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm text-navy/50 hover:text-navy focus-visible:outline-2 focus-visible:outline-navy"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </form>
        </div>
      </section>

      {active ? (
        <section aria-label="Search results" className="min-h-[40vh] bg-white pt-8 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p role="status" className="font-sans text-sm text-navy/60">
              {results.length > 0
                ? `${results.length} ${results.length === 1 ? 'article' : 'articles'} found`
                : stillLoading
                  ? 'Searching…'
                  : ''}
              {results.length > 0 && bodiesFailed
                ? '. Titles and excerpts only, the full text did not load.'
                : ''}
            </p>

            {results.length > 0 && (
              <ol className="mt-4 divide-y divide-cream-deeper border-t border-cream-deeper">
                {results.map(({ article, passage }) => (
                  <li
                    key={article.slug}
                    className="relative -mx-3 flex flex-col gap-3 rounded-sm px-3 py-5 transition-colors hover:bg-cream sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                  >
                    <div className="min-w-0">
                      <p className="flex items-center gap-2 font-sans text-xs text-navy/60">
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: article.trackColor ?? '#0B2545' }}
                        />
                        {article.trackName ?? article.category} · {article.readTime}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-navy">
                        <Link
                          href={`/insights/${article.slug}`}
                          className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
                        >
                          <Highlighted text={article.title} terms={terms} />
                        </Link>
                      </h3>
                      <p className="mt-1 max-w-3xl font-sans text-sm leading-relaxed text-navy/70">
                        <Highlighted text={passage} terms={terms} />
                      </p>
                    </div>
                    <ShareButton title={article.title} url={insightUrl(article.slug)} />
                  </li>
                ))}
              </ol>
            )}

            {results.length === 0 && !stillLoading && (
              <div className="mt-2 max-w-xl">
                <p className="font-display text-2xl font-semibold text-navy">
                  Nothing matches &ldquo;{query.trim()}&rdquo;.
                </p>
                <p className="mt-3 font-sans leading-relaxed text-navy/70">
                  Try a shorter search, or{' '}
                  <Link href="/contact" className="font-medium text-navy underline underline-offset-2">
                    ask Burton directly
                  </Link>
                  .
                </p>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-5 font-sans text-sm font-semibold text-navy hover:text-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Clear search and browse by track
                </button>
              </div>
            )}
          </div>
        </section>
      ) : (
        children
      )}
    </>
  )
}
