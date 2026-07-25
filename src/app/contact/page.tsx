import type { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'
import { LinkedInIcon, WhatsAppIcon } from '@/components/ui/BrandIcons'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Purlieu Management. All inquiries are handled personally by Burton Crapps, Sr.',
}

const engagements = [
  'Entering a new market in ASEAN or the U.S.',
  'Building a business in an emerging or underserved market',
  'Raising capital for an expansion round',
  'Expanding existing operations across borders',
  'Structuring a cross-border partnership or JV',
  'Developing a market entry or growth strategy',
]

export default function ContactPage() {
  return (
    <div className="pt-20">

      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h1
            className="font-display font-semibold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Start a Conversation
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-xl leading-relaxed">
            Every engagement begins with a direct conversation.
            No intake forms. No automated responses. Burton reviews every inquiry personally.
          </p>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ── Left panel ────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-10">

              {/* What we work on */}
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-5">
                  Purlieu Works With Companies That Are…
                </p>
                <ul className="space-y-3">
                  {engagements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-sans text-sm text-navy/70 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div className="border-t border-cream-deeper pt-8 space-y-4">
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                  Direct Contact
                </p>
                <p className="font-sans text-xs text-navy/40 leading-relaxed">
                  Reach us directly. We operate across time zones.
                </p>

                {/* Phone numbers */}
                <div className="space-y-3">
                  {/* US */}
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-cream-deeper">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs font-semibold text-navy/40 w-6">🇺🇸</span>
                      <div>
                        <p className="font-sans text-xs font-semibold text-navy/40 uppercase tracking-wide leading-none mb-0.5">United States</p>
                        <a href="tel:+14702318832" className="font-sans text-sm font-medium text-navy hover:text-navy-mid transition-colors">
                          +1.470.231.8832
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* SG */}
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-cream-deeper">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs font-semibold text-navy/40 w-6">🇸🇬</span>
                      <div>
                        <p className="font-sans text-xs font-semibold text-navy/40 uppercase tracking-wide leading-none mb-0.5">Singapore</p>
                        <a href="tel:+6531631336" className="font-sans text-sm font-medium text-navy hover:text-navy-mid transition-colors">
                          +65.3163.1336
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* PH + WhatsApp */}
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-cream-deeper">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs font-semibold text-navy/40 w-6">🇵🇭</span>
                      <div>
                        <p className="font-sans text-xs font-semibold text-navy/40 uppercase tracking-wide leading-none mb-0.5">Philippines</p>
                        <a href="tel:+639175508849" className="font-sans text-sm font-medium text-navy hover:text-navy-mid transition-colors">
                          +63.917.550.8849
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/639175508849"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#25D366]/10 text-[#25D366] rounded-sm font-sans text-xs font-semibold hover:bg-[#25D366]/20 transition-colors flex-shrink-0"
                    >
                      <WhatsAppIcon size={12} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email + LinkedIn */}
                <a
                  href="mailto:info@purlieu.us"
                  className="flex items-center gap-3 font-sans text-sm text-navy/70 hover:text-navy transition-colors group pt-1"
                >
                  <span className="w-8 h-8 rounded-sm bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                    <Mail size={14} />
                  </span>
                  info@purlieu.us
                </a>
                <a
                  href="https://linkedin.com/in/burtoncrapps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-navy/70 hover:text-navy transition-colors group"
                >
                  <span className="w-8 h-8 rounded-sm bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                    <LinkedInIcon size={14} />
                  </span>
                  linkedin.com/in/burtoncrapps
                </a>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-gold pl-5">
                <p className="font-display text-lg italic text-navy/70 leading-snug">
                  &ldquo;We work with founders, institutions, and partners who are operating,
                  or seeking to operate, beyond established markets.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* ── Form ──────────────────────────────────────── */}
            <div className="lg:col-span-3 bg-cream/50 rounded-sm border border-cream-deeper p-8 md:p-10">
              <h2 className="font-display font-semibold text-navy text-2xl mb-2">
                Send a Message
              </h2>
              <p className="font-sans text-sm text-navy/60 mb-8">
                Describe your situation and what you&apos;re working toward. Burton will follow up
                directly.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
