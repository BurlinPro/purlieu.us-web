import Link from 'next/link'
import { getAllInsights } from '@/lib/insights'
import { getAllPostsAdmin, isSupabaseConfigured } from '@/lib/db/posts'
import { AdminInsightsList } from './AdminInsightsList'
import { LogOut, PenLine, ExternalLink } from 'lucide-react'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default async function AdminInsightsPage() {
  const staticPosts = getAllInsights().map((p) => ({
    id: `static::${p.slug}`,
    slug: p.slug,
    title: p.title,
    category: p.category,
    featured: p.featured ?? false,
    published: true,
    published_at: p.date,
    isStatic: true,
  }))

  let dbPosts: Array<{ id: string; slug: string; title: string; category: string; featured: boolean; published: boolean; published_at: string; isStatic: boolean }> = []
  let supabaseReady = false

  if (isSupabaseConfigured()) {
    try {
      const raw = await getAllPostsAdmin()
      dbPosts = raw.map((p) => ({ ...p, isStatic: false }))
      supabaseReady = true
    } catch (e) {
      console.warn('Admin: could not fetch DB posts', e)
    }
  }

  const all = [...dbPosts, ...staticPosts]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Admin navbar */}
      <nav className="bg-navy border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-display font-semibold text-white tracking-widest uppercase">Purlieu</span>
          <span className="text-white/30 text-sm font-sans">/ Admin</span>
          <span className="text-white/30 text-sm font-sans">/ Insights</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/insights" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs text-white/50 hover:text-white transition-colors">
            <ExternalLink size={13} />
            View Site
          </a>
          <AdminLogoutButton />
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-semibold text-navy text-3xl">Insights</h1>
            <p className="font-sans text-sm text-navy/50 mt-1">{all.length} total posts</p>
          </div>
          <Link
            href="/admin/insights/new"
            className="flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-sans text-sm font-semibold rounded-sm hover:bg-navy-mid transition-colors"
          >
            <PenLine size={15} />
            New Post
          </Link>
        </div>

        {/* Supabase status */}
        {!supabaseReady && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-sm">
            <p className="font-sans text-sm text-amber-800">
              <strong>Supabase not connected.</strong> Static posts are shown read-only below.
              Add <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>,
              and <code>SUPABASE_SERVICE_ROLE_KEY</code> to your environment variables to enable
              creating and managing new posts.
            </p>
          </div>
        )}

        {/* Posts table */}
        <div className="bg-white rounded-sm border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-5 py-3 font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide">Title</th>
                <th className="text-left px-5 py-3 font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3 font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide hidden lg:table-cell">Date</th>
                <th className="text-left px-5 py-3 font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide">Status</th>
                <th className="text-right px-5 py-3 font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {all.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm font-medium text-navy">{post.title}</span>
                      {post.featured && (
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-gold/10 text-gold rounded-sm uppercase tracking-wide">
                          Featured
                        </span>
                      )}
                      {post.isStatic && (
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-500 rounded-sm uppercase tracking-wide">
                          Static
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-navy/40 mt-0.5">/{post.slug}</p>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="font-sans text-xs text-navy/60">{post.category}</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="font-sans text-xs text-navy/40">{formatDate(post.published_at)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-sm uppercase tracking-wide ${
                      post.published
                        ? 'bg-green-50 text-green-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {post.published ? 'Live' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <a
                        href={`/insights/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-navy/50 hover:text-navy transition-colors"
                      >
                        View
                      </a>
                      {!post.isStatic && (
                        <AdminInsightsList postId={post.id} slug={post.slug} />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-sans text-xs text-navy/40 mt-6 text-center">
          Static posts (from <code>src/lib/insights.ts</code>) are read-only here. New posts created via this admin are stored in Supabase.
        </p>
      </div>
    </div>
  )
}

function AdminLogoutButton() {
  return (
    <form action="/api/admin/logout" method="POST">
      <button
        type="submit"
        className="flex items-center gap-1.5 font-sans text-xs text-white/50 hover:text-white transition-colors"
      >
        <LogOut size={13} />
        Sign out
      </button>
    </form>
  )
}
