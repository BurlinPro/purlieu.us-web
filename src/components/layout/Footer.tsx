import Link from 'next/link'
import { Mail, Users } from 'lucide-react'
import { PurlieuLogo } from '@/components/ui/PurlieuLogo'

const footerLinks = [
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <PurlieuLogo variant="light" size="md" href="/" />
            <p className="mt-5 font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Beyond established markets. Strategic execution grounded in 30+ years of real-world results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
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
            <div className="space-y-3">
              <a href="mailto:info@purlieu.us" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="text-gold" />
                info@purlieu.us
              </a>
              <a href="https://linkedin.com/in/burtoncrapps" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Users size={16} className="text-gold" />
                LinkedIn
              </a>
            </div>
            <p className="mt-8 text-xs text-white/40">Metro Manila, Philippines</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} Purlieu Management Ltd. All rights reserved.</p>
          <p className="font-display italic">Beyond Established Markets</p>
        </div>
      </div>
    </footer>
  )
}