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
            <span>January 12, 2025</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Leave & License</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Leave & License vs Rent Agreement: Key Differences Explained
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3797239/pexels-photo-3797239.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Leave and License vs Rent Agreement"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-6">
              When renting a property in India, especially in Mumbai and Maharashtra, you'll often come across two types of agreements: Leave and License Agreement and Rent Agreement. While they may seem similar, there are crucial legal differences that can significantly impact both landlords and tenants.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Understanding the Fundamental Difference</h2>
            
            <div className="bg-zinc-50 border-l-4 border-zinc-400 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed">
                <strong>Leave and License Agreement:</strong> Creates a license, giving the tenant permission to use the property without transferring any ownership or tenancy rights.
              </p>
            </div>

            <div className="bg-zinc-50 border-l-4 border-zinc-400 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed">
                <strong>Rent Agreement:</strong> Creates a lease, which transfers certain rights to the tenant and may provide stronger tenancy protection under rent control laws.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Key Differences at a Glance</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-zinc-300">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Aspect</th>
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Leave & License</th>
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Rent Agreement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Legal Nature</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">License (permission to use)</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Lease (transfer of rights)</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Tenancy Rights</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">No tenancy rights</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">May have tenancy rights</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Duration</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Typically 11 months or less</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Can be longer term</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Termination</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Easier to terminate</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">May require eviction proceedings</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Rent Control Act</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Not covered</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">May be covered</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Registration</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Mandatory in Maharashtra</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Mandatory if over 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">When to Use Leave and License Agreement</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Leave and License Agreements are preferred in the following scenarios:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Short-term rentals:</strong> For agreements of 11 months or less</li>
              <li><strong>Property owners want flexibility:</strong> When landlords want the ability to easily change terms or tenants</li>
              <li><strong>Commercial properties:</strong> Often used for commercial spaces where flexibility is important</li>
              <li><strong>Furnished apartments:</strong> Common for fully furnished properties where the owner wants more control</li>
              <li><strong>High-value properties:</strong> Where property owners want to avoid potential tenancy disputes</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">When to Use Rent Agreement</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Traditional Rent Agreements may be suitable when:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Long-term rentals:</strong> For agreements extending beyond 12 months</li>
              <li><strong>Tenant wants security:</strong> When tenants want stronger legal protection</li>
              <li><strong>Rent-controlled areas:</strong> In areas where rent control laws apply</li>
              <li><strong>Residential tenancy:</strong> For long-term residential arrangements</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Legal Implications in Maharashtra</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Leave and License Agreement:</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Must be registered with Sub-Registrar within 4 months</li>
                <li>Not covered under Maharashtra Rent Control Act</li>
                <li>Property owner retains full control</li>
                <li>Easier to vacate property after agreement period</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Rent Agreement:</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Must be registered if duration exceeds 12 months</li>
                <li>May be covered under Rent Control Act</li>
                <li>Tenant may have stronger legal protection</li>
                <li>May require formal eviction process</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Which One Should You Choose?</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              The choice between Leave and License Agreement and Rent Agreement depends on your specific needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">For Property Owners</h3>
                <p className="text-zinc-700 mb-3">
                  <strong>Choose Leave & License if:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-zinc-700 text-sm">
                  <li>You want flexibility</li>
                  <li>Short-term rental (11 months or less)</li>
                  <li>Want to avoid tenancy disputes</li>
                  <li>Need easy termination option</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">For Tenants</h3>
                <p className="text-zinc-700 mb-3">
                  <strong>Consider your priorities:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-zinc-700 text-sm">
                  <li>Short-term stay: Leave & License works</li>
                  <li>Long-term security: Rent Agreement may be better</li>
                  <li>Both provide legal protection when registered</li>
                  <li>Review terms carefully in either case</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Conclusion</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Both Leave and License Agreements and Rent Agreements serve important purposes in property rentals. In Mumbai and Maharashtra, Leave and License Agreements have become the preferred choice for most property owners due to their flexibility and ease of termination.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              The key is to ensure that whichever agreement you choose, it is properly drafted, legally compliant, and registered with the appropriate authorities. This protects both parties and ensures the agreement is legally enforceable.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need Help Choosing the Right Agreement?</h3>
              <p className="text-zinc-700 mb-6">
                Our legal experts can help you understand which agreement suits your needs and ensure it's properly drafted and registered. Get professional guidance for your property rental needs.
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

