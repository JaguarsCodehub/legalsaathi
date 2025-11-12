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
            <span>January 10, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Leave & License</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Essential Clauses in Leave and License Agreement You Must Know
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Essential Clauses in Leave and License Agreement"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-6">
              A well-drafted Leave and License Agreement is crucial for protecting both property owners and tenants. Missing or poorly worded clauses can lead to disputes, legal complications, and financial losses. This guide covers the essential clauses that must be included in your Leave and License Agreement.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">1. Parties and Property Details</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              This is the foundation of your agreement and must be accurate:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Complete names and addresses</strong> of both licensor (owner) and licensee (tenant)</li>
              <li><strong>Identity proof details</strong> (Aadhaar, PAN, etc.) of both parties</li>
              <li><strong>Property description:</strong> Complete address, flat/house number, area, floor, building name</li>
              <li><strong>Property type:</strong> Residential, commercial, or mixed-use</li>
              <li><strong>Furnished/Unfurnished status</strong> with inventory list if applicable</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">2. Duration and Validity</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Essential elements:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Clear start date and end date of the agreement</li>
                <li>Total duration (typically 11 months or less in Maharashtra)</li>
                <li>Renewal terms and conditions</li>
                <li>Notice period for renewal or termination</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">3. License Fee and Payment Terms</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              This clause should clearly specify:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Monthly license fee amount</strong> (in words and figures)</li>
              <li><strong>Payment due date</strong> (e.g., 5th of every month)</li>
              <li><strong>Payment method</strong> (cash, cheque, online transfer, etc.)</li>
              <li><strong>Late payment charges</strong> and interest rates</li>
              <li><strong>Rent increase clause</strong> (if applicable, with notice period)</li>
              <li><strong>Maintenance charges</strong> (who pays and how much)</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">4. Security Deposit</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              A critical clause that protects the property owner:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Security deposit amount</strong> (typically 2-3 months' rent)</li>
              <li><strong>When it should be paid</strong> (before or at the time of agreement)</li>
              <li><strong>Interest on deposit</strong> (if applicable)</li>
              <li><strong>Deduction conditions</strong> (for damages, unpaid bills, etc.)</li>
              <li><strong>Refund terms</strong> (when and how it will be returned)</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">5. Property Use and Restrictions</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                This clause should clearly state:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Permitted use of the property (residential/commercial)</li>
                <li>Restrictions on subletting or transferring</li>
                <li>Prohibited activities (illegal activities, modifications without permission)</li>
                <li>Number of occupants allowed</li>
                <li>Pet policy (if applicable)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">6. Maintenance and Repairs</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Clearly define responsibilities:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Structural repairs:</strong> Owner's responsibility</li>
              <li><strong>Minor repairs:</strong> Tenant's responsibility (plumbing, electrical, etc.)</li>
              <li><strong>Regular maintenance:</strong> Who handles cleaning, painting, etc.</li>
              <li><strong>Damage liability:</strong> Tenant responsible for damages beyond normal wear and tear</li>
              <li><strong>Property inspection rights:</strong> Owner's right to inspect with notice</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">7. Utilities and Bills</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Specify who pays for what:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Electricity bills (usually tenant)</li>
              <li>Water bills (usually tenant)</li>
              <li>Gas connection and bills</li>
              <li>Internet and cable TV</li>
              <li>Property tax and society maintenance (usually owner)</li>
              <li>Transfer of utility connections in tenant's name</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">8. Termination and Vacating</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Critical termination clauses:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Notice period required for termination (typically 1-2 months)</li>
                <li>Conditions for early termination</li>
                <li>Penalty for early termination (if any)</li>
                <li>Vacating procedure and handover terms</li>
                <li>Return of security deposit after vacating</li>
                <li>Condition of property at the time of vacating</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">9. Default and Breach of Agreement</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Protect yourself from defaults:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Non-payment of license fee:</strong> Consequences and remedies</li>
              <li><strong>Unauthorized use:</strong> What constitutes breach</li>
              <li><strong>Damage to property:</strong> Liability and compensation</li>
              <li><strong>Legal remedies:</strong> Right to terminate, claim damages, etc.</li>
              <li><strong>Jurisdiction:</strong> Which court will handle disputes</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">10. Registration and Stamp Duty</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Important legal requirements:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Agreement must be registered within 4 months in Maharashtra</li>
              <li>Stamp duty payment responsibility (usually shared or specified)</li>
              <li>Registration charges (who pays)</li>
              <li>Consequences of non-registration</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">11. Force Majeure and Dispute Resolution</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Additional protective clauses:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li><strong>Force Majeure:</strong> Protection against unforeseen circumstances</li>
              <li><strong>Dispute resolution:</strong> Mediation, arbitration, or court proceedings</li>
              <li><strong>Governing law:</strong> Applicable state laws (Maharashtra in this case)</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">12. Additional Important Clauses</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-zinc-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Lock-in Period</h3>
                <p className="text-zinc-700 text-sm">
                  Specify if there's a minimum period before which tenant cannot vacate, and any penalties for early termination.
                </p>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Renewal Terms</h3>
                <p className="text-zinc-700 text-sm">
                  Clear terms for renewal, including notice period, revised rent, and renewal charges.
                </p>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Access Rights</h3>
                <p className="text-zinc-700 text-sm">
                  Owner's right to access property for inspection, repairs, or showing to potential buyers, with reasonable notice.
                </p>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Indemnity Clause</h3>
                <p className="text-zinc-700 text-sm">
                  Protection against claims arising from tenant's use of property or tenant's actions.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Vague or ambiguous language</li>
                <li>Missing essential clauses</li>
                <li>Not specifying payment terms clearly</li>
                <li>Unclear maintenance responsibilities</li>
                <li>Missing termination procedures</li>
                <li>Not including dispute resolution mechanism</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Conclusion</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              A comprehensive Leave and License Agreement with all essential clauses protects both parties and prevents future disputes. Each clause serves a specific purpose and should be carefully drafted to reflect the actual terms agreed upon.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              It's always advisable to have your agreement reviewed by legal experts to ensure it's legally compliant and covers all necessary aspects. A well-drafted agreement is an investment in peace of mind.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need Professional Help Drafting Your Agreement?</h3>
              <p className="text-zinc-700 mb-6">
                Our legal experts can help you create a comprehensive Leave and License Agreement with all essential clauses. We ensure your agreement is legally sound and protects your interests.
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

