import { NextResponse } from 'next/server'
import { getAllPublishedInsights, htmlToSearchText } from '@/lib/all-insights'

// The full text of every published article, for the Insights search box. It is
// fetched when a reader first focuses the box, so the page itself stays light.
export const dynamic = 'force-static'

// Admin-created posts join the full-text index within the hour. Their titles and
// excerpts are searchable right away, since those ship with the page.
export const revalidate = 3600

export async function GET() {
  const bodies: Record<string, string> = {}
  for (const post of await getAllPublishedInsights()) {
    bodies[post.slug] = htmlToSearchText(post.content)
  }

  return NextResponse.json(bodies, {
    headers: { 'X-Robots-Tag': 'noindex' },
  })
}
