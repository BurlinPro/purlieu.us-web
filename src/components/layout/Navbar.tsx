'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { PurlieuLogo } from '@/components/ui/PurlieuLogo'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-cream-dark'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <PurlieuLogo variant="dark" size="md" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? 'text-navy border-b-2 border-gold pb-0.5'
                      : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-navy-mid transition-colors duration-200"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cream-dark px-6 pb-6 pt-4 space-y-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`block py-3 font-sans text-base font-medium border-b border-cream-dark last:border-0 transition-colors ${
                  active ? 'text-navy' : 'text-navy/70'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block text-center px-5 py-3 bg-navy text-white text-sm font-sans font-medium tracking-wide rounded-sm"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
