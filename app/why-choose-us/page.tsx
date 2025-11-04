"use client";

import Image from "next/image";
import Link from "next/link";
import Accordion from "../components/Accordion";
import ScrollAnimate from "../components/ScrollAnimate";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WhyChooseUs() {
  const whyChooseItems = [
    {
      title: "Legal Experts",
      content: "Our team of experienced legal experts at LegalSaathi provides you with comprehensive assistance to make your registration process easier and more efficient. With years of experience in real estate documentation, we ensure all your legal documents are prepared accurately and in compliance with government regulations.",
    },
    {
      title: "Doorstep Services",
      content: "We provide convenient doorstep services at various locations across India for your convenience. No need to visit multiple offices or wait in long queues. Our team comes to your location, handles all documentation, biometric verification, and ensures a smooth, hassle-free experience right at your doorstep.",
    },
    {
      title: "Transparent Pricing",
      content: "Our charges are very reasonable and as prescribed by the Government of Maharashtra. We believe in complete transparency - no hidden fees, no surprise charges. You'll know exactly what you're paying for upfront, with clear breakdowns of all costs involved in your documentation process.",
    },
    {
      title: "Biometric Assistance to Indians Overseas at Doorstep and Remotely",
      content: "We provide specialized assistance to Indians overseas and facilitate biometric verification in easy steps. Whether you're residing abroad or in a different state, we can arrange for biometric verification at your location or remotely, ensuring you can complete your property documentation without traveling back to Maharashtra.",
    },
    {
      title: "Easy & Hassle-Free Process",
      content: "We prepare your documents and execute the entire process in an easy, streamlined way without any hassle. From initial consultation to final document registration, we handle every step professionally. Our online tracking system keeps you updated on the progress of your documentation at all times.",
    },
    {
      title: "Flexible Payment Options",
      content: "We provide flexible payment options including UPI apps, Net Banking, Credit/Debit cards, and other convenient methods. Pay in installments or as per your convenience. We understand that property transactions can be financially significant, so we offer payment plans that work for you.",
    },
  ];

  const stats = [
    { value: "12,500+", label: "Legal Documents", icon: "📄" },
    { value: "8,200+", label: "Real Estate Transactions", icon: "🏠" },
    { value: "65+", label: "Cities Served", icon: "📍" },
    { value: "98%", label: "Client Satisfaction", icon: "⭐" },
  ];

  const benefits = [
    {
      title: "Government Authorized",
      desc: "Authorized Service Provider (ASP) approved by Department of Registration and Stamps, Government of Maharashtra",
      icon: "✅",
    },
    {
      title: "Technology-Driven",
      desc: "Combining technology with Government's latest e-initiative for faster and more efficient services",
      icon: "💻",
    },
    {
      title: "Pan-India Network",
      desc: "Serving clients across 65+ cities with our extensive network of professionals",
      icon: "🌐",
    },
    {
      title: "Expert Team",
      desc: "Dedicated team of legal experts and professionals committed to your success",
      icon: "👥",
    },
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
                WHY CHOOSE US
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Why Choose LegalSaathi?
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                Your trusted partner for real estate legal documentation. We combine expertise, technology, and personalized service to deliver exceptional results.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 100}>
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="mt-2 text-white/90 text-sm sm:text-base font-medium">{stat.label}</div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Accordion */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ScrollAnimate direction="left" delay={200}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Makes Us Different</h2>
                <div className="h-1 w-16 bg-orange-600 mb-6"></div>
                <p className="text-zinc-700 leading-7 mb-8">
                  At LegalSaathi, we go beyond just documentation. We provide comprehensive support, expert guidance, and personalized service to ensure your real estate transactions are smooth, legal, and stress-free.
                </p>
                <Accordion items={whyChooseItems} />
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="right" delay={300}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Professional services"
                    width={1200}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                OUR ADVANTAGES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                Why We Stand Out
              </h2>
              <div className="mt-6 flex justify-center gap-2">
                <div className="h-1 w-12 bg-orange-600"></div>
                <div className="h-1 w-8 bg-amber-600"></div>
              </div>
            </div>
          </ScrollAnimate>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 150}>
                <div className="group relative rounded-3xl bg-white p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/60 group-hover:to-amber-50/60 transition-all duration-500 pointer-events-none rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-zinc-900">{benefit.title}</h3>
                    <p className="text-zinc-600 leading-7 text-sm">{benefit.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a trusted, authorized service provider. Get your free quote today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group relative rounded-lg bg-white text-orange-600 px-8 py-4 font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                Get Free Quote
              </Link>
              <Link href="/services" className="group relative rounded-lg bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                View Our Services
              </Link>
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
