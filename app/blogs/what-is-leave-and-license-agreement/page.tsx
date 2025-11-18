"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4">
          <Link href="/blogs" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 text-sm font-medium">
            ← Back to Blogs
          </Link>
          <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
            <span>January 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Leave & License</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            What is Leave and License Agreement? A Complete Guide
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Leave and License Agreement Registration Mumbai - Complete Guide by Your Legal Saathi"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-6">
              A Leave and License Agreement is one of the most common legal documents used for property rentals in India, especially in Mumbai and Maharashtra. If you're a property owner or tenant, understanding this agreement is crucial for protecting your rights and interests.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Understanding Leave and License Agreement</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              A Leave and License Agreement is a legal contract between a property owner (licensor) and a tenant (licensee) that grants the tenant the right to use and occupy the property for a specific period. Unlike a traditional lease agreement, this arrangement doesn't transfer any ownership rights to the tenant.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              The key characteristic of a Leave and License Agreement is that it creates a license, not a lease. This means the tenant has permission to use the property but doesn't acquire any tenancy rights that would require formal eviction proceedings.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Key Features of Leave and License Agreement</h2>
            
            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Fixed Duration:</strong> The agreement specifies a clear start and end date, typically 11 months or less.</li>
              <li><strong>No Tenancy Rights:</strong> The tenant doesn't acquire any permanent tenancy rights under this agreement.</li>
              <li><strong>Easy Termination:</strong> The property owner can easily terminate the agreement after the specified period without lengthy legal procedures.</li>
              <li><strong>License Fee:</strong> The tenant pays a license fee (similar to rent) for using the property.</li>
              <li><strong>Government Registration:</strong> In Maharashtra, Leave and License Agreements must be registered with the Sub-Registrar's office.</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Why Choose Leave and License Agreement?</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Benefits for Property Owners:</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Flexibility to change terms or tenants after the agreement period</li>
                <li>No need for formal eviction procedures</li>
                <li>Better control over property usage</li>
                <li>Easier to increase rent or modify terms</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Benefits for Tenants:</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Legal protection during the agreement period</li>
                <li>Clear terms and conditions</li>
                <li>Registered document provides legal validity</li>
                <li>Can be used for address proof and other official purposes</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Legal Requirements in Maharashtra</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              According to the Maharashtra Rent Control Act and Registration Act, Leave and License Agreements must be:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Registered with the Sub-Registrar's office within 4 months of execution</li>
              <li>Stamped as per the Maharashtra Stamp Act</li>
              <li>Witnessed by at least two witnesses</li>
              <li>Include all essential clauses as per legal requirements</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Essential Information to Include</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              A comprehensive Leave and License Agreement should include:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Complete details of both parties (name, address, ID proof)</li>
              <li>Property description and address</li>
              <li>License fee amount and payment terms</li>
              <li>Security deposit details</li>
              <li>Duration of the agreement</li>
              <li>Terms and conditions for property use</li>
              <li>Maintenance and repair responsibilities</li>
              <li>Termination clauses</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Conclusion</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              A Leave and License Agreement is an essential legal document for property rentals in Mumbai and Maharashtra. It provides clarity, legal protection, and peace of mind for both property owners and tenants. Whether you're renting out your property or looking for a place to stay, having a properly drafted and registered Leave and License Agreement is crucial.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              At Your Legal Saathi, we provide comprehensive Leave and License Agreement services, including drafting, registration, and doorstep biometric verification. Our expert team ensures your agreement is legally compliant and protects your interests.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need Help with Your Leave and License Agreement?</h3>
              <p className="text-zinc-700 mb-6">
                Get professional assistance for drafting and registering your Leave and License Agreement. We provide doorstep services across Mumbai, Navi Mumbai, Thane, and all over Maharashtra.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* <Footer /> */}
    </>
  );
}

