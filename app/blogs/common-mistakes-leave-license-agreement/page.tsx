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
            <span>January 3, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Legal Tips</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Common Mistakes to Avoid in Leave and License Agreement
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
                alt="Common Mistakes in Leave and License Agreement"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-6">
              A poorly drafted Leave and License Agreement can lead to disputes, legal complications, and financial losses. Many property owners and tenants make avoidable mistakes that can cause significant problems later. Here are the most common mistakes and how to avoid them.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">1. Not Registering the Agreement</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Creating an agreement but not registering it with the Sub-Registrar office.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Consequences:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Unregistered agreement is not admissible as evidence in court</li>
                <li>No legal protection for either party</li>
                <li>Cannot be used for address proof or official purposes</li>
                <li>May face penalties for late registration</li>
              </ul>
              <p className="text-zinc-700 leading-relaxed mt-3">
                <strong>Solution:</strong> Always register your Leave and License Agreement within 4 months of execution. This is mandatory in Maharashtra and provides legal validity.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">2. Vague or Incomplete Property Description</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not providing complete and accurate property details.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>What to Include:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Complete address with flat/house number</li>
                <li>Building name and floor</li>
                <li>Area in square feet</li>
                <li>Property type (residential/commercial)</li>
                <li>Furnished/unfurnished status</li>
                <li>Any specific areas included (parking, storage, etc.)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">3. Unclear Payment Terms</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not clearly specifying license fee amount, payment date, method, and late payment charges.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Essential Details:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>License fee in words and figures</li>
                <li>Exact payment due date (e.g., 5th of every month)</li>
                <li>Payment method (cash, cheque, online transfer)</li>
                <li>Late payment charges and interest rate</li>
                <li>Maintenance charges (who pays and how much)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">4. Missing Security Deposit Clause</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not clearly defining security deposit terms, refund conditions, and deduction criteria.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Must Include:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Security deposit amount</li>
                <li>When it should be paid</li>
                <li>Conditions for deduction (damages, unpaid bills)</li>
                <li>Refund timeline after vacating</li>
                <li>Interest on deposit (if applicable)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">5. Ambiguous Maintenance Responsibilities</h2>
            
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not clearly defining who is responsible for what repairs and maintenance.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Clarify:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Structural repairs (owner's responsibility)</li>
                <li>Minor repairs (tenant's responsibility)</li>
                <li>Regular maintenance (cleaning, painting)</li>
                <li>Damage beyond normal wear and tear</li>
                <li>Property inspection rights</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">6. Missing Termination Clauses</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not specifying clear termination procedures, notice periods, and vacating terms.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Important Clauses:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Notice period required (typically 1-2 months)</li>
                <li>Early termination conditions and penalties</li>
                <li>Vacating procedure and handover terms</li>
                <li>Property condition at time of vacating</li>
                <li>Security deposit refund process</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">7. Not Including Utility Bill Responsibilities</h2>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Assuming utility bill responsibilities without clearly stating them in the agreement.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Specify:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Electricity bills (usually tenant)</li>
                <li>Water bills (usually tenant)</li>
                <li>Gas connection and bills</li>
                <li>Internet and cable TV</li>
                <li>Property tax and society maintenance (usually owner)</li>
                <li>Transfer of connections in tenant's name</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">8. Incorrect or Missing Party Details</h2>
            
            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Using incorrect names, addresses, or missing identity proof details.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Verify:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Full names as per Aadhaar/PAN card</li>
                <li>Complete addresses of both parties</li>
                <li>Identity proof numbers (Aadhaar, PAN)</li>
                <li>Contact numbers and email addresses</li>
                <li>All details must match official documents</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">9. Not Specifying Property Use Restrictions</h2>
            
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not clearly stating how the property can and cannot be used.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Include:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Permitted use (residential/commercial)</li>
                <li>Restrictions on subletting</li>
                <li>Prohibited activities</li>
                <li>Number of occupants allowed</li>
                <li>Pet policy</li>
                <li>Modification restrictions</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">10. Missing Dispute Resolution Clause</h2>
            
            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Not including how disputes will be resolved.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Should Include:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Dispute resolution method (mediation, arbitration, court)</li>
                <li>Jurisdiction (which court will handle disputes)</li>
                <li>Governing law (Maharashtra state laws)</li>
                <li>Process for resolving conflicts</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">11. Not Paying Proper Stamp Duty</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Underpaying or not paying stamp duty correctly.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Remember:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Stamp duty is 0.25% of total rent for 11 months</li>
                <li>Must be paid before registration</li>
                <li>Can use e-stamp or physical stamp paper</li>
                <li>Incorrect payment can invalidate the agreement</li>
                <li>Calculate accurately to avoid penalties</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">12. Using Generic Templates Without Customization</h2>
            
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Mistake:</strong> Using generic online templates without adapting them to your specific situation.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-3">
                <strong>Why This is Problematic:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>May not cover your specific requirements</li>
                <li>Could include irrelevant clauses</li>
                <li>Might miss important local legal requirements</li>
                <li>May not protect your unique interests</li>
              </ul>
              <p className="text-zinc-700 leading-relaxed mt-3">
                <strong>Solution:</strong> Always customize the agreement to your specific needs or seek professional help.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">How to Avoid These Mistakes</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 my-6 rounded-xl">
              <ul className="list-disc pl-6 space-y-3 text-zinc-700">
                <li><strong>Seek Professional Help:</strong> Consult legal experts or authorized service providers</li>
                <li><strong>Use Checklists:</strong> Create a checklist of all essential clauses and requirements</li>
                <li><strong>Review Carefully:</strong> Read the entire agreement before signing</li>
                <li><strong>Verify Documents:</strong> Ensure all party details and documents are accurate</li>
                <li><strong>Register Timely:</strong> Complete registration within 4 months</li>
                <li><strong>Keep Copies:</strong> Maintain multiple copies of the registered agreement</li>
                <li><strong>Update Regularly:</strong> Review and update agreements when renewing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Conclusion</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Avoiding these common mistakes can save you from legal disputes, financial losses, and unnecessary complications. A well-drafted and properly registered Leave and License Agreement is an investment in peace of mind and legal protection.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Remember, it's always better to invest in professional assistance than to face the consequences of a poorly drafted agreement. Expert guidance ensures your agreement is legally sound and protects your interests.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need Professional Help?</h3>
              <p className="text-zinc-700 mb-6">
                Our legal experts can help you create a comprehensive Leave and License Agreement that avoids all these common mistakes. We ensure your agreement is legally compliant, properly registered, and protects your interests.
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

