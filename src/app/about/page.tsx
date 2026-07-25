import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LinkedInIcon, WhatsAppIcon } from '@/components/ui/BrandIcons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Purlieu Management is a principal-led consulting firm specializing in cross-border market entry, business development, and capital raising across ASEAN and the United States.',
}

const career = [
  {
    period: '2019 – Present',
    role: 'Founder & Director',
    company: 'RoadPacker International Pte Ltd',
    location: 'Singapore / ASEAN',
    points: [
      'Secured ASEAN licensing and built regional platform for advanced soil stabilization technology',
      'Raised $2M+ in capital; currently structuring $10M growth investment round',
      'Delivered 300+ infrastructure implementations across Philippines, Indonesia, Vietnam, and Thailand',
      'Established partnerships with contractors, government stakeholders, and regional distribution networks',
    ],
  },
  {
    period: '2008 – Present',
    role: 'Founder & Principal',
    company: 'Purlieu Management Ltd',
    location: 'Philippines',
    points: [
      'Built and funded one of the first credit scoring initiatives for unbanked Filipinos',
      'Raised $4M+ in capital; partnered with top Philippine banks and BSP stakeholders',
      'Contributed to national financial inclusion initiatives and APEC-level engagement',
      'Business integrated into the ecosystem surrounding CIBI Holdings',
    ],
  },
  {
    period: '2010 – 2018',
    role: 'Partner / Country Director, Business Development',
    company: 'Fair Isaac Corporation (FICO)',
    location: 'Philippines',
    points: [
      'Led Philippines market entry from inception; grew to Top 15 global FICO market by 2014',
      'Delivered multi-million USD revenue growth and enterprise banking adoption',
      'Achieved FICO Circle of Excellence recognition multiple years',
      'Spearheaded development of localized credit scoring for underserved market segments',
    ],
  },
  {
    period: '1997 – 2010',
    role: 'Founder & Managing Director',
    company: 'Purlieu Solutions Inc. (CollectionWorks / CWX)',
    location: 'Atlanta, USA',
    points: [
      'Developed CWX / CollectionWorks enterprise software for receivables management',
      'Expanded platform to 26 countries serving global banks and financial institutions',
      'Managed 700+ B2B clients with global implementation and support operations',
      'Platform acquired by Temenos AG (Geneva)',
    ],
  },
  {
    period: '1973 – 1981',
    role: 'Service Member',
    company: 'United States Army',
    location: 'United States',
    points: [
      'Served in recruiting leadership and combat region assignments',
      'Awarded Army Commendation Medal',
      'Awarded Army Meritorious Service Medal',
    ],
  },
]

const expertise = [
  'Market Entry & Expansion (ASEAN, U.S., Middle East)',
  'Revenue Growth & Strategic Partnerships',
  'Investor Relations & Capital Raising',
  'Fintech, Credit Analytics & Financial Inclusion',
  'Infrastructure & Emerging Market Solutions',
  'Organizational Leadership & Team Scaling',
  'Government & Institutional Engagement',
  'Cross-Border Regulatory Navigation',
]

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── Page header — no photo here ────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            The Firm
          </p>
          <h1
            className="font-display font-semibold text-navy leading-tight mb-5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            About Purlieu
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-2xl leading-relaxed">
            Purlieu Management is a principal-led advisory firm focused on cross-border
            market entry, business development, and capital raising. Every engagement is
            managed directly, not delegated to a team of analysts.
          </p>
        </div>
      </section>

      {/* ── Principal bio + photo ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Sticky photo — reasonably sized, not dominant */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative max-w-xs mx-auto lg:mx-0">
                  <div className="absolute -bottom-3 -right-3 w-full h-full bg-cream-dark rounded-sm -z-10" />
                  <Image
                    src="/images/burt-crapps.jpg"
                    alt="Founder, Purlieu Management"
                    width={320}
                    height={380}
                    className="object-cover object-top w-full rounded-sm shadow-md"
                    style={{ aspectRatio: '320/380' }}
                  />
                </div>

                <div className="mt-6 max-w-xs mx-auto lg:mx-0">
                  <p className="font-display font-semibold text-navy text-lg">
                    Burton W. Crapps Sr.
                  </p>
                  <p className="font-sans text-sm text-navy/50 mt-0.5">
                    Founder &amp; Principal
                  </p>
                  <a
                    href="https://linkedin.com/in/burtoncrapps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2.5 px-4 py-3 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all group w-full"
                  >
                    <LinkedInIcon size={15} className="text-navy" />
                    <span className="font-sans text-sm font-medium text-navy">LinkedIn</span>
                    <ArrowRight size={12} className="ml-auto text-navy/30 group-hover:text-navy group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* Phone numbers */}
                  <div className="mt-4 space-y-2">
                    <a
                      href="tel:+14702318832"
                      className="flex items-center gap-2.5 px-4 py-2.5 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all group w-full"
                    >
                      <span className="text-sm">🇺🇸</span>
                      <span className="font-sans text-sm font-medium text-navy">+1.470.231.8832</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+639175508849"
                        className="flex-1 flex items-center gap-2.5 px-4 py-2.5 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all group"
                      >
                        <span className="text-sm">🇵🇭</span>
                        <span className="font-sans text-sm font-medium text-navy">+63.917.550.8849</span>
                      </a>
                      <a
                        href="https://wa.me/639175508849"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="flex items-center justify-center w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-sm hover:bg-[#25D366]/20 transition-colors flex-shrink-0"
                      >
                        <WhatsAppIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio copy */}
            <div className="lg:col-span-3 space-y-5">
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Purlieu Management was founded on a straightforward premise: the
                difference between a company that successfully enters a new market and one
                that doesn&apos;t is rarely the quality of the product or the size of the
                opportunity. It is almost always execution, and execution requires
                experience in the specific market, relationships that took years to build,
                and the judgment that comes from having made costly mistakes somewhere else.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                The firm&apos;s founder brings more than 25 years of direct operating
                experience across Asia-Pacific and the United States. He has founded and
                scaled multiple ventures across fintech, infrastructure, and enterprise
                software, including leading the Philippines market expansion for FICO
                (growing it to a Top 15 global market), building CollectionWorks into
                a 26-country platform before its acquisition by Temenos, and pioneering
                credit scoring infrastructure for unbanked populations in Southeast Asia.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Today the firm also supports RoadPacker International&apos;s expansion across
                four ASEAN nations, working in markets where the infrastructure required
                to operate is still being built. That has always been Purlieu&apos;s territory.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Engagements are managed directly and personally. The network, the market
                knowledge, and the execution accountability are not outsourced.
              </p>

              <div className="pt-4 border-t border-cream-deeper">
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                  Education
                </p>
                <p className="font-sans text-sm text-navy/70">
                  <strong className="text-navy font-semibold">
                    BA in Behavioral Psychology &amp; Theology, Summa Cum Laude
                  </strong>
                  <br />
                  Brewton-Parker College, Georgia, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Expertise ─────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <h2
            className="font-display font-semibold text-navy leading-tight mb-12"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-sm border border-cream-deeper hover:border-navy/20 transition-colors">
                <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="font-sans text-sm text-navy/70 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career timeline ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <h2
            className="font-display font-semibold text-navy leading-tight mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Track Record
          </h2>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-cream-deeper hidden md:block" />
            <div className="space-y-14">
              {career.map((item, i) => (
                <div key={i} className="relative md:pl-10">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gold hidden md:block" />
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 mb-4">
                    <span className="font-sans text-xs font-semibold tracking-wide text-gold uppercase whitespace-nowrap md:w-32 flex-shrink-0">
                      {item.period}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-navy text-xl leading-tight">
                        {item.role}
                      </h3>
                      <p className="font-sans text-sm font-medium text-navy/60 mt-0.5">
                        {item.company} · {item.location}
                      </p>
                    </div>
                  </div>
                  <ul className="md:ml-[8.5rem] space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-2 block w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                        <span className="font-sans text-sm text-navy/60 leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-semibold text-white text-4xl mb-5">
            Work With the Firm Directly
          </h2>
          <p className="font-sans text-base text-white/60 mb-8">
            Every engagement is managed personally. Start the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-cream transition-colors group"
          >
            Get in Touch
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
