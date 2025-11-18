import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ServiceStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Leave License Agreement Registration Mumbai | Online Doorstep Service ₹999 - Your Legal Saathi',
  description: 'Professional Leave License Agreement registration in Mumbai. Doorstep biometric service, online police NOC, expert legal documentation. Authorized Service Provider (ASP) approved by Govt of Maharashtra. Starting at ₹999 only.',
  keywords: [
    'Leave License Agreement',
    'Leave and License Agreement',
    'Leave License Agreement Mumbai',
    'Leave License Agreement Registration',
    'Online Leave License Agreement',
    'Leave License Registration Mumbai',
    'Leave License Agreement Doorstep Service',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Leave License Agreement Registration Mumbai | Online Doorstep Service ₹999',
    description: 'Professional Leave License Agreement registration in Mumbai. Doorstep biometric service, online police NOC, expert legal documentation.',
    url: 'https://legalsaathi.com/services/leave-license-agreement',
    type: 'website',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/services/leave-license-agreement',
  },
}

export default function LeaveLicenseAgreement() {
  return (
    <>
      <ServiceStructuredData
        serviceType="Leave License Agreement Registration"
        description="Professional Leave License Agreement registration services in Mumbai with doorstep biometric service, online police NOC, and expert legal documentation."
        provider={{
          name: 'Your Legal Saathi',
          url: 'https://legalsaathi.com',
        }}
        areaServed="Mumbai"
      />
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-16 pb-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                LEAVE LICENSE AGREEMENT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Leave License Agreement Registration Mumbai
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed mb-8">
                Professional Leave License Agreement registration services with doorstep biometric verification, online police NOC, and expert legal documentation. Starting at ₹999 only.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:scale-105 transform">
                  Get Started Now
                </Link>
                <a href="tel:+919653101966" className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:scale-105 transform">
                  Call +91 96531 01966
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Leave License Agreement */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is Leave License Agreement?</h2>
                <div className="h-1 w-16 bg-orange-600 mb-6"></div>
                <p className="text-zinc-700 leading-7 mb-4">
                  A Leave License Agreement is a legal document that allows a property owner (licensor) to grant permission to another person (licensee) to use and occupy the property for a specific period. Unlike a rent agreement, it doesn't create tenancy rights, making it easier to terminate.
                </p>
                <p className="text-zinc-700 leading-7 mb-4">
                  This type of agreement is commonly used in Mumbai and Maharashtra for residential and commercial property rentals, especially for shorter durations or when the property owner wants more flexibility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">No tenancy rights created</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Easier termination process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Ideal for short-term rentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Legal protection for both parties</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Leave License Agreement Registration Process Mumbai - Your Legal Saathi"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Your Legal Saathi?</h2>
              <div className="h-1 w-16 bg-orange-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authorized Service Provider',
                  desc: 'ASP approved by Department of Registration and Stamps, Government of Maharashtra',
                  icon: '✅',
                },
                {
                  title: 'Doorstep Service',
                  desc: 'Biometric verification and document collection at your location',
                  icon: '🚪',
                },
                {
                  title: 'Online Police NOC',
                  desc: 'Included with every agreement registration',
                  icon: '🛡️',
                },
                {
                  title: 'Expert Legal Team',
                  desc: 'Experienced professionals handling your documentation',
                  icon: '👨‍⚖️',
                },
                {
                  title: 'Transparent Pricing',
                  desc: 'Starting at ₹999 with no hidden charges',
                  icon: '💰',
                },
                {
                  title: 'Fast Processing',
                  desc: 'Complete registration in 3-7 working days',
                  icon: '⚡',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-zinc-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Simple Process</h2>
              <div className="h-1 w-16 bg-orange-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Share Details', desc: 'Provide property and party details' },
                { step: '02', title: 'Drafting', desc: 'Our experts prepare the agreement' },
                { step: '03', title: 'Verification', desc: 'Review and approve the draft' },
                { step: '04', title: 'Registration', desc: 'Biometric verification and registration' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Register Your Leave License Agreement?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started today with our hassle-free doorstep service. Contact us for a free consultation!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:scale-105 transform">
                Get Free Quote
              </Link>
              <a href="tel:+919653101966" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors shadow-lg hover:scale-105 transform">
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4">
            <h3 className="text-2xl font-bold mb-6 text-center">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blogs/what-is-leave-and-license-agreement" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-orange-600">What is Leave License Agreement?</h4>
                <p className="text-zinc-600 text-sm">Complete guide to understanding Leave License Agreements</p>
              </Link>
              <Link href="/blogs/leave-license-registration-process" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-orange-600">Registration Process</h4>
                <p className="text-zinc-600 text-sm">Step-by-step guide to registration</p>
              </Link>
              <Link href="/blogs/essential-clauses-leave-license-agreement" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2 text-orange-600">Essential Clauses</h4>
                <p className="text-zinc-600 text-sm">Important clauses you must know</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

