"use client";

import Image from "next/image";
import Link from "next/link";
import QuoteForm from "../components/QuoteForm";
import ScrollAnimate from "../components/ScrollAnimate";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      value: "+91 96531 01966",
      href: "tel:+919653101966",
      icon: "📞",
      desc: "Call us for immediate assistance",
    },
    {
      title: "Alternate Phone",
      value: "+91 96370 45108",
      href: "tel:+919637045108",
      icon: "📱",
      desc: "Alternative contact number",
    },
    {
      title: "Email",
      value: "legalsaathi2000@gmail.com",
      href: "mailto:legalsaathi2000@gmail.com",
      icon: "✉️",
      desc: "Send us an email anytime",
    },
    {
      title: "Address",
      value: "Sakinaka, Andheri (E), Mumbai - 400072, Maharashtra",
      href: "#",
      icon: "📍",
      desc: "Visit our office",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
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
                CONTACT US
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h1>
              <p className="text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                Need documentation help? Fill up the form below or contact us directly. We're here to help you with all your real estate legal documentation needs.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Form Section - Right after Hero */}
      <section className="bg-zinc-50 py-16 -mt-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <ScrollAnimate direction="left" delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200">
                <h2 className="text-3xl font-bold mb-2">Get Free Quote</h2>
                <div className="h-1 w-16 bg-orange-600 mb-6"></div>
                <p className="text-zinc-600 mb-8">
                  Fill up the form below to book your appointment or get a free consultation. We'll get back to you within 24 hours.
                </p>
                <QuoteForm />
              </div>
            </ScrollAnimate>

            {/* Additional Info */}
            <ScrollAnimate direction="right" delay={200}>
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">🕐</span>
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
                        <span className="font-medium text-zinc-900">{schedule.day}</span>
                        <span className="text-orange-600 font-semibold">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map/Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Office location"
                    width={1200}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-2">Visit Our Office</h4>
                      <p className="text-sm text-white/90">
                        Sakinaka, Andheri (E), Mumbai - 400072, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-white/90 mb-6">
                    For urgent queries or immediate help, call us directly. Our team is ready to assist you.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+919653101966"
                      className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:scale-105 transform"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919653101966?text=Hello%2C%20I'm%20interested%20to%20know%20more%20about%20you%20%21"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:scale-105 transform"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 100}>
                <a
                  href={info.href}
                  className="group relative rounded-2xl bg-white p-6 border-2 border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/50 group-hover:to-amber-50/50 transition-all duration-300 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="h-16 w-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-zinc-900">{info.title}</h3>
                    <p className="text-zinc-600 text-sm leading-6 mb-1">{info.desc}</p>
                    <p className="text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                </a>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12 text-center border-2 border-orange-200">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900">
                Why Choose Your Legal Saathi?
              </h2>
              <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto">
                We are Authorized Service Provider (ASP) approved by Department of Registration and Stamps, Government of Maharashtra. Get expert legal assistance for all your real estate documentation needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/why-choose-us" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:scale-105 transform">
                  Learn More
                </Link>
                <Link href="/services" className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg hover:scale-105 transform">
                  View Services
                </Link>
              </div>
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
