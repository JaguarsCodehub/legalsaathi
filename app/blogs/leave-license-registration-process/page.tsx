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
            <span>January 8, 2025</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Registration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Leave and License Agreement Registration Process in Mumbai
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Leave and License Agreement Registration Process"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-6">
              Registering a Leave and License Agreement is mandatory in Maharashtra. The registration process ensures legal validity and provides protection to both property owners and tenants. This comprehensive guide walks you through the complete registration process in Mumbai.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Why Registration is Mandatory</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6 rounded-r-lg">
              <p className="text-zinc-700 leading-relaxed mb-3">
                According to the Registration Act, 1908 and Maharashtra state laws:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Leave and License Agreements must be registered within 4 months of execution</li>
                <li>Unregistered agreements are not admissible as evidence in court</li>
                <li>Registration provides legal validity and protection</li>
                <li>Required for address proof and official documentation</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Step-by-Step Registration Process</h2>
            
            <div className="space-y-8 my-8">
              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 1: Prepare the Agreement</h3>
                <p className="text-zinc-700 leading-relaxed mb-3">
                  Draft a comprehensive Leave and License Agreement with all essential clauses:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Complete details of both parties</li>
                  <li>Property description and address</li>
                  <li>License fee and payment terms</li>
                  <li>Duration and validity period</li>
                  <li>Security deposit details</li>
                  <li>All terms and conditions</li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 2: Gather Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-2">For Property Owner:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-zinc-700 text-sm">
                      <li>Property ownership documents</li>
                      <li>Aadhaar card (original + copy)</li>
                      <li>PAN card (copy)</li>
                      <li>Property tax receipt</li>
                      <li>Society NOC (if applicable)</li>
                      <li>Latest electricity bill</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-2">For Tenant:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-zinc-700 text-sm">
                      <li>Aadhaar card (original + copy)</li>
                      <li>PAN card (copy)</li>
                      <li>Passport size photos (2-4)</li>
                      <li>Address proof</li>
                      <li>Employment proof (if required)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 3: Pay Stamp Duty</h3>
                <p className="text-zinc-700 leading-relaxed mb-3">
                  Stamp duty must be paid before registration:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Calculate stamp duty based on license fee and duration</li>
                  <li>Purchase stamp paper or pay e-stamp duty</li>
                  <li>Typical stamp duty: 0.25% of total rent for 11 months</li>
                  <li>Can be paid online or at authorized stamp vendors</li>
                </ul>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-sm text-zinc-600">
                    <strong>Example:</strong> For ₹30,000/month rent for 11 months = ₹3,30,000 total. Stamp duty = 0.25% of ₹3,30,000 = ₹825
                  </p>
                </div>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 4: Schedule Biometric Appointment</h3>
                <p className="text-zinc-700 leading-relaxed mb-3">
                  Both parties need to complete biometric verification:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Book appointment at Sub-Registrar office or online</li>
                  <li>Both parties must be present on the scheduled date</li>
                  <li>Bring all original documents for verification</li>
                  <li>Complete fingerprint and photo capture</li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 5: Submit Documents at Sub-Registrar Office</h3>
                <p className="text-zinc-700 leading-relaxed mb-3">
                  On the appointment date:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Submit the agreement along with all documents</li>
                  <li>Pay registration charges (typically ₹1,000 - ₹2,000)</li>
                  <li>Complete biometric verification</li>
                  <li>Sign the agreement in presence of Sub-Registrar</li>
                  <li>Two witnesses must also be present and sign</li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Step 6: Receive Registered Agreement</h3>
                <p className="text-zinc-700 leading-relaxed mb-3">
                  After successful registration:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                  <li>Registered agreement is returned within 7-15 days</li>
                  <li>Both parties receive certified copies</li>
                  <li>Agreement is now legally valid and enforceable</li>
                  <li>Can be used for address proof and official purposes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Required Fees and Charges</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-zinc-300">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Item</th>
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Amount</th>
                    <th className="border border-zinc-300 p-4 text-left font-bold text-zinc-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Stamp Duty</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">0.25% of total rent</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">For 11 months agreement</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Registration Fee</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">₹1,000 - ₹2,000</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">Fixed by government</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Documentation Charges</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">₹500 - ₹1,000</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">If using agent/service</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="border border-zinc-300 p-4 font-medium text-zinc-900">Photocopy Charges</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">₹100 - ₹200</td>
                    <td className="border border-zinc-300 p-4 text-zinc-700">For document copies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Online Registration Process</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Maharashtra government offers online registration through the IGR (Inspector General of Registration) portal:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Visit the IGR Maharashtra website</li>
              <li>Create an account and login</li>
              <li>Fill the online application form</li>
              <li>Upload required documents</li>
              <li>Pay stamp duty and registration fees online</li>
              <li>Schedule biometric appointment</li>
              <li>Visit Sub-Registrar office for verification</li>
              <li>Receive registered agreement</li>
            </ol>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Important Points to Remember</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Registration must be completed within 4 months of agreement execution</li>
                <li>Both parties must be present for biometric verification</li>
                <li>Two witnesses are mandatory for registration</li>
                <li>All documents must be original for verification</li>
                <li>Keep multiple copies of registered agreement</li>
                <li>Late registration may attract penalties</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Common Challenges and Solutions</h2>
            
            <div className="space-y-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-zinc-900 mb-2">Challenge: Long waiting times at Sub-Registrar office</h4>
                <p className="text-zinc-700 text-sm">
                  <strong>Solution:</strong> Book appointment online in advance, arrive early, or use authorized service providers for faster processing.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-zinc-900 mb-2">Challenge: Missing documents</h4>
                <p className="text-zinc-700 text-sm">
                  <strong>Solution:</strong> Prepare a checklist of all required documents beforehand and verify everything before the appointment.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-zinc-900 mb-2">Challenge: One party unable to be present</h4>
                <p className="text-zinc-700 text-sm">
                  <strong>Solution:</strong> Use power of attorney or reschedule appointment. Both parties must complete biometric verification.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Benefits of Professional Assistance</h2>
            
            <ul className="list-disc pl-6 space-y-3 text-zinc-700 mb-6">
              <li>Expert guidance through the entire process</li>
              <li>Doorstep service - no need to visit offices</li>
              <li>Faster processing with proper documentation</li>
              <li>Error-free agreement drafting</li>
              <li>Biometric assistance for NRI tenants</li>
              <li>Complete support until registration completion</li>
            </ul>

            <h2 className="text-3xl font-bold text-zinc-900 mt-10 mb-4">Conclusion</h2>
            
            <p className="text-zinc-700 leading-relaxed mb-4">
              Registering your Leave and License Agreement is a crucial step that provides legal protection to both parties. While the process may seem complex, proper preparation and understanding of requirements can make it smooth and hassle-free.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Whether you choose to do it yourself or seek professional assistance, ensure that your agreement is registered within the stipulated time frame to avoid legal complications.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need Help with Registration?</h3>
              <p className="text-zinc-700 mb-6">
                Our team provides complete Leave and License Agreement registration services with doorstep biometric verification. We handle all documentation, appointments, and ensure timely registration across Mumbai, Navi Mumbai, Thane, and all over Maharashtra.
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

