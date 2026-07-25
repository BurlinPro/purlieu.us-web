import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">

      {/* Subtle topo texture */}
      <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

      {/* Gold vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold/40 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <span className="inline-block font-display text-sm italic text-gold mb-6">
          &ldquo;Purlieu&rdquo;: the place beyond established boundaries.
        </span>

        <h2
          className="font-display font-semibold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        >
          Ready to Operate at
          <br />
          the Edge?
        </h2>

        <p className="font-sans text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&apos;re entering a new market, raising growth capital, or building
          in territory without a map, let&apos;s talk.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-navy font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-cream transition-colors duration-200 group"
        >
          Engage with Purlieu
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
