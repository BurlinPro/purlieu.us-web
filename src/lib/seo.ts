import type { InsightPost } from './types'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://purlieu.us'
export const SITE_NAME = 'Purlieu Management'
export const FOUNDER_NAME = 'Burton W. Crapps Sr.'
export const LINKEDIN_URL = 'https://linkedin.com/in/burtoncrapps'
export const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

const SITE_DESCRIPTION =
  'Purlieu Management delivers strategic market entry, cross-border expansion, and capital raising advisory grounded in 30+ years of real-world execution across ASEAN, the United States, and the Middle East.'

const EXPERTISE = [
  'Cross-border market entry',
  'ASEAN market expansion',
  'Emerging markets strategy',
  'Capital raising and investor relations',
  'Financial inclusion and credit analytics',
  'Business development',
]

/** Site-wide organization entity. Referenced by @id from other schemas. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  email: 'info@purlieu.us',
  founder: {
    '@type': 'Person',
    name: FOUNDER_NAME,
    sameAs: LINKEDIN_URL,
  },
  sameAs: [LINKEDIN_URL],
  knowsAbout: EXPERTISE,
  areaServed: [
    'Philippines',
    'Indonesia',
    'Vietnam',
    'Thailand',
    'Singapore',
    'ASEAN',
    'United States',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+1-470-231-8832',
      email: 'info@purlieu.us',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+63-917-550-8849',
      areaServed: 'PH',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+65-3163-1336',
      areaServed: 'SG',
      availableLanguage: 'English',
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
}

/** Founder entity — strengthens E-E-A-T and article authorship. */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#founder`,
  name: FOUNDER_NAME,
  jobTitle: 'Founder & Principal',
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/burt-crapps.jpg`,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Brewton-Parker College',
  },
  knowsAbout: EXPERTISE,
  sameAs: [LINKEDIN_URL],
  description:
    'Founder and Principal of Purlieu Management with 30+ years building companies and entering markets across ASEAN and the United States, including FICO Philippines, CollectionWorks, and RoadPacker International.',
}

export function articleSchema(post: Pick<InsightPost, 'slug' | 'title' | 'excerpt' | 'date' | 'category'>) {
  const url = `${SITE_URL}/insights/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: 'en-US',
    image: OG_IMAGE,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@id': `${SITE_URL}/#founder` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}
