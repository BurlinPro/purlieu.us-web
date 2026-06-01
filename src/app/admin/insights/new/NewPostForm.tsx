'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { LinkedInIcon, XIcon } from '@/components/ui/BrandIcons'
import { titleToSlug } from '@/lib/markdown'

const CATEGORIES = ['Emerging Markets', 'Strategy', 'Financial Inclusion', 'Cross-Border', 'Infrastructure', 'Capital', 'Insights']

interface FormState {
  title: string
  slug: string
  category: string
  readTime: string
  excerpt: string
  rawContent: string
  featured: boolean
  published: boolean
  publishedAt: string
}

const EMPTY: FormState = {
  title: '',
  slug: '',
  category: 'Insights',
  readTime: '5 min read',
  excerpt: '',
  rawContent: '',
  featured: false,
  published: true,
  publishedAt: new Date().toISOString().slice(0, 10),
}

function renderPreview(raw: string): string {
  return raw
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) => {
      if (/^#{2,3}\s/.test(b)) return `<h3 class="font-display font-semibold text-navy text-2xl mt-8 mb-3">${b.replace(/^#{2,3}\s+/, '')}</h3>`
      const bold = b.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>').replace(/\n/g, '<br/>')
      return `<p class="font-sans text-base text-slate-700 leading-relaxed mb-5">${bold}</p>`
    })
    .join('\n')
}

export function NewPostForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [slugEdited, setSlugEdited] = useState(false)
  const [preview, setPreview] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Auto-generate slug from title unless manually edited
  useEffect(() => {
    if (!slugEdited && form.title) {
      setForm((f) => ({ ...f, slug: titleToSlug(f.title) }))
    }
  }, [form.title, slugEdited])

  const set = (key: keyof FormState, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        rawContent: form.rawContent,
        category: form.category,
        readTime: form.readTime,
        featured: form.featured,
        published: form.published,
        publishedAt: new Date(form.publishedAt).toISOString(),
      }),
    })

    if (res.ok) {
      setStatus('success')
      setTimeout(() => router.push('/admin/insights'), 1500)
    } else {
      const data = await res.json()
      setErrorMsg(data.error || 'Failed to create post.')
      setStatus('error')
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://purlieu.us'
  const postUrl = `${siteUrl}/insights/${form.slug}`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" strokeWidth={1.5} />
        <h2 className="font-display font-semibold text-navy text-2xl mb-2">Post Published</h2>
        <p className="font-sans text-sm text-navy/60">Redirecting to posts list…</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Main fields ───────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Title */}
          <div>
            <label className="field-label">Title *</label>
            <input
              type="text" required value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="e.g. Why Cross-Border Founders Fail in Year Two"
              className="admin-input text-lg font-display"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="field-label">URL Slug *</label>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs text-navy/40">/insights/</span>
              <input
                type="text" required value={form.slug}
                onChange={(e) => { setSlugEdited(true); set('slug', e.target.value) }}
                placeholder="auto-generated-from-title"
                className="admin-input flex-1 text-sm font-mono"
              />
            </div>
            <p className="font-sans text-xs text-navy/40 mt-1.5">Auto-generated from title. Edit to customise.</p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="field-label">Excerpt * <span className="text-navy/30 font-normal normal-case">— shown on cards and in SEO</span></label>
            <textarea
              required rows={3} value={form.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              placeholder="1–2 sentences that capture the core insight of this post."
              className="admin-input resize-none"
            />
            <p className="font-sans text-xs text-navy/40 mt-1">{form.excerpt.length} / 200 chars recommended</p>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="field-label mb-0">Content * <span className="text-navy/30 font-normal normal-case">— simple markdown supported</span></label>
              <button
                type="button"
                onClick={() => setPreview((v) => !v)}
                className="flex items-center gap-1.5 font-sans text-xs font-semibold text-navy/50 hover:text-navy transition-colors"
              >
                {preview ? <EyeOff size={13} /> : <Eye size={13} />}
                {preview ? 'Edit' : 'Preview'}
              </button>
            </div>

            {preview ? (
              <div
                className="min-h-[320px] bg-white border border-slate-200 rounded-sm p-6"
                dangerouslySetInnerHTML={{ __html: renderPreview(form.rawContent) || '<p class="text-slate-300 font-sans text-sm italic">Nothing to preview yet.</p>' }}
              />
            ) : (
              <textarea
                required rows={16} value={form.rawContent}
                onChange={(e) => set('rawContent', e.target.value)}
                placeholder={`Write your article here.\n\nUse blank lines between paragraphs.\n\n## Section Heading\n\nMore text here. Use **bold** for emphasis.`}
                className="admin-input font-mono text-sm resize-y"
              />
            )}

            {/* Markdown cheat sheet */}
            {!preview && (
              <div className="mt-3 p-3 bg-slate-50 rounded-sm border border-slate-100">
                <p className="font-sans text-xs text-slate-500 font-semibold mb-1.5 uppercase tracking-wide">Markdown hints</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {[
                    ['## Section Heading', '→ bold heading'],
                    ['**bold text**', '→ bold emphasis'],
                    ['Blank line', '→ new paragraph'],
                  ].map(([syntax, desc]) => (
                    <div key={syntax} className="flex items-center gap-2">
                      <code className="text-xs bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">{syntax}</code>
                      <span className="text-xs text-slate-400">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Sidebar ───────────────────────────────────────── */}
        <div className="space-y-6">

          {/* Publish card */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <p className="font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide mb-4">Publish</p>

            <div className="space-y-4">
              <div>
                <label className="field-label">Publish Date</label>
                <input
                  type="date" value={form.publishedAt}
                  onChange={(e) => set('publishedAt', e.target.value)}
                  className="admin-input text-sm"
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox" checked={form.published}
                  onChange={(e) => set('published', e.target.checked)}
                  className="w-4 h-4 accent-navy"
                />
                <span className="font-sans text-sm text-navy">Publish immediately</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox" checked={form.featured}
                  onChange={(e) => set('featured', e.target.checked)}
                  className="w-4 h-4 accent-navy"
                />
                <div>
                  <span className="font-sans text-sm text-navy">Set as featured</span>
                  <p className="font-sans text-xs text-navy/40">Shows as the hero card on Insights page</p>
                </div>
              </label>
            </div>
          </div>

          {/* Meta card */}
          <div className="bg-white border border-slate-200 rounded-sm p-5 space-y-4">
            <p className="font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide">Post Meta</p>

            <div>
              <label className="field-label">Category</label>
              <select
                value={form.category}
                onChange={(e) => set('category', e.target.value)}
                className="admin-input text-sm"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="field-label">Read Time</label>
              <input
                type="text" value={form.readTime}
                onChange={(e) => set('readTime', e.target.value)}
                placeholder="5 min read"
                className="admin-input text-sm"
              />
            </div>
          </div>

          {/* Share preview */}
          {form.slug && (
            <div className="bg-white border border-slate-200 rounded-sm p-5">
              <p className="font-sans text-xs font-semibold text-navy/50 uppercase tracking-wide mb-4">Share Preview</p>
              <div className="space-y-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2.5 bg-[#0A66C2]/10 text-[#0A66C2] rounded-sm text-sm font-sans font-medium hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <LinkedInIcon size={14} />
                  Share on LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(form.title)}&url=${encodeURIComponent(postUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2.5 bg-black/5 text-black rounded-sm text-sm font-sans font-medium hover:bg-black/10 transition-colors"
                >
                  <XIcon size={14} />
                  Share on X
                </a>
              </div>
              <p className="font-sans text-xs text-navy/30 mt-3 break-all">{postUrl}</p>
            </div>
          )}

          {/* Submit */}
          {status === 'error' && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-sm">
              <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-3 bg-navy text-white font-sans text-sm font-semibold rounded-sm hover:bg-navy-mid disabled:opacity-60 transition-colors"
          >
            {status === 'loading' ? <Loader2 size={15} className="animate-spin" /> : null}
            {status === 'loading' ? 'Publishing…' : (form.published ? 'Publish Post' : 'Save Draft')}
          </button>
        </div>
      </div>
    </form>
  )
}
