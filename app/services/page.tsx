"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimate from "../components/ScrollAnimate";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Agreement for Sale",
      desc: "Comprehensive agreement for sale documentation for real estate transactions. Get legally binding contracts drafted and registered with expert legal guidance for property sales. We ensure all terms and conditions are clearly defined and protect both buyer and seller interests.",
      image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "📄",
      features: ["Complete legal documentation", "Government registration", "Expert legal review", "Title verification"],
    },
    {
      title: "Sale Deed",
      desc: "Professional sale deed registration services with complete legal documentation. We handle sale deed preparation and registration for residential and commercial properties with doorstep service. Our deeds are compliant with all state regulations and protect both buyer and seller rights.",
      image: "https://images.pexels.com/photos/3797239/pexels-photo-3797239.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "🏠",
      features: ["Residential & commercial", "Doorstep service", "Fast processing", "Legal compliance"],
    },
    {
      title: "Will",
      desc: "Expert will drafting and registration services approved by Government of Maharashtra. We ensure your assets are distributed according to your wishes with legally sound documentation. Our team handles all paperwork, verification, and ensures timely completion of registration.",
      image: "https://images.pexels.com/photos/7710168/pexels-photo-7710168.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "📜",
      features: ["Government authorized", "Complete documentation", "Timely processing", "Expert assistance"],
    },
    {
      title: "Release Deed",
      desc: "Complete release deed documentation services for property transactions. We provide comprehensive legal documentation support for releasing property rights and interests. Our legal experts ensure all documents are accurate, compliant, and protect your interests.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "✍️",
      features: ["Expert drafting", "Legal review", "Custom solutions", "Fast turnaround"],
    },
    {
      title: "Gift Deed",
      desc: "Professional gift deed registration services for property gifting. We help transfer property ownership through legal gift deeds with proper documentation and registration. Our comprehensive process ensures you make informed decisions for property transfers.",
      image: "https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "🎁",
      features: ["Title verification", "Ownership transfer", "Legal compliance", "Expert guidance"],
    },
    {
      title: "Notary",
      desc: "Authorized notary services for all your legal document attestation needs. We provide notarization services for various documents with expert legal verification. We make it possible to get your documents notarized with proper authentication.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "🔖",
      features: ["Document attestation", "Legal verification", "Fast processing", "Authorized service"],
    },
    {
      title: "Power of Attorney",
      desc: "Complete power of attorney documentation services for property transactions and other legal matters. We draft and register power of attorney documents with expert guidance. Our comprehensive documentation ensures all legal requirements are met.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "⚖️",
      features: ["Expert drafting", "Legal compliance", "Registration support", "Comprehensive service"],
    },
  ];

  const processSteps = [
    { number: "01", title: "Contact Us", desc: "Reach out through phone, email, or WhatsApp to discuss your requirements" },
    { number: "02", title: "Consultation", desc: "Our expert team will consult with you and explain the complete process" },
    { number: "03", title: "Document Collection", desc: "Provide required documents - we'll guide you through everything" },
    { number: "04", title: "Draft Preparation", desc: "Our legal experts prepare and review all documentation" },
    { number: "05", title: "Biometric Verification", desc: "Schedule convenient appointment for biometric verification" },
    { number: "06", title: "Registration", desc: "Complete registration and receive your verified documents" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                OUR SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Our Core Services
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                Complete Real Estate Documentation & Legal Services for Your Property Needs
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ScrollAnimate key={service.title} direction="up" delay={index * 150}>
                <div className="group relative rounded-3xl overflow-hidden bg-white border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-3">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/50 group-hover:to-amber-50/50 transition-all duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} Services Mumbai - Expert Legal Documentation and Registration by Your Legal Saathi`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 h-14 w-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-orange-200">
                      {service.icon}
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 h-10 w-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 bg-white">
                    <h3 className="font-bold text-2xl mb-4 text-zinc-900 group-hover:text-orange-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 leading-7 mb-6 text-base">
                      {service.desc}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                          <span className="text-orange-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Read More Button */}
                    <Link href="/contact" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 hover:gap-3 transition-all duration-300 group/btn">
                      <span>Get Started</span>
                      <svg 
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                How We Serve You
              </h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
                Simple, transparent, and efficient process for all your documentation needs
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <div className="h-1 w-12 bg-orange-600"></div>
                <div className="h-1 w-8 bg-amber-600"></div>
              </div>
            </div>
          </ScrollAnimate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 100}>
                <div className="relative rounded-xl bg-zinc-50 border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-zinc-600 text-sm leading-6">{step.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollAnimate direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Help with Documentation?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert assistance for all your real estate legal documentation needs. Contact us today for a free consultation!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group relative rounded-lg bg-white text-orange-600 px-8 py-4 font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                Get Free Quote
              </Link>
              <a href="tel:+919653101966" className="group relative rounded-lg bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                Call Us Now
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919653101966?text=Hello%2C%20I'm%20interested%20to%20know%20more%20about%20you%20%21"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-40"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
