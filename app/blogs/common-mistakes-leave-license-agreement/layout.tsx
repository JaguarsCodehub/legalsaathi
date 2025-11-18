import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Common Mistakes to Avoid in Leave and License Agreement | Your Legal Saathi',
  description: 'Avoid costly mistakes when drafting your Leave and License Agreement. Learn from common errors and ensure your agreement is legally sound in Mumbai.',
  keywords: [
    'Leave License Agreement Mistakes',
    'Common Mistakes Leave License',
    'Leave License Agreement Errors',
    'What to Avoid Leave License Agreement',
    'Mumbai',
  ],
  openGraph: {
    title: 'Common Mistakes to Avoid in Leave and License Agreement',
    description: 'Avoid costly mistakes when drafting your Leave and License Agreement.',
    url: 'https://legalsaathi.com/blogs/common-mistakes-leave-license-agreement',
    type: 'article',
    publishedTime: '2025-01-03T00:00:00+05:30',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/common-mistakes-leave-license-agreement',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Common Mistakes to Avoid in Leave and License Agreement"
        description="Avoid costly mistakes when drafting your Leave and License Agreement. Learn from common errors and ensure your agreement is legally sound."
        datePublished="2025-01-03T00:00:00+05:30"
        author={{ name: 'Your Legal Saathi', url: 'https://legalsaathi.com' }}
        publisher={{ name: 'Your Legal Saathi' }}
      />
      {children}
    </>
  )
}

