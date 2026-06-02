import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/BrandIcons'
import { PurlieuLogo } from '@/components/ui/PurlieuLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* ── Top row: logo + nav ─────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <PurlieuLogo variant="light" size="sm" href="/" />

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm text-white/60 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div className="my-6 border-t border-white/10" />

        {/* ── Bottom row: copyright + contact ─────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="font-sans text-xs text-white/40">
              © {year} Purlieu Management Ltd.
            </p>
            <span className="text-white/20 hidden sm:inline">·</span>
            <p className="font-display text-xs italic text-white/30 hidden sm:block">
              Beyond Established Markets
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-sans text-xs text-white/40 hidden lg:block">
              Metro Manila, Philippines
            </span>
            <a
              href="tel:+14702318832"
              className="flex items-center gap-1.5 font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-gold" />
              +1.470.231.8832
            </a>
            <a
              href="mailto:info@purlieu.us"
              className="flex items-center gap-1.5 font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              <Mail size={12} className="text-gold" />
              info@purlieu.us
            </a>
            <a
              href="https://linkedin.com/in/burtoncrapps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              <LinkedInIcon size={12} className="text-gold" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
