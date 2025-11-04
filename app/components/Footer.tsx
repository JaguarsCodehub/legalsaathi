import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t-4 border-orange-600 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300">
                LS
              </span>
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Your Legal Saathi
              </span>
            </div>
            <p className="text-sm text-zinc-300 leading-7 mb-6">
              Your trusted partner for Real Estate Legal Documentation.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-600/20 hover:bg-orange-600/30 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <span className="text-lg">📱</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-600/20 hover:bg-orange-600/30 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <span className="text-lg">📧</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-600/20 hover:bg-orange-600/30 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <span className="text-lg">💼</span>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400 flex items-center gap-2">
              <span className="h-1 w-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded"></span>
              Real Estate Services
            </h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Property Sale Agreements
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Leave & License Agreements
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Property Registration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Legal Document Drafting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Property Verification
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400 flex items-center gap-2">
              <span className="h-1 w-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded"></span>
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <Link href="/#how" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Get Free Quote
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Legal Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400 flex items-center gap-2">
              <span className="h-1 w-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-zinc-300">
              <li>
                <a href="tel:+919653101966" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">Phone</p>
                    <p className="font-medium">+91 96531 01966</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919637045108" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">Alternate</p>
                    <p className="font-medium">+91 96370 45108</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:legalsaathi2000@gmail.com" className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">Email</p>
                    <p className="font-medium">legalsaathi2000@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="pt-2 flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <p className="text-zinc-300 leading-6">
                  Sakinaka, Andheri (E), Mumbai - 400072, Maharashtra
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-orange-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">Your Legal Saathi</span>. All Rights Reserved
          </p>
          <a 
            href="https://growthunger.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <p className="text-base text-white flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> by
            </p>
            <span className="text-base text-emerald-500 font-medium">
              growthunger
            </span>
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/image.png"
                alt="Growth Unger Logo"
                width={32}
                height={32}
                className="transition-transform group-hover:scale-110"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
