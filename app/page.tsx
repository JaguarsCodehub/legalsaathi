"use client";

import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./components/QuoteForm";
import Accordion from "./components/Accordion";
import AutoCarousel from "./components/AutoCarousel";
import ScrollAnimate from "./components/ScrollAnimate";
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
      content: "Team of legal experts at LegalSaathi provides you assistance to make your registration easier.",
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
      quote: "Brilliant and Hassle-Free! Got the rent agreement done quickly without any middleman. LegalSaathi is a perfect example of how technology can enable smooth process with government agencies. Kudos to the team!",
      author: "MR VINODRAJ THODDETTI",
      location: "MUMBAI",
    },
    {
      quote: "I own a flat at Mumbai and after retirement I am residing at Uttarakhand. It's really a great service that LegalSaathi is providing. I did everything at my own convenience. Biometric executive came to my home. Process was completed in weeks' time. I had great experience with them. Thanks!",
      author: "Mrs Geetanjali Gairola",
      location: "Uttarakhand",
    },
    {
      quote: "Team LegalSaathi is doing a fantastic job. My tenant was in Pune and for occupational purpose I am residing at Brisbane. They saved my hassle of travelling. The biometric device was sent to me and proper support was provided. Thank you saviours.",
      author: "Mr Domnic Pareirra",
      location: "Vasai - Currently at Brisbane",
    },
  ];

  const stats = [
    { value: "5000+", label: "Documents" },
    { value: "50+", label: "Cities" },
    { value: "25+", label: "Countries" },
    { value: "4500+", label: "Happy Customers" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top info bar */}
      <div className="hidden md:block text-sm bg-orange-600 text-white animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <p className="flex items-center gap-2 text-white/90">
            <span className="text-red-500">📍</span>
            302/3, Manish Chamber, Sonawala Rd, Goregaon (E), Mumbai 400063
          </p>
          <div className="flex items-center gap-6 text-white/90">
            <a href="tel:+919969292000" className="hover:text-white transition-colors">+91 99692 92000</a>
            <a href="mailto:info@legalsaathi.com" className="hover:text-white transition-colors">info@legalsaathi.com</a>
            <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">GST: 27AxxxxxxxZ</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur"
      }`}>
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-bold">LS</span>
            <span className="font-bold text-lg">LegalSaathi</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-orange-600 font-medium">Home</a>
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#how" className="hover:text-orange-600 transition-colors">How It Works</a>
            <a href="#why-choose" className="hover:text-orange-600 transition-colors">Why Choose Us</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <Link href="#quote" className="hidden md:inline-flex rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:bg-orange-700 transition-colors">
            Get Free Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-zinc-50 pt-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 py-16 lg:py-24">
          <ScrollAnimate direction="right" delay={0}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Hassle Free
              <br /> Online Rent Agreement
              <br /> Registration
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-xl">
              Skip the queue and get your rent agreement registered in no time with our certified e‑registration service provider.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="#quote" className="rounded-md bg-orange-600 text-white px-6 py-3 font-medium hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg hover:scale-105 transform">
                Create Your Draft Now
              </Link>
              <a href="#how" className="text-orange-700 font-medium hover:underline transition-all">
                How it works
              </a>
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={200}>
            <div className="relative">
        <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop"
                alt="Happy family in their new home"
                width={1600}
                height={1200}
                className="rounded-xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
          priority
        />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="mt-2 text-white/80 text-sm sm:text-base">{stat.label}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Steps - Simplified for Hero */}
      <section id="how" className="bg-[#fef3e2] relative overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center">
              <p className="text-sm font-semibold text-zinc-900 tracking-widest uppercase">JUST 4 SIMPLE STEPS!</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">How it works with LegalSaathi?</h2>
              <div className="mt-4 flex justify-center gap-2">
                <div className="h-1 w-12 bg-orange-600"></div>
                <div className="h-1 w-8 bg-orange-600"></div>
              </div>
            </div>
          </ScrollAnimate>
          <div className="mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 px-2">
            {[
              {
                title: "Form Filling & Drafting",
                icon: "✍️",
                stepNumber: "01",
              },
              {
                title: "Payment & Verification",
                icon: "💳",
                stepNumber: "02",
              },
              {
                title: "Appointment for bio-metric",
                icon: "🪪",
                stepNumber: "03",
              },
              {
                title: "Agreement is Registered!",
                icon: "👍",
                stepNumber: "04",
              },
            ].map((card, index) => (
              <ScrollAnimate key={card.title} direction="up" delay={index * 150}>
                <div className="relative group flex justify-center">
                  {/* Modern Card Design - Bigger */}
                  <div className="relative w-full rounded-3xl bg-white p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-zinc-100 hover:border-orange-300 overflow-hidden group-hover:bg-orange-50/30 min-h-[320px] flex flex-col justify-between">
                  {/* Decorative accent on hover */}
                  <div className="absolute inset-0 bg-orange-50/0 group-hover:bg-orange-50/50 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Step number badge - Smaller, fits in card */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold shadow-xl ring-3 ring-white z-20 group-hover:scale-110 transition-transform duration-500">
                    {card.stepNumber}
                  </div>
                  
                  {/* Icon container - Bigger, no gradient */}
                  <div className="relative mx-auto mt-6 mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-orange-50 border-2 border-orange-200 text-5xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:border-orange-400 group-hover:bg-orange-100">
                    <div className="relative z-10">{card.icon}</div>
                  </div>
                  
                  {/* Title - Better typography */}
                  <h3 className="relative z-10 font-bold text-xl sm:text-2xl text-zinc-900 leading-tight px-2">{card.title}</h3>
                  
                  {/* Arrow connector - Enhanced positioning */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-30">
                      <div className="h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-orange-200 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-500">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                    {/* Bottom accent line - always visible */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Carousel Section - Column Layout */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <ScrollAnimate direction="left" delay={0}>
              <p className="text-sm font-semibold text-orange-600 tracking-widest uppercase">OUR SERVICES</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
                We Go Beyond Documentation
              </h2>
              <div className="mt-6 h-1 w-16 bg-orange-600"></div>
              <p className="mt-8 text-lg text-zinc-600 leading-8">
                Our approach combines technology with personalized service to provide comprehensive solutions for all your real estate documentation needs. We go beyond data to provide strategic recommendations and guidance.
              </p>
              <p className="mt-6 text-lg text-zinc-600 leading-8">
                From descriptive to predictive and prescriptive, we provide the full spectrum of guidance you need to succeed. Our approach layers multiple methods to provide a richer, more comprehensive understanding of your needs.
              </p>
            </ScrollAnimate>

            {/* Right Side - Auto Carousel */}
            <ScrollAnimate direction="right" delay={200}>
              <AutoCarousel
                items={[
                  {
                    title: "Conversational Approach",
                    description:
                      "Take your participants out of 'test taking mode' with a conversational approach. Make stronger, more authentic connections with clients by engaging them in a way that feels natural and personalized.",
                    icon: "💬",
                  },
                  {
                    title: "Strategic Recommendations",
                    description:
                      "We go beyond data to provide strategic recommendations and guidance. Our approach layers multiple methods to provide a richer, more comprehensive understanding of your needs.",
                    icon: "📊",
                  },
                  {
                    title: "Comprehensive Solutions",
                    description:
                      "From descriptive to predictive and prescriptive, we provide the full spectrum of guidance you need to succeed. Get end-to-end support for all your documentation requirements.",
                    icon: "🎯",
                  },
                  {
                    title: "Doorstep Service",
                    description:
                      "Experience the convenience of doorstep service. Our team comes to you, making the entire process hassle-free. We handle everything from documentation to biometric verification at your location.",
                    icon: "🚪",
                  },
                ]}
              />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* About & Services - Enhanced */}
      <section id="about" className="relative py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-orange-600 tracking-widest uppercase">WE MAKE EASIER FOR YOU TO REGISTER</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">Our Core Services</h2>
              <div className="mt-6 h-1 w-20 bg-orange-600 mx-auto"></div>
            </div>
          </ScrollAnimate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Leave & License",
                desc: "Leave and License Agreement commonly known as Rent Agreement. A leave and license agreement means permission given by the owner of the property.",
                image: "https://images.pexels.com/photos/3797239/pexels-photo-3797239.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "Sale Agreement",
                desc: "We are acclaimed and approved by the people of Maharashtra for equipping an effortless Sales Agreement service all over the state.",
                image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "Distant Leave & License",
                desc: "Are you residing out of Maharashtra or India? But own a property in Maharashtra? Looking forward to rent out the property? We've got you covered.",
                image: "https://images.pexels.com/photos/7710168/pexels-photo-7710168.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ].map((service, index) => (
              <ScrollAnimate key={service.title} direction="up" delay={index * 150}>
                <div className="group relative rounded-3xl overflow-hidden bg-white border-2 border-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 h-10 w-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-4 text-zinc-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 leading-7 mb-6 text-base">
                    {service.desc}
                  </p>
                  
                  {/* Read More Button - Enhanced */}
                  <button className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/btn">
                    <span>Read More</span>
                    <svg 
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* About LegalSaathi */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollAnimate direction="left" delay={0}>
            <p className="text-sm font-semibold text-orange-700 tracking-widest uppercase">AUTHORISED SERVICE PROVIDER (ASP)</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">About LegalSaathi</h2>
            <div className="mt-4 h-1 w-16 bg-orange-600"></div>
            <p className="mt-6 text-zinc-700 leading-7">
              We are a group of professionals who are Authorized Service Provider (ASP) approved by Department of Registration and Stamps, Govt of Maharashtra who work to simplify legal documentation.
            </p>
            <p className="mt-4 text-zinc-700 leading-7">
              We combine technology with Government's latest e-initiative technology and documentation services to clients at the best rates in market. We bring numerous Government services under one roof & simplify them in a manner that a common man can understand.
            </p>
            <div className="mt-6 bg-white rounded-lg p-4 border border-orange-200 inline-block hover:shadow-lg transition-shadow duration-300">
              <p className="text-sm text-zinc-600 mb-1">MAH-ASP-3973/2019</p>
              <p className="font-semibold text-orange-600">Government Authorised E-Registration Service Provider</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction="right" delay={200}>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Authorized service provider"
                width={1200}
                height={1000}
                className="rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
              />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Registration Made Simple */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollAnimate direction="right" delay={0} className="relative order-2 lg:order-1">
            <Image
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Professional team working together"
              width={1200}
              height={1000}
              className="rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
            />
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={200} className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-orange-600 tracking-widest uppercase">REGISTRATION MADE SIMPLE.</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
              Convenient, secure, reliable & time-saving.
            </h2>
            <div className="mt-4 h-1 w-16 bg-orange-600"></div>
            <p className="mt-6 text-zinc-700 leading-7">
              At LegalSaathi, with our pan-India network and government-approved service provider certifications, we provide
              online registration services with doorstep assistance for KYC & documentation. We use cutting-edge technology
              to streamline processes and new e-initiatives offered by the government to make all legal processes simple and
              accessible for our clients from the comfort of their home.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Why Choose Us with Accordion */}
      <section id="why-choose" className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-orange-700 tracking-widest uppercase">WE ARE THE BEST!!</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Why Choose LegalSaathi?</h2>
              <div className="mt-4 h-1 w-16 bg-orange-600 mx-auto"></div>
            </div>
          </ScrollAnimate>
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollAnimate direction="left" delay={200}>
              <Accordion items={whyChooseItems} />
            </ScrollAnimate>
            <ScrollAnimate direction="right" delay={300}>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional services"
                  width={1200}
                  height={1000}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Process Section - 6 Steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-orange-700 tracking-widest uppercase">OUR PROCESS</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Our Process to Serve You Better</h2>
              <div className="mt-4 h-1 w-16 bg-orange-600 mx-auto"></div>
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

      {/* Testimonials */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimate direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">What Our Customers Say</h2>
              <div className="mt-4 h-1 w-16 bg-orange-600 mx-auto"></div>
            </div>
          </ScrollAnimate>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 150}>
                <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl text-orange-600 mb-4">"</div>
                  <p className="text-zinc-700 leading-7 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t border-zinc-200 pt-4">
                    <p className="font-bold text-zinc-900">{testimonial.author}</p>
                    <p className="text-sm text-zinc-600">{testimonial.location}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Get Free Quote */}
      <section id="quote" className="bg-white py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollAnimate direction="left" delay={0}>
            <div className="text-zinc-900">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Free Quote</h2>
              <div className="h-1 w-16 bg-orange-600 mb-6"></div>
              <p className="text-zinc-600 leading-7 mb-6">
                Need Documenting Experts For Your Agreement? Fill up the form below to book your appointment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">Call Now</p>
                    <a href="tel:+919969292000" className="text-zinc-600 hover:text-orange-600 transition-colors">+91 99692 92000</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">Email Us</p>
                    <a href="mailto:info@legalsaathi.com" className="text-zinc-600 hover:text-orange-600 transition-colors">info@legalsaathi.com</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction="right" delay={200}>
            <div className="bg-zinc-50 rounded-xl p-8 shadow-xl border border-zinc-200">
              <QuoteForm />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-bold">LS</span>
                <span className="font-bold text-lg">LegalSaathi</span>
              </div>
              <p className="text-sm text-zinc-600 leading-6">
                We are group of professionals and Authorised Service Provider (ASP) approved by Department of Registration and Stamps Govt who work to simplify legal documentation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#services" className="hover:text-orange-600 transition-colors">Leave & License</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors">Sale Agreement</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors">Distant Leave & License</a></li>
                <li><a href="#about" className="hover:text-orange-600 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#how" className="hover:text-orange-600 transition-colors">How It Works</a></li>
                <li><a href="#quote" className="hover:text-orange-600 transition-colors">Calculator</a></li>
                <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Details</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="tel:+919969292000" className="hover:text-orange-600 transition-colors">+91 99692 92000</a></li>
                <li><a href="tel:+918424000199" className="hover:text-orange-600 transition-colors">+91 84240 00199</a></li>
                <li><a href="mailto:info@legalsaathi.com" className="hover:text-orange-600 transition-colors">info@legalsaathi.com</a></li>
                <li className="pt-2">302/3, Manish Chamber, Sonawala Rd, Goregaon (E), Mumbai 400063</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <p>© {new Date().getFullYear()} LegalSaathi. All Rights Reserved</p>
            <p>Designed with ❤️ for Real Estate Solutions</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919969292000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-40"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Floating Get Quote Tab */}
      <a
        href="#quote"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-orange-600 text-white px-3 py-8 rounded-l-lg shadow-lg hover:bg-orange-700 transition-all duration-300 hidden lg:flex items-center"
      >
        <span className="writing-vertical text-sm font-medium">Get Free Quote</span>
      </a>
    </div>
  );
}
