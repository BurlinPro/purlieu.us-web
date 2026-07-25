import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { FounderProof } from '@/components/home/FounderProof'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { CTABanner } from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Purlieu Management | Cross-Border Business Development & Market Expansion',
  description:
    'Strategic market entry, cross-border expansion, and capital raising advisory grounded in 30+ years of real-world execution across ASEAN and the United States.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FounderProof />
      <ServicesPreview />
      <InsightsPreview />
      <CTABanner />
    </>
  )
}
