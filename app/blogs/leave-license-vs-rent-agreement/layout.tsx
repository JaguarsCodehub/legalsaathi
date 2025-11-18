import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Leave & License vs Rent Agreement: Key Differences Explained | Your Legal Saathi',
  description: 'Discover the crucial differences between Leave & License Agreements and traditional Rent Agreements. Know which one suits your needs better for property rental in Mumbai.',
  keywords: [
    'Leave License vs Rent Agreement',
    'Difference between Leave License and Rent Agreement',
    'Leave License Agreement vs Rent Agreement',
    'Which is better Leave License or Rent Agreement',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Leave & License vs Rent Agreement: Key Differences Explained',
    description: 'Discover the crucial differences between Leave & License Agreements and traditional Rent Agreements.',
    url: 'https://legalsaathi.com/blogs/leave-license-vs-rent-agreement',
    type: 'article',
    publishedTime: '2025-01-12T00:00:00+05:30',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/leave-license-vs-rent-agreement',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Leave & License vs Rent Agreement: Key Differences Explained"
        description="Discover the crucial differences between Leave & License Agreements and traditional Rent Agreements. Know which one suits your needs better."
        datePublished="2025-01-12T00:00:00+05:30"
        author={{ name: 'Your Legal Saathi', url: 'https://legalsaathi.com' }}
        publisher={{ name: 'Your Legal Saathi' }}
      />
      {children}
    </>
  )
}

