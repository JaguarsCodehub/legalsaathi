import { Metadata } from 'next'
import { ArticleStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Leave and License Agreement Registration Process in Mumbai | Step-by-Step Guide',
  description: 'Step-by-step guide to registering your Leave and License Agreement in Mumbai. Learn about required documents, fees, and the complete registration process.',
  keywords: [
    'Leave License Registration Process',
    'How to Register Leave License Agreement Mumbai',
    'Leave License Registration Steps',
    'Leave License Registration Documents',
    'Mumbai',
  ],
  openGraph: {
    title: 'Leave and License Agreement Registration Process in Mumbai',
    description: 'Step-by-step guide to registering your Leave and License Agreement in Mumbai.',
    url: 'https://legalsaathi.com/blogs/leave-license-registration-process',
    type: 'article',
    publishedTime: '2025-01-08T00:00:00+05:30',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs/leave-license-registration-process',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Leave and License Agreement Registration Process in Mumbai"
        description="Step-by-step guide to registering your Leave and License Agreement in Mumbai. Learn about required documents, fees, and the complete process."
        datePublished="2025-01-08T00:00:00+05:30"
        author={{ name: 'Your Legal Saathi', url: 'https://legalsaathi.com' }}
        publisher={{ name: 'Your Legal Saathi' }}
      />
      {children}
    </>
  )
}

