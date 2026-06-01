import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Burton Crapps Sr. | Purlieu Management',
  description: '25+ years building and scaling businesses across the United States and ASEAN. Founder of Purlieu Management with deep cross-border execution experience.',
}

const highlights = [
  'Led FICO Philippines to a Top 15 global market ranking',
  'Founded CollectionWorks (CWX) — expanded to 26 countries and acquired by Temenos',
  'Raised over $6M in capital across multiple ventures',
  'Pioneered credit scoring for unbanked populations in the Philippines',
  'Currently scaling RoadPacker International across ASEAN',
  'U.S. Army veteran — Army Commendation Medal & Meritorious Service Medal',
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Smaller, balanced image */}
          <div className="lg:col-span-4">
            <div className="relative max-w-[260px] mx-auto lg:mx-0">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/burt-crapps.jpg"
                  alt="Burton W. Crapps Sr."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-none text-navy mb-3">
              Burton W. Crapps Sr.
            </h1>
            <p className="font-sans text-2xl text-navy/70 mb-10">
              Founder &amp; Principal, Purlieu Management
            </p>

            <div className="max-w-3xl font-sans text-navy/80 leading-relaxed text-[17.5px]">
              <p className="text-xl mb-8">
                Senior executive, entrepreneur, and market builder with over 25 years of hands-on leadership across the United States and Asia-Pacific. 
                Burt specializes in market entry, revenue acceleration, capital raising, and cross-border execution — particularly in emerging and frontier markets.
              </p>

              <p className="mb-8">
                He has founded and scaled multiple ventures in fintech, infrastructure technology, and enterprise software. His experience includes leading the Philippines market expansion for FICO (growing it into a Top 15 global market), pioneering credit scoring solutions for unbanked populations, and building CollectionWorks — a receivables management platform that expanded to 26 countries before being acquired by Temenos.
              </p>

              <h2 className="font-display text-3xl text-navy mt-14 mb-6">Professional Journey</h2>

              <p className="mb-8">
                Burt founded Purlieu Management in 2008 to help companies successfully enter and grow in new markets. He later founded RoadPacker International, where he secured ASEAN licensing and built a regional platform for advanced soil stabilization technology, raising capital and delivering hundreds of infrastructure projects across the Philippines, Indonesia, Vietnam, and Thailand.
              </p>

              <p className="mb-8">
                Prior to Purlieu, he served as Partner and Country Director for Fair Isaac Corporation (FICO), leading the full market entry and expansion in the Philippines. He also founded Purlieu Solutions Inc. in the United States, developing and scaling enterprise software solutions adopted globally.
              </p>

              <h2 className="font-display text-3xl text-navy mt-14 mb-6">What Sets Him Apart</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal text-xl leading-none mt-px">•</span>
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-12 border-t border-cream-deeper">
                <p className="italic text-lg text-navy/80">
                  Every engagement at Purlieu Management is personally led by Burt. The experience, relationships, and execution capability are never delegated.
                </p>
                <p className="mt-8 text-navy/70">
                  U.S. Army veteran and graduate of Brewton-Parker College (Summa Cum Laude) with a degree in Behavioral Psychology and Theology.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-medium rounded-sm hover:bg-navy-dark transition-all"
              >
                Start a Conversation with Burt
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}