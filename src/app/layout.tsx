import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://purlieu.us'),
  title: {
    default: 'Purlieu Management | Cross-Border Business Development & Market Expansion',
    template: '%s | Purlieu Management',
  },
  description:
    'Purlieu Management delivers strategic market entry, cross-border expansion, and capital raising advisory grounded in 30+ years of real-world execution across ASEAN, the United States, and the Middle East.',
  keywords: [
    'emerging markets consulting',
    'cross-border expansion',
    'ASEAN market entry',
    'business development consulting',
    'capital raising advisory',
    'startup consulting',
    'Philippines market entry',
    'international business development',
    'Burton Crapps',
    'Purlieu Management',
  ],
  authors: [{ name: 'Burton Crapps', url: 'https://linkedin.com/in/burtoncrapps' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://purlieu.us',
    siteName: 'Purlieu Management',
    title: 'Purlieu Management | Cross-Border Business Development & Market Expansion',
    description:
      'Strategic market entry, cross-border expansion, and capital raising advisory, grounded in 30+ years of execution across ASEAN and the United States.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Purlieu Management' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purlieu Management | Beyond Established Markets',
    description:
      'Strategic market entry, cross-border expansion, and capital raising advisory grounded in 30+ years of real-world execution.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
