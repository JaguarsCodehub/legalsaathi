import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'What is Leave and License Agreement? Complete Guide 2025 | Your Legal Saathi',
  description: 'Complete guide to Leave and License Agreement in Mumbai. Learn what it is, how it works, key features, benefits, and why it\'s essential for property rentals. Expert insights from Your Legal Saathi.',
  keywords: [
    'Leave and License Agreement',
    'Leave License Agreement',
    'What is Leave License Agreement',
    'Leave License Agreement Mumbai',
    'Leave License Agreement Guide',
    'Property Rental Agreement',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'What is Leave and License Agreement? Complete Guide 2025',
    description: 'Complete guide to Leave and License Agreement in Mumbai. Learn what it is, how it works, key features, and benefits.',
    url: 'https://legalsaathi.com/blogs/what-is-leave-and-license-agreement',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00+05:30',
    authors: ['Your Legal Saathi'],
    tags: ['Leave License Agreement', 'Property Rental', 'Legal Documentation', 'Mumbai'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Leave and License Agreement? Complete Guide',
    description: 'Complete guide to Leave and License Agreement in Mumbai. Learn what it is, how it works, and benefits.',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/what-is-leave-and-license-agreement',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleStructuredData
        headline="What is Leave and License Agreement? A Complete Guide"
        description="Understanding Leave and License Agreements: Learn what they are, how they work, and why they're essential for property rentals in Mumbai and Maharashtra."
        image="https://legalsaathi.com/og-image.jpg"
        datePublished="2025-01-15T00:00:00+05:30"
        dateModified="2025-01-15T00:00:00+05:30"
        author={{
          name: 'Your Legal Saathi',
          url: 'https://legalsaathi.com',
        }}
        publisher={{
          name: 'Your Legal Saathi',
          logo: {
            url: 'https://legalsaathi.com/logo.png',
            width: 280,
            height: 90,
          },
        }}
      />
      {children}
    </>
  )
}

