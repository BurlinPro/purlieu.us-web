import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/BrandIcons'

export const metadata: Metadata = {
  title: 'About Burton Crapps Sr.',
  description:
    '25+ years building and scaling businesses across the United States and ASEAN. Founder of Purlieu Management with deep cross-border execution experience.',
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
      'Delivered multi-million USD revenue growth and enterprise banking adoption across the country',
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

      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            The Principal
          </p>
          <h1
            className="font-display font-semibold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Burton W. Crapps Sr.
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-xl">
            Entrepreneur, market builder, and cross-border operator with 25+ years of
            execution across Asia-Pacific and the United States.
          </p>
        </div>
      </section>

      {/* ── Bio + photo ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Sticky photo col */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-cream-dark rounded-sm -z-10" />
                  <Image
                    src="/images/burt-crapps.jpg"
                    alt="Burton W. Crapps Sr., Founder of Purlieu Management"
                    width={420}
                    height={500}
                    className="object-cover object-top w-full rounded-sm shadow-lg"
                    style={{ aspectRatio: '420/500' }}
                  />
                </div>

                <div className="mt-8 max-w-sm mx-auto lg:mx-0">
                  <a
                    href="https://linkedin.com/in/burtoncrapps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all group"
                  >
                    <LinkedInIcon size={18} className="text-navy" />
                    <span className="font-sans text-sm font-medium text-navy">
                      Connect on LinkedIn
                    </span>
                    <ArrowRight size={13} className="ml-auto text-navy/40 group-hover:text-navy group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio copy col */}
            <div className="lg:col-span-3 space-y-5">
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Senior executive, entrepreneur, and market builder with more than 25 years of
                leadership across Asia-Pacific and the United States. Burt specializes in
                market entry, revenue acceleration, capital raising, and cross-border
                execution — particularly in emerging and frontier markets.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                He has founded and scaled multiple ventures across fintech, infrastructure
                technology, and enterprise software. His track record includes leading the
                Philippines market expansion for FICO (growing it into a Top 15 global market),
                pioneering credit scoring for unbanked populations, and building
                CollectionWorks — a receivables management platform that expanded to 26
                countries before being acquired by Temenos.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Today he is scaling RoadPacker International across four ASEAN nations —
                delivering infrastructure solutions in markets where the systems to support
                them are still being built.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Every engagement through Purlieu Management is managed personally. The network,
                the execution experience, and the relationships are not delegated — they are
                the offering.
              </p>

              {/* Education */}
              <div className="pt-4 border-t border-cream-deeper">
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                  Education
                </p>
                <p className="font-sans text-sm text-navy/70">
                  <strong className="text-navy font-semibold">
                    BA — Behavioral Psychology &amp; Theology, Summa Cum Laude
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
            Career History
          </h2>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-cream-deeper hidden md:block" />

            <div className="space-y-14">
              {career.map((item, i) => (
                <div key={i} className="relative md:pl-10">
                  {/* Dot */}
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
                        {item.company} — {item.location}
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
            Work with Burton Directly
          </h2>
          <p className="font-sans text-base text-white/60 mb-8">
            Every Purlieu engagement is managed personally. Start the conversation.
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
