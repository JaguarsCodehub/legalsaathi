"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block text-sm bg-orange-600 text-white animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <p className="flex items-center gap-2 text-white/90">
            <span className="text-red-500">📍</span>
            Sakinaka, Adnheri East, Mumbai, Maharashtra, India
          </p>
          <div className="flex items-center gap-6 text-white/90">
            <a href="tel:+919653101966" className="hover:text-white transition-colors">+91 96531 01966</a>
            <a href="mailto:legalsaathi2000@gmail.com" className="hover:text-white transition-colors">legalsaathi2000@gmail.com</a>
            <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">GST: 27AxxxxxxxZ</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur"
      }`}>
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-bold">LS</span>
            <span className="font-bold text-lg">LegalSaathi</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
            <Link href="/why-choose-us" className="hover:text-orange-600 transition-colors">Why Choose Us</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </nav>
          <Link href="/contact" className="hidden md:inline-flex rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:bg-orange-700 transition-colors">
            Get Free Quote
          </Link>
        </div>
      </header>
    </>
  );
}
