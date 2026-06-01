import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, TrendingUp, DollarSign, Rocket, Building2, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Market entry, business development, capital raising, and cross-border execution services across ASEAN and the United States.',
}

const services = [
  {
    icon: Globe,
    title: 'Market Entry & Expansion',
    summary:
      'End-to-end strategic entry into ASEAN, U.S., and Middle East markets — from feasibility studies through full on-the-ground execution and partnership development.',
    proof: 'Took FICO Philippines from zero to Top 15 global market in under 4 years.',
    outcomes: [
      'Market feasibility & risk assessment',
      'Local partner identification',
      'Regulatory navigation & setup',
      'Go-to-market execution',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Development & Revenue Growth',
    summary:
      'Building high-impact partnership networks, sales channels, and revenue acceleration programs for growth-stage companies entering new territories.',
    proof: 'CollectionWorks scaled from Atlanta to 26 countries before acquisition by Temenos.',
    outcomes: [
      'Strategic partnership development',
      'Channel & distributor networks',
      'Revenue scaling playbooks',
      'Market positioning',
    ],
  },
  {
    icon: DollarSign,
    title: 'Capital Raising & Investor Relations',
    summary:
      'Structuring investment opportunities, preparing for capital raises, and managing investor relationships for expansion and growth rounds.',
    proof: '$6M+ raised across ventures in ASEAN and the United States.',
    outcomes: [
      'Investment deck & materials',
      'Investor targeting & outreach',
      'Deal structuring support',
      'Post-investment reporting',
    ],
  },
  {
    icon: Rocket,
    title: 'Startup Formation & Scaling',
    summary:
      'Hands-on support for early-stage companies — from concept validation to building operational foundations in emerging and frontier markets.',
    proof: '6 companies founded across fintech, infrastructure, and enterprise software.',
    outcomes: [
      'Business model validation',
      'Team & operations setup',
      'Early traction strategies',
      'Scaling frameworks',
    ],
  },
  {
    icon: Building2,
    title: 'Cross-Border Operations',
    summary:
      'Navigating complex regulatory environments, building compliant legal and operational structures, and establishing sustainable presence across borders.',
    proof: 'Operational presence built and running across Philippines, Indonesia, Vietnam, Thailand, and the U.S.',
    outcomes: [
      'Entity formation & compliance',
      'Operational infrastructure',
      'Talent & leadership placement',
      'Risk mitigation',
    ],
  },
  {
    icon: Layers,
    title: 'Infrastructure & Emerging Markets',
    summary:
      'Identifying and executing infrastructure and high-potential opportunities in markets where systems and frameworks are still developing.',
    proof: '300+ infrastructure project implementations delivered across 4 ASEAN nations.',
    outcomes: [
      'Opportunity identification',
      'Feasibility & due diligence',
      'Project structuring',
      'Execution oversight',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* ── Page hero ──────────────────────────────────────── */}
      <section className="bg-cream topo-bg py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            What We Do
          </p>
          <h1
            className="font-display font-semibold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Services
          </h1>
          <p className="font-sans text-lg text-navy/60 max-w-xl leading-relaxed">
            Advisory grounded in real execution. Every engagement is personally led
            with hands-on involvement — not handed off.
          </p>
        </div>
      </section>

      {/* ── Services grid ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, summary, proof, outcomes }, i) => (
              <div
                key={i}
                className="flex flex-col bg-white border border-cream-deeper hover:border-navy/20 hover:shadow-md rounded-sm overflow-hidden transition-all duration-300 group"
              >
                {/* Card header */}
                <div className="p-8 flex-1">
                  <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-5 group-hover:bg-navy transition-all duration-300">
                    <Icon size={18} className="text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="font-display font-semibold text-navy text-2xl leading-tight mb-3">
                    {title}
                  </h2>
                  <p className="font-sans text-sm text-navy/60 leading-relaxed mb-6">
                    {summary}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-2">
                    {outcomes.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-2 block w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                        <span className="font-sans text-sm text-navy/60 leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof anchor — gold bar at bottom */}
                <div className="px-8 py-4 bg-navy/3 border-t-2 border-gold/40 group-hover:border-gold transition-colors">
                  <p className="font-sans text-xs font-semibold text-gold leading-snug">
                    {proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach strip ─────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-rule" />
              <h2
                className="font-display font-semibold text-navy leading-tight mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                Advisory Alone Doesn&apos;t Move the Needle.
              </h2>
              <p className="font-sans text-base text-navy/70 leading-relaxed mb-4">
                Most consulting firms deliver a framework and step back. Purlieu&apos;s
                role is different: structuring the opportunity, guiding execution, building
                the partnerships, and staying in it through capital and operational milestones.
              </p>
              <p className="font-sans text-base text-navy/70 leading-relaxed">
                Every engagement is managed directly by Burton Crapps — bringing three
                decades of operator experience, not analysis, to the table.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { step: '01', label: 'Assess', desc: 'Honest evaluation of the opportunity, obstacles, and what execution actually requires.' },
                { step: '02', label: 'Structure', desc: 'Define entity, capital, partnerships, and regulatory pathway in the right sequence.' },
                { step: '03', label: 'Execute', desc: 'Hands-on. Direct. Burton operates across every engagement personally.' },
                { step: '04', label: 'Scale', desc: 'Build the foundation that supports growth — not just the initial entry.' },
              ].map(({ step, label, desc }) => (
                <div key={step} className="bg-white p-5 rounded-sm border border-cream-deeper relative overflow-hidden">
                  <span className="absolute top-2 right-3 font-display font-bold text-4xl text-navy/5 select-none leading-none">{step}</span>
                  <h3 className="font-display font-semibold text-navy text-xl mb-2">{label}</h3>
                  <p className="font-sans text-xs text-navy/55 leading-relaxed">{desc}</p>
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
            Ready to move beyond established markets?
          </h2>
          <p className="font-sans text-base text-white/60 mb-8">
            No standard intake process. Just a direct conversation about your situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-cream transition-colors group"
          >
            Start a Conversation
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
