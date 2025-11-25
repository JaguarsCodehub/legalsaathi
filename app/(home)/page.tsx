"use client";

import Image from "next/image";
import Link from "next/link";
import QuoteForm from "../components/QuoteForm";
import Accordion from "../components/Accordion";
import AutoCarousel from "../components/AutoCarousel";
import ScrollAnimate from "../components/ScrollAnimate";
import Footer from "../components/Footer";
import { FAQStructuredData } from "../components/StructuredData";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whyChooseItems = [
    {
      title: "Legal Experts",
      content: "Team of legal experts at Your Legal Saathi provides you assistance to make your registration easier.",
    },
    {
      title: "Doorstep Services",
      content: "We provide doorstep services at various locations in India for your convenience.",
    },
    {
      title: "Transparent Pricing",
      content: "Charges are very reasonable and as prescribed by the Government of Maharashtra.",
    },
    {
      title: "Biometric Assistance to Indians Overseas at Doorstep and Remotely",
      content: "We provide assistance to the Indians overseas and get the biometric done in easy steps.",
    },
    {
      title: "Easy & Hassle-Free Process",
      content: "We prepare your documents and execute the process in an easy way without any hassle.",
    },
    {
      title: "Flexible Payment Options",
      content: "We provide flexible payment options like UPI apps, Net Banking & Others.",
    },
  ];

  const processSteps = [
    { number: "01", title: "Contact Us", desc: "You can contact us through email, WhatsApp, or over a phone call and register your need with us." },
    { number: "02", title: "Consulting", desc: "Our executive will call and consult you regarding your requirement and also explain the flowchart of our working." },
    { number: "03", title: "Providing Required Details", desc: "Once our executive will call and assist you, provide us required documents to get your draft done." },
    { number: "04", title: "Get Your Draft Done", desc: "Once we will get all documents, our executive will draft agreement and provide it to you for correction or if any alteration required." },
    { number: "05", title: "Fix Appointment", desc: "Once any alteration or correction is done, our executive will fix appointment for biometric verification." },
    { number: "06", title: "Get Registered Agreement", desc: "Once all the required process is done, you will receive registered copy of agreement either online or offline." },
  ];

  const testimonials = [
    {
      quote: "Brilliant and Hassle-Free! Got the rent agreement done quickly without any middleman. Your Legal Saathi is a perfect example of how technology can enable smooth process with government agencies. Kudos to the team!",
      author: "MR VINODRAJ THODDETTI",
      location: "MUMBAI",
    },
    {
      quote: "I own a flat at Mumbai and after retirement I am residing at Uttarakhand. It's really a great service that Your Legal Saathi is providing. I did everything at my own convenience. Biometric executive came to my home. Process was completed in weeks' time. I had great experience with them. Thanks!",
      author: "Mrs Geetanjali Gairola",
      location: "Uttarakhand",
    },
    {
      quote: "Team Your Legal Saathi is doing a fantastic job. My tenant was in Pune and for occupational purpose I am residing at Brisbane. They saved my hassle of travelling. The biometric device was sent to me and proper support was provided. Thank you saviours.",
      author: "Mr Domnic Pareirra",
      location: "Vasai - Currently at Brisbane",
    },
  ];

  const stats = [
    { value: "12,500+", label: "Legal Documents" },
    { value: "8,200+", label: "Real Estate Transactions" },
    { value: "65+", label: "Cities Served" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className='min-h-screen bg-white text-zinc-900'>
      {/* Top info bar */}
      <div className='hidden md:block text-sm bg-orange-600 text-white animate-fade-in'>
        <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
          <p className='flex items-center gap-2 text-white/90'>
            <span className='text-red-500'>📍</span>
            Sakinaka, Andheri (E), Mumbai - 400072, Maharashtra
          </p>
          <div className='flex items-center gap-6 text-white/90'>
            <a
              href='tel:+919653101966'
              className='hover:text-white transition-colors'
            >
              +91 96531 01966
            </a>
            <a
              href='mailto:legalsaathi2000@gmail.com'
              className='hover:text-white transition-colors'
            >
              legalsaathi2000@gmail.com
            </a>
            <span className='text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white'>
              GST: 27AxxxxxxxZ
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 h-16 flex items-center justify-between'>
          <Link
            href='#home'
            className='flex items-center gap-2 hover:opacity-80 transition-opacity'
          >
            <Image
              src='/logo.png'
              alt='Your Legal Saathi - Leave License Agreement Registration Mumbai, Rent Agreement Services'
              width={280}
              height={90}
              className='h-28 w-auto object-contain'
              priority
            />
          </Link>
          <nav className='hidden md:flex items-center gap-8 text-sm'>
            <a href='#home' className='text-orange-600 font-medium'>
              Home
            </a>
            <Link
              href='/services'
              className='hover:text-orange-600 transition-colors'
            >
              Services
            </Link>
            <a href='#how' className='hover:text-orange-600 transition-colors'>
              How It Works
            </a>
            <Link
              href='/blogs'
              className='hover:text-orange-600 transition-colors'
            >
              Our Blogs
            </Link>
            <Link
              href='/why-choose-us'
              className='hover:text-orange-600 transition-colors'
            >
              Why Choose Us
            </Link>
            <Link
              href='/contact'
              className='hover:text-orange-600 transition-colors'
            >
              Contact
            </Link>
          </nav>
          <Link
            href='/contact'
            className='hidden md:inline-flex rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:bg-orange-700 transition-colors'
          >
            Get Free Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        id='home'
        className='relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-8 overflow-hidden'
      >
        {/* Decorative background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float'></div>
          <div
            className='absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float'
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className='absolute -bottom-20 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float'
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        <div className='relative mx-auto max-w-7xl px-4'>
          <div className='py-16 lg:py-24'>
            <ScrollAnimate direction='up' delay={0}>
              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900'>
                  Hassle Free
                  <br />
                  <span className='text-orange-600'>Online Rent Agreement</span>
                  <br />
                  Registration.
                </h1>
                <p className='mt-6 text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed'>
                  Skip the queue and get your rent agreement registered in
                  no-time with Your Legal Saathi.
                </p>
                <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
                  <Link
                    href="https://wa.me/919653101966?text=Hello%2C%20I'm%20interested%20to%20know%20more%20about%20you%20%21"
                    className='group relative rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 font-semibold hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden'
                  >
                    <span className='relative z-10'>Draft your document</span>
                    <div className='absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100'></div>
                  </Link>
                  <a
                    href='#how'
                    className='group text-orange-700 font-semibold hover:text-orange-800 transition-all flex items-center gap-2'
                  >
                    <span>How it works</span>
                    <svg
                      className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 text-white py-16 relative overflow-hidden'>
        {/* Decorative pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className='relative mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <ScrollAnimate key={index} direction='up' delay={index * 100}>
                <div className='text-center group relative'>
                  <div className='absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform'>
                    <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                      {stat.value}
                    </div>
                    <div className='mt-2 text-white/90 text-sm sm:text-base font-medium'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Steps - Simplified for Hero */}
      <section
        id='how'
        className='bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 relative overflow-hidden py-16'
      >
        <div className='mx-auto max-w-7xl px-4'>
          <ScrollAnimate direction='up' delay={0}>
            <div className='text-center'>
              <span className='inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4'>
                SIMPLE & EFFICIENT PROCESS
              </span>
              <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent'>
                How it works with Your Legal Saathi?
              </h2>
              <p className='mt-4 text-lg text-zinc-600 max-w-2xl mx-auto'>
                Complete your Real Estate documentation in just 4 simple steps
              </p>
              <div className='mt-6 flex justify-center gap-2'>
                <div className='h-1 w-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full'></div>
                <div className='h-1 w-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full'></div>
              </div>
            </div>
          </ScrollAnimate>
          <div className='mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 px-2'>
            {[
              {
                title: 'Form Filling & Drafting',
                icon: '✍️',
                stepNumber: '01',
                description:
                  'You customize our template contract with all the necessary information to meet your needs, then submit the required document.',
              },
              {
                title: 'Payment & Verification',
                icon: '💳',
                stepNumber: '02',
                description:
                  'Once your draft is ready your data is processed and checked for any errors and further you are asked for the necessary payments for further processing.',
              },
              {
                title: 'Appointment for bio-metric',
                icon: '🪪',
                stepNumber: '03',
                description:
                  'An appointment is scheduled at your place and at your convenience for the bio-metric and documents verification for further processing.',
              },
              {
                title: 'Agreement is Registered!',
                icon: '✅',
                stepNumber: '04',
                description:
                  'The draft and information provided is processed for agreement registration & within 3-4 days you get a soft copy of registered agreement via email.',
              },
            ].map((card, index) => (
              <ScrollAnimate
                key={card.title}
                direction='up'
                delay={index * 150}
              >
                <div className='relative group flex justify-center'>
                  {/* Modern Card Design - Bigger */}
                  <div className='relative w-full rounded-3xl bg-white p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-300 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-amber-50 min-h-[380px] flex flex-col justify-between'>
                    {/* Decorative accent on hover */}
                    <div className='absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/60 group-hover:to-amber-50/60 transition-all duration-500 pointer-events-none'></div>

                    {/* Step number badge - Smaller, fits in card */}
                    <div className='absolute top-3 left-1/2 -translate-x-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold shadow-xl ring-3 ring-white z-20 group-hover:scale-110 transition-transform duration-500'>
                      {card.stepNumber}
                    </div>

                    {/* Icon container - Bigger, with gradient */}
                    <div className='relative mx-auto mt-6 mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 text-5xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:border-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-100 group-hover:to-amber-100 group-hover:shadow-orange-200/50'>
                      <div className='relative z-10'>{card.icon}</div>
                    </div>

                    {/* Title - Better typography */}
                    <h3 className='relative z-10 font-bold text-xl sm:text-2xl text-zinc-900 leading-tight px-2 mb-4'>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className='relative z-10 text-xs sm:text-xs text-zinc-600 leading-relaxed px-2 mt-auto'>
                      {card.description}
                    </p>

                    {/* Arrow connector - Enhanced positioning */}
                    {index < 3 && (
                      <div className='hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-30'>
                        <div className='h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-orange-200 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-500'>
                          <svg
                            className='w-6 h-6 text-orange-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2.5}
                              d='M9 5l7 7-7 7'
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Bottom accent line - always visible */}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full group-hover:w-20 transition-all duration-500'></div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Carousel Section - Column Layout */}
      <section className='bg-white py-12 sm:py-16 overflow-x-hidden'>
        <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6'>
          <div className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center'>
            {/* Left Side - Text Content */}
            <ScrollAnimate
              direction='left'
              delay={0}
              className='w-full min-w-0'
            >
              <p className='text-xs sm:text-sm font-semibold text-orange-600 tracking-widest uppercase'>
                OUR SERVICES
              </p>
              <h2 className='mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight'>
                We Go Beyond Documentation
              </h2>
              <div className='mt-4 sm:mt-6 h-1 w-12 sm:w-16 bg-orange-600'></div>
              <p className='mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-zinc-600 leading-7 sm:leading-8'>
                Our approach combines technology with personalized service to
                provide comprehensive solutions for all your real estate
                documentation needs. We go beyond data to provide strategic
                recommendations and guidance.
              </p>
              <p className='mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-600 leading-7 sm:leading-8'>
                From descriptive to predictive and prescriptive, we provide the
                full spectrum of guidance you need to succeed. Our approach
                layers multiple methods to provide a richer, more comprehensive
                understanding of your needs.
              </p>
            </ScrollAnimate>

            {/* Right Side - Auto Carousel */}
            <ScrollAnimate
              direction='right'
              delay={200}
              className='w-full min-w-0'
            >
              <div className='w-full overflow-hidden'>
                <AutoCarousel
                  items={[
                    {
                      title: 'Conversational Approach',
                      description:
                        "Take your participants out of 'test taking mode' with a conversational approach. Make stronger, more authentic connections with clients by engaging them in a way that feels natural and personalized.",
                      icon: '💬',
                    },
                    {
                      title: 'Strategic Recommendations',
                      description:
                        'We go beyond data to provide strategic recommendations and guidance. Our approach layers multiple methods to provide a richer, more comprehensive understanding of your needs.',
                      icon: '📊',
                    },
                    {
                      title: 'Comprehensive Solutions',
                      description:
                        'From descriptive to predictive and prescriptive, we provide the full spectrum of guidance you need to succeed. Get end-to-end support for all your documentation requirements.',
                      icon: '🎯',
                    },
                    {
                      title: 'Doorstep Service',
                      description:
                        'Experience the convenience of doorstep service. Our team comes to you, making the entire process hassle-free. We handle everything from documentation to biometric verification at your location.',
                      icon: '🚪',
                    },
                  ]}
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* About & Services - Enhanced */}
      <section
        id='services'
        className='relative py-16 bg-gradient-to-b from-white to-orange-50/30'
      >
        <div className='mx-auto max-w-7xl px-4'>
          <ScrollAnimate direction='up' delay={0}>
            <div className='text-center mb-16'>
              <span className='inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4'>
                COMPREHENSIVE LEGAL SERVICES
              </span>
              <h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent'>
                Our Core Services
              </h2>
              <p className='mt-4 text-lg text-zinc-600 max-w-2xl mx-auto'>
                Complete Real Estate Documentation & Legal Services for Your
                Property Needs
              </p>
              <div className='mt-6 flex justify-center gap-2'>
                <div className='h-1 w-12 bg-orange-600'></div>
                <div className='h-1 w-8 bg-amber-600'></div>
              </div>
            </div>
          </ScrollAnimate>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
            {[
              {
                title: 'Agreement for Sale',
                desc: 'Comprehensive agreement for sale documentation for real estate transactions. Get legally binding contracts drafted and registered with expert legal guidance for property sales.',
                image:
                  'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '📄',
              },
              {
                title: 'Sale Deed',
                desc: 'Professional sale deed registration services with complete legal documentation. We handle sale deed preparation and registration for residential and commercial properties with doorstep service.',
                image:
                  'https://images.pexels.com/photos/3797239/pexels-photo-3797239.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🏠',
              },
              {
                title: 'Will',
                desc: 'Expert will drafting and registration services. We ensure your assets are distributed according to your wishes with legally sound documentation approved by Government of Maharashtra.',
                image:
                  'https://images.pexels.com/photos/7710168/pexels-photo-7710168.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '📜',
              },
              {
                title: 'Release Deed',
                desc: 'Complete release deed documentation services for property transactions. We provide comprehensive legal documentation support for releasing property rights and interests.',
                image:
                  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '✍️',
              },
              {
                title: 'Gift Deed',
                desc: 'Professional gift deed registration services for property gifting. We help transfer property ownership through legal gift deeds with proper documentation and registration.',
                image:
                  'https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🎁',
              },
              {
                title: 'Notary',
                desc: 'Authorized notary services for all your legal document attestation needs. We provide notarization services for various documents with expert legal verification.',
                image:
                  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🔖',
              },
              {
                title: 'Power of Attorney',
                desc: 'Complete power of attorney documentation services. We draft and register power of attorney documents for property transactions and other legal matters with expert guidance.',
                image:
                  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '⚖️',
              },
            ].map((service, index) => (
              <ScrollAnimate
                key={service.title}
                direction='up'
                delay={index * 150}
              >
                <div className='group relative rounded-3xl overflow-hidden bg-white border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-3'>
                  {/* Gradient background on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/50 group-hover:to-amber-50/50 transition-all duration-500'></div>

                  {/* Image Container with Overlay */}
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={service.image}
                      alt={`${service.title} Services Mumbai - Legal Documentation and Registration by Your Legal Saathi`}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    {/* Icon Badge */}
                    <div className='absolute top-4 left-4 h-14 w-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-orange-200'>
                      {service.icon}
                    </div>

                    {/* Floating Badge */}
                    <div className='absolute top-4 right-4 h-10 w-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse-glow'>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative p-8 bg-white'>
                    <h3 className='font-bold text-2xl mb-4 text-zinc-900 group-hover:text-orange-700 transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-zinc-600 leading-7 mb-6 text-base'>
                      {service.desc}
                    </p>

                    {/* Read More Button - Enhanced */}
                    <button className='inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 hover:gap-3 transition-all duration-300 group/btn'>
                      <span>Learn More</span>
                      <svg
                        className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2.5}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className='absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* About Your Legal Saathi */}
      <section className='bg-gradient-to-b from-white to-orange-50/20 py-16'>
        <div className='mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center'>
          <ScrollAnimate direction='left' delay={0}>
            <p className='text-sm font-semibold text-orange-700 tracking-widest uppercase'>
              AUTHORISED SERVICE PROVIDER (ASP)
            </p>
            <h2 className='mt-2 text-3xl sm:text-4xl font-bold'>
              About Your Legal Saathi
            </h2>
            <div className='mt-4 h-1 w-16 bg-orange-600'></div>
            <p className='mt-6 text-zinc-700 leading-7'>
              We are a group of professionals who work to simplify legal
              documentation.
            </p>
            <p className='mt-4 text-zinc-700 leading-7'>
              We combine technology with Government&apos;s latest e-initiative
              technology and documentation services to clients at the best rates
              in market. We bring numerous Government services under one roof &
              simplify them in a manner that a common man can understand.
            </p>
          </ScrollAnimate>
          <ScrollAnimate direction='right' delay={200}>
            <div className='relative'>
              <Image
                src='https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='Authorized Service Provider (ASP) for Leave License Agreement and Rent Agreement Registration in Mumbai, Maharashtra'
                width={1200}
                height={1000}
                className='rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform'
              />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Registration Made Simple */}
      <section className='bg-gradient-to-b from-orange-50/30 to-white py-16'>
        <div className='mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center'>
          <ScrollAnimate
            direction='right'
            delay={0}
            className='relative order-2 lg:order-1'
          >
            <Image
              src='https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt='Professional Legal Team for Leave License Agreement Registration and Real Estate Documentation Services in Mumbai'
              width={1200}
              height={1000}
              className='rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform'
            />
          </ScrollAnimate>
          <ScrollAnimate
            direction='left'
            delay={200}
            className='order-1 lg:order-2'
          >
            <p className='text-sm font-semibold text-orange-600 tracking-widest uppercase'>
              REGISTRATION MADE SIMPLE.
            </p>
            <h2 className='mt-4 text-3xl sm:text-4xl font-bold leading-tight'>
              Convenient, secure, reliable & time-saving.
            </h2>
            <div className='mt-4 h-1 w-16 bg-orange-600'></div>
            <p className='mt-6 text-zinc-700 leading-7'>
              At Your Legal Saathi, with our pan-India network and
              government-approved service provider certifications, we provide
              online registration services with doorstep assistance for KYC &
              documentation. We use cutting-edge technology to streamline
              processes and new e-initiatives offered by the government to make
              all legal processes simple and accessible for our clients from the
              comfort of their home.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Why Choose Us with Accordion */}
      <section id='why-choose' className='bg-zinc-50 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <ScrollAnimate direction='up' delay={0}>
            <div className='text-center mb-12'>
              <p className='text-sm font-semibold text-orange-700 tracking-widest uppercase'>
                WE ARE THE BEST!!
              </p>
              <h2 className='mt-2 text-3xl sm:text-4xl font-bold'>
                Why Choose Your Legal Saathi?
              </h2>
              <div className='mt-4 h-1 w-16 bg-orange-600 mx-auto'></div>
            </div>
          </ScrollAnimate>
          <div className='grid lg:grid-cols-2 gap-10'>
            <ScrollAnimate direction='left' delay={200}>
              <Accordion items={whyChooseItems} />
            </ScrollAnimate>
            <ScrollAnimate direction='right' delay={300}>
              <div className='relative'>
                <Image
                  src='https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200'
                  alt='Expert Legal Services for Leave License Agreement, Rent Agreement Registration, and Property Documentation in Mumbai'
                  width={1200}
                  height={1000}
                  className='rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform'
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Process Section - 6 Steps */}
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <ScrollAnimate direction='up' delay={0}>
            <div className='text-center mb-12'>
              <p className='text-sm font-semibold text-orange-700 tracking-widest uppercase'>
                OUR PROCESS
              </p>
              <h2 className='mt-2 text-3xl sm:text-4xl font-bold'>
                Our Process to Serve You Better
              </h2>
              <div className='mt-4 h-1 w-16 bg-orange-600 mx-auto'></div>
            </div>
          </ScrollAnimate>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {processSteps.map((step, index) => (
              <ScrollAnimate key={index} direction='up' delay={index * 100}>
                <div className='relative rounded-xl bg-zinc-50 border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
                  <div className='absolute -top-4 -left-4 h-12 w-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform'>
                    {step.number}
                  </div>
                  <h3 className='mt-4 font-bold text-lg mb-3'>{step.title}</h3>
                  <p className='text-zinc-600 text-sm leading-6'>{step.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='bg-zinc-50 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <ScrollAnimate direction='up' delay={0}>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl font-bold'>
                What Our Customers Say
              </h2>
              <div className='mt-4 h-1 w-16 bg-orange-600 mx-auto'></div>
            </div>
          </ScrollAnimate>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <ScrollAnimate key={index} direction='up' delay={index * 150}>
                <div className='bg-white rounded-xl p-6 border border-zinc-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
                  <div className='text-4xl text-orange-600 mb-4'>&ldquo;</div>
                  <p className='text-zinc-700 leading-7 mb-6 italic'>
                    {testimonial.quote}
                  </p>
                  <div className='border-t border-zinc-200 pt-4'>
                    <p className='font-bold text-zinc-900'>
                      {testimonial.author}
                    </p>
                    <p className='text-sm text-zinc-600'>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Get Free Quote */}
      <section id='quote' className='bg-white py-16 relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center'>
          <ScrollAnimate direction='left' delay={0}>
            <div className='text-zinc-900'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
                Get Free Quote
              </h2>
              <div className='h-1 w-16 bg-orange-600 mb-6'></div>
              <p className='text-zinc-600 leading-7 mb-6'>
                Need Documenting Experts For Your Agreement? Fill up the form
                below to book your appointment.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center gap-4 hover:translate-x-2 transition-transform duration-300'>
                  <div className='h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white'>
                    📞
                  </div>
                  <div>
                    <p className='font-semibold text-zinc-900'>Call Now</p>
                    <a
                      href='tel:+919653101966'
                      className='text-zinc-600 hover:text-orange-600 transition-colors'
                    >
                      +91 96531 01966
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-4 hover:translate-x-2 transition-transform duration-300'>
                  <div className='h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white'>
                    ✉️
                  </div>
                  <div>
                    <p className='font-semibold text-zinc-900'>Email Us</p>
                    <a
                      href='mailto:legalsaathi2000@gmail.com'
                      className='text-zinc-600 hover:text-orange-600 transition-colors'
                    >
                      legalsaathi2000@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction='right' delay={200}>
            <div className='bg-zinc-50 rounded-xl p-8 shadow-xl border border-zinc-200'>
              <QuoteForm />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />

      {/* FAQ Schema for SEO - Hidden, only for structured data */}
      <FAQStructuredData
        questions={[
          {
            question: 'What is a Leave License Agreement?',
            answer:
              "A Leave License Agreement is a legal document that allows a property owner (licensor) to grant permission to another person (licensee) to use and occupy the property for a specific period. Unlike a rent agreement, it doesn't create a tenancy right and is easier to terminate.",
          },
          {
            question: 'How to register Leave License Agreement in Mumbai?',
            answer:
              'To register a Leave License Agreement in Mumbai, you need to: 1) Prepare the agreement document with all required details, 2) Gather necessary documents (ID proof, address proof, property documents), 3) Book an appointment for biometric verification, 4) Pay the registration fees, 5) Complete biometric verification at the sub-registrar office or through doorstep service. Your Legal Saathi provides complete assistance for this process.',
          },
          {
            question:
              'What is the difference between Leave License Agreement and Rent Agreement?',
            answer:
              'The main difference is that a Leave License Agreement grants a license to use the property without creating tenancy rights, making it easier to terminate. A Rent Agreement creates a landlord-tenant relationship with stronger tenant rights. Leave License Agreements are preferred for shorter durations and commercial properties.',
          },
          {
            question:
              'What documents are required for Leave License Agreement registration?',
            answer:
              'Required documents include: ID proof (Aadhaar, PAN card, passport), address proof of both parties, property ownership documents, property tax receipts, NOC from society/association (if applicable), passport size photographs, and previous agreement (if renewal).',
          },
          {
            question:
              'How much does Leave License Agreement registration cost in Mumbai?',
            answer:
              'The registration cost varies based on the agreement value and stamp duty. Typically, it ranges from ₹500 to ₹2,000 for stamp duty plus registration fees. Your Legal Saathi offers complete Leave License Agreement registration services starting at ₹999, including online police NOC and doorstep biometric service.',
          },
          {
            question:
              'Can I register Leave License Agreement online in Mumbai?',
            answer:
              'Yes, you can initiate the process online, but physical biometric verification at the sub-registrar office or through authorized doorstep service is mandatory. Your Legal Saathi provides online document preparation and doorstep biometric service for your convenience.',
          },
          {
            question:
              'How long does it take to register a Leave License Agreement?',
            answer:
              "The registration process typically takes 3-7 working days after all documents are submitted and biometric verification is completed. With Your Legal Saathi's streamlined process and doorstep service, you can complete registration faster.",
          },
          {
            question: 'Is Leave License Agreement mandatory in Mumbai?',
            answer:
              'While not always legally mandatory, registering a Leave License Agreement is highly recommended as it provides legal protection to both parties, helps with police verification, and is required for various official purposes like opening bank accounts, getting gas connections, etc.',
          },
        ]}
      />

      {/* Sticky WhatsApp Bar - Mobile Only */}
      <a
        href="https://wa.me/919653101966?text=Hello%2C%20I'm%20interested%20to%20know%20more%20about%20you%20%21"
        target='_blank'
        rel='noreferrer'
        className='fixed bottom-0 left-0 right-0 md:hidden flex items-center justify-center gap-3 bg-[#25D366] text-white px-4 py-4 z-50 shadow-lg hover:bg-[#20BA5A] transition-colors duration-300'
        aria-label='Chat on WhatsApp'
      >
        <svg
          className='w-6 h-6 shrink-0'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
        </svg>
        <span className='font-semibold text-base'>Chat on WhatsApp</span>
      </a>

      {/* Floating WhatsApp Button - Desktop Only */}
      <a
        href="https://wa.me/919653101966?text=Hello%2C%20I'm%20interested%20to%20know%20more%20about%20you%20%21"
        target='_blank'
        rel='noreferrer'
        className='fixed bottom-6 right-6 md:bottom-8 md:right-8 hidden md:flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 z-50 animate-bounce-slow hover:scale-110 hover:shadow-[#25D366]/50 hover:shadow-2xl group'
        aria-label='Chat on WhatsApp'
      >
        <svg
          className='w-7 h-7 md:w-8 md:h-8 shrink-0 group-hover:scale-110 transition-transform duration-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
        </svg>
      </a>

      {/* Floating Get Quote Tab */}
      <Link
        href='/contact'
        className='fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-orange-600 text-white px-3 py-8 rounded-l-lg shadow-lg hover:bg-orange-700 transition-all duration-300 hidden lg:flex items-center'
      >
        <span className='writing-vertical text-sm font-medium'>
          Get Free Quote
        </span>
      </Link>
    </div>
  );
}
