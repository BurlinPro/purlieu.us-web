import Link from 'next/link'
import { Mail, Users } from 'lucide-react'   // or ExternalLink, Share2, etc.
import { PurlieuLogo } from '@/components/ui/PurlieuLogo'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1">
            <PurlieuLogo variant="light" size="md" href="/" />
            <p className="mt-5 font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Beyond established markets. Strategic advisory grounded in 30+ years of
              real-world execution across ASEAN and the United States.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Connect
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@purlieu.us"
                  className="flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-gold flex-shrink-0" />
                  info@purlieu.us
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/burtoncrapps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Users size={14} className="text-gold flex-shrink-0" />
                  linkedin.com/in/burtoncrapps
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-sans text-xs text-white/40 uppercase tracking-widest">
                Metro Manila, Philippines
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            © {year} Purlieu Management Ltd. All rights reserved.
          </p>
          <p className="font-display text-xs italic text-white/30">
            Beyond Established Markets
          </p>
        </div>
      </div>
    </footer>
  )
}
