import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Leave License Agreement Registration Mumbai | Your Legal Saathi',
  description: 'Contact Your Legal Saathi for Leave License Agreement, Rent Agreement registration in Mumbai, Maharashtra. Get free consultation, doorstep service, expert legal documentation. Call +91 96531 01966 or email legalsaathi2000@gmail.com',
  keywords: [
    'Contact Legal Services Mumbai',
    'Leave License Agreement Contact',
    'Rent Agreement Registration Contact',
    'Legal Documentation Mumbai',
    'Property Registration Contact',
    'Mumbai',
    'Maharashtra',
    'Andheri',
  ],
  openGraph: {
    title: 'Contact Us - Leave License Agreement Registration Mumbai | Your Legal Saathi',
    description: 'Contact Your Legal Saathi for Leave License Agreement, Rent Agreement registration in Mumbai. Get free consultation, doorstep service.',
    url: 'https://legalsaathi.com/contact',
    siteName: 'Your Legal Saathi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Your Legal Saathi',
    description: 'Contact Your Legal Saathi for Leave License Agreement, Rent Agreement registration in Mumbai.',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

