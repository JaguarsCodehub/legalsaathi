import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Blogs | Leave License Agreement Guides & Articles - Your Legal Saathi',
  description: 'Expert legal blogs and guides on Leave License Agreement, Rent Agreement, property registration in Mumbai. Learn about Leave and License Agreement registration process, essential clauses, benefits, and common mistakes to avoid.',
  keywords: [
    'Leave License Agreement Blog',
    'Rent Agreement Articles',
    'Legal Documentation Guides',
    'Property Registration Blog',
    'Leave and License Agreement Information',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Legal Blogs | Leave License Agreement Guides - Your Legal Saathi',
    description: 'Expert legal blogs and guides on Leave License Agreement, Rent Agreement, property registration in Mumbai.',
    url: 'https://legalsaathi.com/blogs',
    siteName: 'Your Legal Saathi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Blogs | Your Legal Saathi',
    description: 'Expert legal blogs and guides on Leave License Agreement, Rent Agreement, property registration.',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/blogs',
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

