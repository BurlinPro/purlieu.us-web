import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">

      {/* Topographic texture — left panel */}
      <div className="absolute inset-0 topo-bg pointer-events-none" />

      {/* Cream base */}
      <div className="absolute inset-0 bg-cream/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-5rem)] items-center">

          {/* ── Left: copy ─────────────────────────────────── */}
          <div className="lg:col-span-7 py-16 lg:py-0 lg:pr-16">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="block w-8 h-px bg-gold" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Purlieu Management
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold leading-[0.95] text-navy mb-8 animate-fade-up"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Beyond
              <br />
              <em className="not-italic text-navy/80">Established</em>
              <br />
              Markets.
            </h1>

            {/* Divider */}
            <div className="w-14 h-0.5 bg-gold mb-8 animate-fade-in animate-delay-200" />

            {/* Sub-copy */}
            <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-lg mb-4 animate-fade-up animate-delay-200">
              Built for U.S. companies entering ASEAN, ASEAN operators expanding into the
              United States, and founders building in markets where the infrastructure is
              still forming.
            </p>
            <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-lg mb-12 animate-fade-up animate-delay-300">
              Thirty years of doing exactly that. Real execution. No delegation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-white font-sans text-sm font-medium tracking-wide rounded-sm hover:bg-navy-mid transition-all duration-200 group"
              >
                Start a Conversation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-navy/30 text-navy font-sans text-sm font-medium tracking-wide rounded-sm hover:border-navy hover:bg-navy/5 transition-all duration-200"
              >
                About Burton Crapps
              </Link>
            </div>
          </div>

          {/* ── Right: headshot ────────────────────────────── */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-in animate-delay-300">

            {/* Decorative navy block behind image */}
            <div className="absolute bottom-0 right-0 w-4/5 h-5/6 bg-navy rounded-sm -z-0 hidden lg:block" />

            {/* Gold accent line */}
            <div className="absolute top-8 right-4 w-0.5 h-32 bg-gold hidden lg:block" />

            <div className="relative z-10 w-72 md:w-80 lg:w-full max-w-sm">
              <Image
                src="/images/burt-crapps.jpg"
                alt="Burton W. Crapps Sr., Founder of Purlieu Management"
                width={480}
                height={560}
                priority
                className="object-cover object-top w-full rounded-sm shadow-2xl"
                style={{ aspectRatio: '480/560' }}
              />

              {/* Caption card */}
              <div className="absolute bottom-6 left-0 -translate-x-4 lg:-translate-x-8 bg-white px-5 py-4 shadow-lg border-l-2 border-gold max-w-[220px]">
                <p className="font-display font-semibold text-navy text-base leading-tight">
                  Burton W. Crapps Sr.
                </p>
                <p className="font-sans text-xs text-navy/60 mt-1 tracking-wide">
                  Founder &amp; Principal
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
