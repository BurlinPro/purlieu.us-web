'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  'Led FICO Philippines to a Top 15 global market ranking',
  'Founded CollectionWorks — expanded to 26 countries and successfully exited',
  'Raised capital for pioneering fintech initiatives in Southeast Asia',
  'Currently scaling infrastructure solutions across ASEAN',
  'U.S. Army veteran with proven leadership in complex environments',
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="block w-12 h-0.5 bg-gold mb-6" />
              
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                LEADERSHIP
              </p>
              
              <h2 className="font-display font-semibold text-navy leading-tight mb-8"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
                Execution You Can<br />Trust at the Frontier
              </h2>

              <div className="max-w-2xl">
                <p className="font-sans text-lg text-navy/80 leading-relaxed mb-8">
                  Purlieu Management is led by Burton W. Crapps Sr., a seasoned operator with 
                  over 30 years of hands-on experience building and scaling businesses across 
                  the United States and ASEAN.
                </p>
                
                <p className="font-sans text-base text-navy/70 leading-relaxed mb-10">
                  Every engagement receives personal leadership. We don’t delegate strategy 
                  or execution — we work directly with you from market analysis through 
                  on-the-ground implementation.
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-4 mb-10">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-sans text-[15px] text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans font-semibold text-navy hover:text-teal transition-colors group"
              >
                Meet Burton Crapps Sr.
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/burt-crapps.jpg"
                  alt="Burton W. Crapps Sr."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Subtle accent overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-[260px] border-l-4 border-teal">
                <p className="font-display font-semibold text-navy text-lg">
                  30+ Years • 26 Countries
                </p>
                <p className="text-sm text-navy/60 mt-1">
                  Real execution. No delegation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}