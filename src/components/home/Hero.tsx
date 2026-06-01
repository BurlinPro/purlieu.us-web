'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 md:pt-20 bg-navy-dark">

      {/* Subtle background texture + gradient overlay */}
      <div className="absolute inset-0 topo-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-dark/90" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100dvh-5rem)]">

          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-10 h-px bg-teal" />
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-teal">
                  PURLIEU MANAGEMENT
                </span>
              </div>

              <h1 className="font-display font-semibold leading-[0.95] text-white mb-8"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 6.2rem)' }}>
                Beyond<br />
                Established<br />
                <span className="text-teal">Markets.</span>
              </h1>

              <p className="font-sans text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
                Strategic execution for ambitious companies entering ASEAN, the U.S., 
                and frontier markets. Real operator experience. No delegation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal hover:bg-teal-light text-navy font-medium text-base rounded-sm transition-all group"
                >
                  Start Your Expansion
                  <ArrowRight className="group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-medium text-base rounded-sm transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Abstract instead of headshot */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal/20 to-transparent rounded-sm overflow-hidden border border-white/10">
                {/* You can replace this with a real hero image later */}
                <Image
                  src="/images/hero-visual.jpg" 
                  alt="Frontier market expansion"
                  fill
                  className="object-cover opacity-75"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-[260px]">
                <p className="text-sm font-medium text-navy">30+ Years • 26 Countries • Hands-on Execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}