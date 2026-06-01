import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, TrendingUp, DollarSign, Rocket, Building2, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strategic market entry, business development, capital raising, startup formation, cross-border operations, and emerging market advisory — grounded in 30+ years of real-world execution.',
}

const services = [
  {
    icon: Globe,
    title: 'Market Entry & Expansion',
    summary:
      'Strategic entry into ASEAN, U.S., and Middle East markets — from feasibility through on-the-ground execution.',
    detail: [
      'Market feasibility and opportunity assessment',
      'Competitive landscape analysis and positioning',
      'Regulatory and compliance pathway mapping',
      'Partnership identification and structuring',
      'Market activation and launch execution',
      'Regional expansion from initial market success',
    ],
    geographies: 'Philippines · Indonesia · Vietnam · Thailand · United States · Middle East',
  },
  {
    icon: TrendingUp,
    title: 'Business Development & Revenue Growth',
    summary:
      'Building partnership networks, channel development, and revenue acceleration for growth-stage companies.',
    detail: [
      'Strategic partnership identification and negotiation',
      'Enterprise sales strategy and pipeline development',
      'Channel and distribution network construction',
      'Key account management frameworks',
      'Revenue acceleration for existing market presence',
      'Government and institutional relationship development',
    ],
    geographies: 'ASEAN · United States · International',
  },
  {
    icon: DollarSign,
    title: 'Capital Raising & Investor Relations',
    summary:
      'Structuring investment opportunities, investor outreach, and capital alignment for expansion rounds.',
    detail: [
      'Investment structure and terms development',
      'Investor identification and outreach',
      'Pitch preparation and materials',
      'Due diligence preparation and management',
      'Term negotiation support',
      'Post-investment relationship management',
    ],
    geographies: 'U.S. · ASEAN · Global Institutional',
  },
  {
    icon: Rocket,
    title: 'Startup Formation & Scaling',
    summary:
      'From concept validation to operational foundation — building companies in emerging and underserved markets.',
    detail: [
      'Concept validation and business model development',
      'Entity formation and legal structuring',
      'Initial team and leadership assembly',
      'Go-to-market strategy and execution',
      'Early customer acquisition and revenue',
      'Operational foundation for scaling',
    ],
    geographies: 'Philippines · ASEAN · United States',
  },
  {
    icon: Building2,
    title: 'Cross-Border Operations',
    summary:
      'Navigating regulatory environments, building compliant structures, and establishing operational presence across borders.',
    detail: [
      'Cross-border entity and operational structuring',
      'Regulatory navigation and compliance frameworks',
      'Local operational team development',
      'Banking and financial infrastructure setup',
      'Government and regulatory engagement',
      'Ongoing operational management support',
    ],
    geographies: 'U.S.–ASEAN · ASEAN Regional · U.S.–Middle East',
  },
  {
    icon: Layers,
    title: 'Infrastructure & Emerging Markets',
    summary:
      'Identifying and executing infrastructure opportunities in markets where systems are still forming.',
    detail: [
      'Infrastructure opportunity identification and assessment',
      'Government and institutional stakeholder engagement',
      'Public-private partnership structuring',
      'Project financing and capital alignment',
      'Implementation partner identification',
      'Execution oversight and project management',
    ],
    geographies: 'Philippines · Indonesia · Vietnam · Thailand',
  },
]

const approach = [
  {
    step: '01',
    title: 'Assess',
    description:
      "Every engagement begins with a clear-eyed assessment — the opportunity, the obstacles, the timeline, and what execution actually requires in the specific market.",
  },
  {
    step: '02',
    title: 'Structure',
    description:
      'We define the structure that the opportunity requires: entity, partnerships, capital, regulatory pathway, and the sequence in which each must be built.',
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'Execution is hands-on. Not delegated. Burton operates directly across every engagement — bringing the network, the experience, and the accountability.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'Initial execution is not the goal. The goal is building the foundation from which a business can grow. Each engagement is designed with that trajectory in mind.',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* ── Page hero ───────────────────────────────────────── */}
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
            Advisory grounded in execution. Every service Purlieu provides is backed by
            direct experience — not theory — in the markets and challenges it addresses.
          </p>
        </div>
      </section>

      {/* ── Services detail ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map(({ icon: Icon, title, summary, detail, geographies }, i) => (
              <div
                key={i}
                className="group bg-white border border-cream-deeper hover:border-navy/20 hover:shadow-md rounded-sm overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-cream-deeper">

                  {/* Left: title */}
                  <div className="lg:col-span-4 p-8 bg-cream/30 group-hover:bg-cream/60 transition-colors">
                    <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-5">
                      <Icon size={18} className="text-navy" />
                    </div>
                    <h2 className="font-display font-semibold text-navy text-2xl leading-tight mb-3">
                      {title}
                    </h2>
                    <p className="font-sans text-sm text-navy/60 leading-relaxed mb-4">
                      {summary}
                    </p>
                    <p className="font-sans text-xs text-gold font-medium tracking-wide">
                      {geographies}
                    </p>
                  </div>

                  {/* Right: detail */}
                  <div className="lg:col-span-8 p-8">
                    <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy/40 mb-5">
                      Scope Includes
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {detail.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-2 block w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          <span className="font-sans text-sm text-navy/70 leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ─────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="gold-rule" />
          <h2
            className="font-display font-semibold text-navy leading-tight mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
          >
            The Purlieu Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ step, title, description }) => (
              <div key={step} className="bg-white p-8 rounded-sm border border-cream-deeper relative overflow-hidden">
                <span className="absolute top-4 right-5 font-display font-bold text-5xl text-navy/5 select-none leading-none">
                  {step}
                </span>
                <h3 className="font-display font-semibold text-navy text-2xl mb-3">{title}</h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement note ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-px h-16 bg-gold/40 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-navy leading-snug font-medium italic mb-8">
            &ldquo;Our role is not advisory alone. We contribute to structuring opportunities,
            guiding execution, forming partnerships, and supporting capital alignment.&rdquo;
          </blockquote>
          <p className="font-sans text-sm text-navy/50">— Burton W. Crapps Sr., Founder, Purlieu Management</p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-semibold text-white text-4xl mb-5">
            Let&apos;s Discuss Your Situation
          </h2>
          <p className="font-sans text-base text-white/60 mb-8">
            Every engagement begins with a conversation. There&apos;s no standardized process —
            just a direct discussion about what you&apos;re building and where Purlieu can help.
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
