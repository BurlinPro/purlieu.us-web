import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { NewPostForm } from './NewPostForm'

export const metadata = { title: 'New Post · Purlieu Admin' }

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Admin navbar */}
      <nav className="bg-navy border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <span className="font-display font-semibold text-white tracking-widest uppercase">Purlieu</span>
        <span className="text-white/30 text-sm font-sans">/ Admin / Insights /</span>
        <span className="text-white text-sm font-sans font-medium">New Post</span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link
          href="/admin/insights"
          className="inline-flex items-center gap-1.5 font-sans text-xs text-navy/50 hover:text-navy transition-colors mb-8 uppercase tracking-wide font-semibold"
        >
          <ArrowLeft size={13} /> All Posts
        </Link>

        <h1 className="font-display font-semibold text-navy text-3xl mb-8">New Insight Post</h1>

        <NewPostForm />
      </div>
    </div>
  )
}
