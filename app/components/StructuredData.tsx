import Script from 'next/script'

interface LocalBusinessSchema {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  email: string
  url: string
  priceRange?: string
  areaServed?: string[]
  serviceType?: string[]
}

interface ArticleSchema {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
  publisher: {
    name: string
    logo?: {
      url: string
      width: number
      height: number
    }
  }
}

interface ServiceSchema {
  serviceType: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: string
}

interface FAQSchema {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function LocalBusinessStructuredData(data: LocalBusinessSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    telephone: data.telephone,
    email: data.email,
    url: data.url,
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.areaServed && { areaServed: data.areaServed }),
    ...(data.serviceType && { serviceType: data.serviceType }),
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleStructuredData(data: ArticleSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    ...(data.image && { image: data.image }),
    datePublished: data.datePublished,
    ...(data.dateModified && { dateModified: data.dateModified }),
    author: {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      ...(data.publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: data.publisher.logo.url,
          width: data.publisher.logo.width,
          height: data.publisher.logo.height,
        },
      }),
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceStructuredData(data: ServiceSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceType,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: data.provider.name,
      url: data.provider.url,
    },
    areaServed: {
      '@type': 'City',
      name: data.areaServed,
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQStructuredData(data: FAQSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

