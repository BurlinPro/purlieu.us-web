import type { MetadataRoute } from 'next'
import { getAllInsights } from '@/lib/insights'
import { getPublishedPosts } from '@/lib/db/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://purlieu.us'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]

  const staticInsightRoutes: MetadataRoute.Sitemap = getAllInsights().map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  let dbInsightRoutes: MetadataRoute.Sitemap = []
  try {
    const dbPosts = await getPublishedPosts()
    dbInsightRoutes = dbPosts.map((p) => ({
      url: `${base}/insights/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch { /* Supabase not configured */ }

  // De-dupe by URL
  const seen = new Set<string>()
  const allRoutes = [...staticRoutes, ...staticInsightRoutes, ...dbInsightRoutes]
    .filter((r) => { if (seen.has(r.url)) return false; seen.add(r.url); return true })

  return allRoutes
}
