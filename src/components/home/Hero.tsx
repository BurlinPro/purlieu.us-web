import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-visual.jpg')" }}
      />

      {/* Navy overlay — heavy enough for legibility, light enough to see the image */}
      <div className="absolute inset-0 bg-navy/78" />

      {/* Subtle topo texture over overlay */}
      <div className="absolute inset-0 topo-bg opacity-20 pointer-events-none" />

      {/* Gold left-edge accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold/50 hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-gold" />
            <span className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Purlieu Management
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-semibold text-white leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            The Markets That
            <br />
            <em className="not-italic text-white/75">Matter Most</em>
            <br />
            Are the Hardest
            <br />
            to Enter.
          </h1>

          {/* Gold rule */}
          <div className="w-14 h-0.5 bg-gold mb-8" />

          {/* Sub-copy — problem-first, speaks directly to US C-suite */}
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-4">
            Expanding into ASEAN — or moving into a cross-industry market on U.S. soil —
            is not a research problem. It is an execution problem. Most companies arrive
            with the right intent and the wrong infrastructure.
          </p>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-12">
            Purlieu provides the operator experience, regional relationships, and
            on-the-ground execution that close the gap between strategy and result.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-cream transition-all duration-200 group"
            >
              Explore Our Services
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-sans text-sm font-semibold tracking-wide rounded-sm hover:border-white/70 hover:bg-white/5 transition-all duration-200"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
