import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ServiceStructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'Lease Agreement Registration Mumbai | Commercial & Residential Lease - Your Legal Saathi',
  description: 'Professional Lease Agreement registration in Mumbai for commercial and residential properties. Expert legal documentation, doorstep service, authorized by Govt of Maharashtra.',
  keywords: [
    'Lease Agreement',
    'Lease Agreement Mumbai',
    'Lease Agreement Registration',
    'Commercial Lease Agreement',
    'Residential Lease Agreement',
    'Lease Agreement Registration Mumbai',
    'Property Lease Agreement',
    'Mumbai',
    'Maharashtra',
  ],
  openGraph: {
    title: 'Lease Agreement Registration Mumbai | Commercial & Residential Lease',
    description: 'Professional Lease Agreement registration in Mumbai for commercial and residential properties. Expert legal documentation.',
    url: 'https://legalsaathi.com/services/lease-agreement',
    type: 'website',
  },
  alternates: {
    canonical: 'https://legalsaathi.com/services/lease-agreement',
  },
}

export default function LeaseAgreement() {
  return (
    <>
      <ServiceStructuredData
        serviceType="Lease Agreement Registration"
        description="Professional Lease Agreement registration services in Mumbai for commercial and residential properties with expert legal documentation and doorstep service."
        provider={{
          name: 'Your Legal Saathi',
          url: 'https://legalsaathi.com',
        }}
        areaServed="Mumbai"
      />
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />

        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-16 pb-24 overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                LEASE AGREEMENT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Lease Agreement Registration Mumbai
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed mb-8">
                Professional Lease Agreement registration services for commercial and residential properties in Mumbai. Expert legal documentation and doorstep service.
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

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is a Lease Agreement?</h2>
                <div className="h-1 w-16 bg-orange-600 mb-6"></div>
                <p className="text-zinc-700 leading-7 mb-4">
                  A Lease Agreement is a legal contract that transfers the right to use and occupy a property from the owner (lessor) to another party (lessee) for a specified period in exchange for periodic payments (lease rent).
                </p>
                <p className="text-zinc-700 leading-7 mb-4">
                  Lease Agreements are commonly used for commercial properties, long-term residential rentals, and properties where the lessee needs extended rights and protections.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Long-term property rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Ideal for commercial properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Strong legal protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-zinc-700">Transferable rights in some cases</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Lease Agreement Registration Process Mumbai - Your Legal Saathi"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Your Legal Saathi for Lease Agreement?</h2>
            <div className="h-1 w-16 bg-orange-600 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Commercial & Residential', desc: 'Expertise in both types of leases', icon: '🏢' },
                { title: 'Authorized Service Provider', desc: 'ASP approved by Govt of Maharashtra', icon: '✅' },
                { title: 'Expert Legal Team', desc: 'Experienced professionals', icon: '👨‍⚖️' },
                { title: 'Doorstep Service', desc: 'Convenient at your location', icon: '🚪' },
                { title: 'Transparent Pricing', desc: 'No hidden charges', icon: '💰' },
                { title: 'Fast Processing', desc: 'Quick registration', icon: '⚡' },
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

        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Register Your Lease Agreement?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started today with our professional service. Contact us for a free consultation!
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

        <Footer />
      </div>
    </>
  )
}

