'use client'

import { useState } from 'react'
import { Link, Check } from 'lucide-react'
import { LinkedInIcon, XIcon } from '@/components/ui/BrandIcons'

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select input
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy/40">
        Share
      </span>

      {/* LinkedIn */}
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center gap-1.5 px-3 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-sm font-sans text-xs font-semibold hover:bg-[#0A66C2]/20 transition-colors"
      >
        <LinkedInIcon size={13} />
        LinkedIn
      </a>

      {/* X / Twitter */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center gap-1.5 px-3 py-2 bg-black/5 text-black rounded-sm font-sans text-xs font-semibold hover:bg-black/10 transition-colors"
      >
        <XIcon size={13} />
        X
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={`flex items-center gap-1.5 px-3 py-2 rounded-sm font-sans text-xs font-semibold transition-all ${
          copied
            ? 'bg-green-50 text-green-700'
            : 'bg-navy/5 text-navy/60 hover:bg-navy/10 hover:text-navy'
        }`}
      >
        {copied ? <Check size={13} /> : <Link size={13} />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  )
}
