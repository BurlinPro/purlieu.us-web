import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { CTABanner } from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />        {/* Lighter version coming */}
      <ServicesPreview />
      <InsightsPreview />
      <CTABanner />
    </>
  )
}