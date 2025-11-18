import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Your Legal Saathi? | Authorized Service Provider Mumbai',
  description: 'Why choose Your Legal Saathi for Leave License Agreement and Rent Agreement registration? Authorized Service Provider (ASP) approved by Govt of Maharashtra. Doorstep service, transparent pricing, expert legal team, 12,500+ documents processed.',
  keywords: [
    'Why Choose Legal Saathi',
    'Authorized Service Provider Mumbai',
    'ASP Approved Legal Services',
    'Best Leave License Agreement Service',
    'Trusted Rent Agreement Registration',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Why Choose Your Legal Saathi? | Authorized Service Provider Mumbai',
    description: 'Authorized Service Provider (ASP) approved by Govt of Maharashtra. Doorstep service, transparent pricing, expert legal team.',
    url: 'https://legalsaathi.com/why-choose-us',
    siteName: 'Your Legal Saathi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Your Legal Saathi?',
    description: 'Authorized Service Provider (ASP) approved by Govt of Maharashtra. Doorstep service, transparent pricing.',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/why-choose-us',
  },
}

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

