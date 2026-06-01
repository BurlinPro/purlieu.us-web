import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { CTABanner } from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <InsightsPreview />
      <CTABanner />
    </>
  )
}