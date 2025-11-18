import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Services Mumbai | Agreement for Sale, Sale Deed, Will, Power of Attorney - Your Legal Saathi',
  description: 'Comprehensive legal services in Mumbai: Agreement for Sale, Sale Deed, Will, Release Deed, Gift Deed, Notary, Power of Attorney. Expert legal documentation and registration services. Authorized Service Provider (ASP) approved by Govt of Maharashtra.',
  keywords: [
    'Agreement for Sale',
    'Sale Deed',
    'Will Registration',
    'Release Deed',
    'Gift Deed',
    'Notary Services',
    'Power of Attorney',
    'Legal Services Mumbai',
    'Property Documentation',
    'Real Estate Legal Services',
    'Document Registration Mumbai',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Legal Services Mumbai | Agreement for Sale, Sale Deed, Will - Your Legal Saathi',
    description: 'Comprehensive legal services in Mumbai: Agreement for Sale, Sale Deed, Will, Release Deed, Gift Deed, Notary, Power of Attorney.',
    url: 'https://legalsaathi.com/services',
    siteName: 'Your Legal Saathi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Services Mumbai | Your Legal Saathi',
    description: 'Comprehensive legal services: Agreement for Sale, Sale Deed, Will, Release Deed, Gift Deed, Notary, Power of Attorney.',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

