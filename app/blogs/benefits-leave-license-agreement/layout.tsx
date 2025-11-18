import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Top 10 Benefits of Leave and License Agreement for Property Owners | Your Legal Saathi',
  description: 'Explore the advantages of Leave and License Agreements for property owners, including legal protection, flexibility, and ease of termination in Mumbai.',
  keywords: [
    'Benefits of Leave License Agreement',
    'Leave License Agreement Advantages',
    'Why Leave License Agreement',
    'Leave License Agreement Benefits',
    'Mumbai',
  ],
  openGraph: {
    title: 'Top 10 Benefits of Leave and License Agreement for Property Owners',
    description: 'Explore the advantages of Leave and License Agreements for property owners.',
    url: 'https://legalsaathi.com/blogs/benefits-leave-license-agreement',
    type: 'article',
    publishedTime: '2025-01-05T00:00:00+05:30',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/benefits-leave-license-agreement',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Top 10 Benefits of Leave and License Agreement for Property Owners"
        description="Explore the advantages of Leave and License Agreements for property owners, including legal protection, flexibility, and ease of termination."
        datePublished="2025-01-05T00:00:00+05:30"
        author={{ name: 'Your Legal Saathi', url: 'https://legalsaathi.com' }}
        publisher={{ name: 'Your Legal Saathi' }}
      />
      {children}
    </>
  )
}

