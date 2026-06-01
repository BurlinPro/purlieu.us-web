import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | Purlieu Management',
  description: 'Meet Burton W. Crapps Sr., Founder & Principal of Purlieu Management.',
}

const highlights = [
  'Led FICO Philippines to a Top 15 global market ranking',
  'Founded CollectionWorks (CWX) — expanded to 26 countries and acquired by Temenos',
  'Raised over $4M for pioneering credit scoring initiatives for unbanked populations',
  'Currently scaling RoadPacker International across multiple ASEAN nations',
  'U.S. Army veteran — recipient of Army Commendation and Meritorious Service Medals',
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display font-semibold text-5xl md:text-6xl text-navy mb-8">
            Burton W. Crapps Sr.
          </h1>
          <p className="text-2xl text-navy/80 leading-tight">
            Founder &amp; Principal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-16">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
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

          {/* Bio Content */}
          <div className="lg:col-span-3 space-y-10 text-lg">
            <p className="leading-relaxed text-navy/80">
              With over 30 years of hands-on leadership across Asia-Pacific and the United States, Burton Crapps has built a career at the intersection of entrepreneurship, fintech, and international business development.
            </p>

            <p className="leading-relaxed text-navy/80">
              From founding and scaling multiple companies to leading major market expansions, Burt brings deep operational experience and a proven track record of execution in complex, frontier environments.
            </p>

            <div>
              <h3 className="font-display text-2xl text-navy mb-6">Key Achievements</h3>
              <ul className="space-y-6">
                {highlights.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-teal text-xl leading-none mt-1">•</span>
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-cream-deeper">
              <p className="font-medium text-navy">
                At Purlieu Management, every client engagement is personally led. The experience, relationships, and execution capability are not delegated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}