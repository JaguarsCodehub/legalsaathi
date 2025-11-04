"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block text-sm bg-orange-600 text-white animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <p className="flex items-center gap-2 text-white/90">
            <span className="text-red-500">📍</span>
            Sakinaka, Andheri (E), Mumbai - 400072, Maharashtra
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
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-bold">LS</span>
            <span className="font-bold text-lg">Your Legal Saathi</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
            <Link href="/why-choose-us" className="hover:text-orange-600 transition-colors">Why Choose Us</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="inline-flex rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:bg-orange-700 transition-colors">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-zinc-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 top-16"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-16 left-0 right-0 bg-white shadow-xl z-50 border-t border-zinc-200 transform transition-transform duration-300 ease-in-out">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="px-6 py-4 text-zinc-700 hover:text-orange-600 hover:bg-orange-50 border-b border-zinc-100 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="px-6 py-4 text-zinc-700 hover:text-orange-600 hover:bg-orange-50 border-b border-zinc-100 transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/why-choose-us"
                  onClick={closeMobileMenu}
                  className="px-6 py-4 text-zinc-700 hover:text-orange-600 hover:bg-orange-50 border-b border-zinc-100 transition-colors font-medium"
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="px-6 py-4 text-zinc-700 hover:text-orange-600 hover:bg-orange-50 border-b border-zinc-100 transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mx-6 my-4 inline-flex justify-center rounded-md bg-orange-600 text-white px-6 py-3 text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  Get Free Quote
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
