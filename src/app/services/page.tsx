import type { Metadata } from 'next'
import { ArrowRight, Globe, TrendingUp, DollarSign, Rocket, Building2, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Purlieu Management',
  description: 'Market entry, business development, capital raising, and cross-border execution services across ASEAN and the United States.',
}

const services = [
  {
    icon: Globe,
    title: 'Market Entry & Expansion',
    description: 'End-to-end strategic entry into ASEAN, U.S., and Middle East markets — from feasibility studies through full on-the-ground execution and partnership development.',
    outcomes: ['Market feasibility & risk assessment', 'Local partner identification', 'Regulatory navigation & setup', 'Go-to-market execution'],
  },
  {
    icon: TrendingUp,
    title: 'Business Development & Revenue Growth',
    description: 'Building high-impact partnership networks, sales channels, and revenue acceleration programs for growth-stage companies entering new territories.',
    outcomes: ['Strategic partnership development', 'Channel & distributor networks', 'Revenue scaling playbooks', 'Market positioning'],
  },
  {
    icon: DollarSign,
    title: 'Capital Raising & Investor Relations',
    description: 'Structuring investment opportunities, preparing for capital raises, and managing investor relationships for expansion and growth rounds.',
    outcomes: ['Investment deck & materials', 'Investor targeting & outreach', 'Deal structuring support', 'Post-investment reporting'],
  },
  {
    icon: Rocket,
    title: 'Startup Formation & Scaling',
    description: 'Hands-on support for early-stage companies — from concept validation to building operational foundations in emerging and frontier markets.',
    outcomes: ['Business model validation', 'Team & operations setup', 'Early traction strategies', 'Scaling frameworks'],
  },
  {
    icon: Building2,
    title: 'Cross-Border Operations',
    description: 'Navigating complex regulatory environments, building compliant legal and operational structures, and establishing sustainable presence across borders.',
    outcomes: ['Entity formation & compliance', 'Operational infrastructure', 'Talent & leadership placement', 'Risk mitigation'],
  },
  {
    icon: Layers,
    title: 'Infrastructure & Emerging Markets',
    description: 'Identifying and executing infrastructure and high-potential opportunities in markets where systems and frameworks are still developing.',
    outcomes: ['Opportunity identification', 'Feasibility & due diligence', 'Project structuring', 'Execution oversight'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h1 className="font-display font-semibold text-5xl md:text-6xl text-navy mb-6">
            Services
          </h1>
          <p className="text-xl text-navy/70">
            Advisory grounded in real execution. Every engagement is personally led with hands-on involvement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, outcomes }, index) => (
            <div
              key={index}
              className="group bg-white border border-cream-deeper hover:border-teal p-10 rounded-sm transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-sm flex items-center justify-center mb-8 group-hover:bg-teal group-hover:text-white transition-all">
                <Icon size={28} className="text-navy group-hover:text-white" />
              </div>

              <h3 className="font-display font-semibold text-3xl text-navy mb-6 leading-tight">
                {title}
              </h3>

              <p className="text-navy/70 leading-relaxed mb-8 text-[17px]">
                {description}
              </p>

              <div>
                <p className="font-sans uppercase text-xs tracking-widest text-gold mb-4">Key Outcomes</p>
                <ul className="space-y-3">
                  {outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3 text-navy/80">
                      <span className="text-teal mt-1.5">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-display text-navy mb-6">
            Ready to move beyond established markets?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-white font-medium rounded-sm hover:bg-navy-dark transition-all"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}