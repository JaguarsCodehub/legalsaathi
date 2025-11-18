import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Essential Clauses in Leave and License Agreement You Must Know | Your Legal Saathi',
  description: 'Learn about the critical clauses that should be included in your Leave and License Agreement to protect both landlord and tenant interests in Mumbai.',
  keywords: [
    'Leave License Agreement Clauses',
    'Essential Clauses Leave License',
    'Important Clauses Leave License Agreement',
    'Leave License Agreement Terms',
    'Mumbai',
  ],
  openGraph: {
    title: 'Essential Clauses in Leave and License Agreement You Must Know',
    description: 'Learn about the critical clauses that should be included in your Leave and License Agreement.',
    url: 'https://legalsaathi.com/blogs/essential-clauses-leave-license-agreement',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00+05:30',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/essential-clauses-leave-license-agreement',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Essential Clauses in Leave and License Agreement You Must Know"
        description="Learn about the critical clauses that should be included in your Leave and License Agreement to protect both landlord and tenant interests."
        datePublished="2025-01-10T00:00:00+05:30"
        author={{ name: 'Your Legal Saathi', url: 'https://legalsaathi.com' }}
        publisher={{ name: 'Your Legal Saathi' }}
      />
      {children}
    </>
  )
}

