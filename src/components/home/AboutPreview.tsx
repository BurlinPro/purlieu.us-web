import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const highlights = [
  'Led FICO Philippines to a Top 15 global market ranking',
  'Founded CollectionWorks (CWX) — expanded to 26 countries, acquired by Temenos',
  'Raised $4M+ for first credit scoring initiative for unbanked Filipinos',
  'Currently scaling RoadPacker International across 4 ASEAN nations',
  'U.S. Army veteran — Army Commendation &amp; Meritorious Service Medals',
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image panel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/30 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cream-dark rounded-sm -z-10" />

              <Image
                src="/images/burt-crapps.jpg"
                alt="Burton W. Crapps Sr., Founder of Purlieu Management"
                width={420}
                height={500}
                className="object-cover object-top w-full rounded-sm shadow-lg"
                style={{ aspectRatio: '420/500' }}
              />
            </div>
          </div>

          {/* Copy panel */}
          <div className="order-1 lg:order-2">
            <span className="gold-rule" />
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              The Principal
            </p>
            <h2
              className="font-display font-semibold text-navy leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Burton W. Crapps Sr.
            </h2>
            <p className="font-sans text-base text-navy/70 leading-relaxed mb-5">
              Senior executive, entrepreneur, and market builder with 30+ years of
              leadership across Asia-Pacific and the United States. Burt specializes in
              market entry, revenue scale-up, and cross-border business development — with
              a track record built through founding and scaling multiple ventures across
              fintech, infrastructure, and enterprise software.
            </p>
            <p className="font-sans text-base text-navy/70 leading-relaxed mb-8">
              Every engagement at Purlieu is managed personally. The experience, the
              relationships, and the execution capability are not delegated.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span
                    className="font-sans text-sm text-navy/70"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-navy-mid group transition-colors"
            >
              Full Background
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
