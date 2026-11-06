'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Link as LinkIcon, Mail, Share2 } from 'lucide-react'
import { LinkedInIcon, WhatsAppIcon, XIcon } from '@/components/ui/BrandIcons'

interface ShareButtonProps {
  title: string
  url: string
  /** Use "dark" on navy backgrounds. */
  tone?: 'light' | 'dark'
}

const TONES = {
  light: 'border-cream-deeper text-navy/70 hover:border-navy/30 hover:text-navy focus-visible:outline-navy',
  dark: 'border-white/20 text-white/70 hover:border-white/50 hover:text-white focus-visible:outline-white',
}

const ITEM =
  'flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-left font-sans text-sm text-navy hover:bg-cream focus-visible:outline-2 focus-visible:outline-navy'

/** A Share button for one article. On phones it opens the device's own share sheet.
 *  Elsewhere it opens a small menu. It sits above a card's stretched link, and it
 *  stops clicks from reaching that link. */
export function ShareButton({ title, url, tone = 'light' }: ShareButtonProps) {
  const [open, setOpen] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const [opensLeftward, setOpensLeftward] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  async function handleClick() {
    if (!open && navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      try {
        await navigator.share({ title, url })
        return
      } catch (err) {
        // Dismissing the sheet is not a failure. Anything else falls back to the menu.
        if (err instanceof DOMException && err.name === 'AbortError') return
      }
    }
    // The button can sit on either side of the screen, depending on the layout and
    // width, so open toward whichever side has room.
    const box = buttonRef.current?.getBoundingClientRect()
    setOpensLeftward(!!box && box.right > window.innerWidth / 2)
    setOpen((v) => !v)
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopyState('copied')
      setTimeout(() => {
        setCopyState('idle')
        setOpen(false)
      }, 1200)
    } catch {
      setCopyState('failed')
    }
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const links = [
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <LinkedInIcon size={14} className="text-[#0A66C2]" />,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      icon: <WhatsAppIcon size={14} className="text-[#128C7E]" />,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <XIcon size={14} />,
    },
    {
      label: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <Mail size={14} className="text-navy/60" />,
    },
  ]

  return (
    // Raised while open, so the menu covers the Share buttons in the rows below it.
    <div ref={rootRef} className={`relative inline-block ${open ? 'z-30' : 'z-10'}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Share: ${title}`}
        className={`inline-flex h-9 items-center gap-1.5 rounded-sm border px-3 font-sans text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${TONES[tone]}`}
      >
        <Share2 size={13} aria-hidden="true" />
        Share
      </button>

      {open && (
        <div className={`absolute top-full mt-2 w-44 rounded-sm border border-cream-deeper bg-white p-1 shadow-lg ${opensLeftward ? 'right-0' : 'left-0'}`}>
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              onClick={() => setOpen(false)}
              className={ITEM}
            >
              {icon}
              {label}
            </a>
          ))}
          <button type="button" onClick={handleCopy} aria-live="polite" className={ITEM}>
            {copyState === 'copied' ? (
              <Check size={14} className="text-green-700" aria-hidden="true" />
            ) : (
              <LinkIcon size={14} className="text-navy/60" aria-hidden="true" />
            )}
            {copyState === 'copied' ? 'Copied' : copyState === 'failed' ? "Couldn't copy" : 'Copy link'}
          </button>
        </div>
      )}
    </div>
  )
}
