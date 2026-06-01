import Link from 'next/link'
import { ArrowRight, Globe, TrendingUp, DollarSign, Rocket, Building2, Layers } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Market Entry & Expansion',
    description:
      'Strategic entry into ASEAN, U.S., and Middle East markets — from feasibility through on-the-ground execution.',
  },
  {
    icon: TrendingUp,
    title: 'Business Development & Revenue Growth',
    description:
      'Building partnership networks, channel development, and revenue acceleration for growth-stage companies.',
  },
  {
    icon: DollarSign,
    title: 'Capital Raising & Investor Relations',
    description:
      'Structuring investment opportunities, investor outreach, and capital alignment for expansion rounds.',
  },
  {
    icon: Rocket,
    title: 'Startup Formation & Scaling',
    description:
      'From concept validation to operational foundation — building companies in emerging and underserved markets.',
  },
  {
    icon: Building2,
    title: 'Cross-Border Operations',
    description:
      'Navigating regulatory environments, building compliant structures, and establishing operational presence across borders.',
  },
  {
    icon: Layers,
    title: 'Infrastructure & Emerging Markets',
    description:
      'Identifying and executing infrastructure opportunities in markets where systems are still forming.',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            What We Do
          </p>
          <h2
            className="font-display font-semibold text-navy leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Advisory Built on
            <br />
            Real Execution
          </h2>
          <p className="font-sans text-base text-navy/70 leading-relaxed">
            Purlieu's role is not advisory alone. Every engagement involves
            structuring opportunities, guiding execution, forming partnerships, and
            supporting capital alignment — hands-on, from start to result.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-sm border border-cream-deeper hover:border-navy/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                <Icon size={18} className="text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-navy text-xl mb-3">{title}</h3>
              <p className="font-sans text-sm text-navy/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-navy-mid group transition-colors"
          >
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
