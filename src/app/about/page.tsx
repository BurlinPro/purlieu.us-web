import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Burton Crapps Sr. | Purlieu Management',
  description: '25+ years building and scaling businesses across the United States and ASEAN. Founder of Purlieu Management and operator with deep cross-border execution experience.',
}

const highlights = [
  'Led FICO Philippines to a Top 15 global market ranking',
  'Founded CollectionWorks (CWX) — expanded to 26 countries and acquired by Temenos',
  'Raised over $6M in capital across multiple ventures',
  'Pioneered credit scoring initiatives for unbanked populations in the Philippines',
  'Currently scaling RoadPacker International across ASEAN',
  'U.S. Army veteran — Army Commendation Medal & Meritorious Service Medal',
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Image + Quick Facts */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/burt-crapps.jpg"
                  alt="Burton W. Crapps Sr."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="mt-8 bg-white border border-cream-deeper p-6 rounded-sm">
                <div className="text-xs font-sans tracking-widest text-gold mb-3">METRO MANILA, PHILIPPINES</div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy/70">Phone</span>
                    <span>+63 917 550 8849</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Email</span>
                    <a href="mailto:Burt@Crapps.net" className="hover:text-teal">Burt@Crapps.net</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">LinkedIn</span>
                    <a href="https://linkedin.com/in/burtoncrapps" target="_blank" rel="noopener noreferrer" className="hover:text-teal">linkedin.com/in/burtoncrapps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Full Profile */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-tight text-navy mb-2">
              Burton W. Crapps Sr.
            </h1>
            <p className="text-2xl text-navy/70 mb-10">Founder &amp; Principal, Purlieu Management</p>

            <div className="prose prose-lg text-navy/80 leading-relaxed max-w-none">
              <p className="text-xl">
                Senior executive, entrepreneur, and market builder with 25+ years of hands-on leadership across the United States and Asia-Pacific. 
                Burt specializes in market entry, revenue acceleration, capital raising, and cross-border execution — particularly in emerging and frontier markets.
              </p>

              <p>
                He has founded and scaled multiple ventures in fintech, infrastructure technology, and enterprise software. His track record includes leading the Philippines market expansion for FICO (growing it into a Top 15 global market), pioneering credit scoring for unbanked populations, and building CollectionWorks — a receivables management platform that expanded to 26 countries before being acquired by Temenos.
              </p>

              <h2 className="text-3xl font-display text-navy mt-12 mb-6">Professional Journey</h2>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-xl">Founder &amp; Director, RoadPacker International Pte Ltd</h3>
                    <span className="text-sm text-navy/60">2019 – Present</span>
                  </div>
                  <p className="text-navy/70">Secured ASEAN licensing and built a regional platform for soil stabilization technology. Raised $2M+ in capital and delivered 300+ infrastructure projects across the Philippines, Indonesia, Vietnam, and Thailand.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-xl">Founder &amp; Director, Purlieu Management</h3>
                    <span className="text-sm text-navy/60">2008 – Present</span>
                  </div>
                  <p className="text-navy/70">Built one of the first credit scoring initiatives for unbanked Filipinos. Raised $4M+ and partnered with major Philippine banks and regulators. Continues to advise startups and established companies on market entry and growth strategy across ASEAN and the U.S.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-xl">Partner &amp; Country Director, Fair Isaac Corporation (FICO)</h3>
                    <span className="text-sm text-navy/60">2010 – 2018</span>
                  </div>
                  <p className="text-navy/70">Led the Philippines market entry and expansion, growing FICO into a Top 15 global market. Delivered multi-million dollar revenue growth and established the company as a core analytics and fraud prevention platform for Philippine banking.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-xl">Founder &amp; Managing Director, Purlieu Solutions Inc.</h3>
                    <span className="text-sm text-navy/60">1997 – 2010</span>
                  </div>
                  <p className="text-navy/70">Developed and scaled CollectionWorks (CWX), an enterprise receivables management platform adopted across 26 countries. Built and exited multiple ventures, including Admerex Ltd in Australia.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display text-navy mt-16 mb-6">What Sets Him Apart</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal text-xl leading-none mt-px">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-12 border-t border-cream-deeper">
                <p className="italic text-lg text-navy/80">
                  Every engagement at Purlieu Management is personally led by Burt. The experience, relationships, and execution capability are never delegated.
                </p>
                <p className="mt-8 text-navy/70">
                  U.S. Army veteran (1973–1981) with combat region duty. Graduate of Brewton-Parker College (Summa Cum Laude) with a degree in Behavioral Psychology and Theology.
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