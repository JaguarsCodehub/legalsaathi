"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  const blogs = [
    {
      slug: "what-is-leave-and-license-agreement",
      title: "What is Leave and License Agreement? A Complete Guide",
      excerpt: "Understanding Leave and License Agreements: Learn what they are, how they work, and why they're essential for property rentals in Mumbai and Maharashtra.",
      image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Leave & License",
    },
    {
      slug: "leave-license-vs-rent-agreement",
      title: "Leave & License vs Rent Agreement: Key Differences Explained",
      excerpt: "Discover the crucial differences between Leave & License Agreements and traditional Rent Agreements. Know which one suits your needs better.",
      image: "https://images.pexels.com/photos/3797239/pexels-photo-3797239.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Leave & License",
    },
    {
      slug: "essential-clauses-leave-license-agreement",
      title: "Essential Clauses in Leave and License Agreement You Must Know",
      excerpt: "Learn about the critical clauses that should be included in your Leave and License Agreement to protect both landlord and tenant interests.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Leave & License",
    },
    {
      slug: "leave-license-registration-process",
      title: "Leave and License Agreement Registration Process in Mumbai",
      excerpt: "Step-by-step guide to registering your Leave and License Agreement in Mumbai. Learn about required documents, fees, and the complete process.",
      image: "https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Registration",
    },
    {
      slug: "benefits-leave-license-agreement",
      title: "Top 10 Benefits of Leave and License Agreement for Property Owners",
      excerpt: "Explore the advantages of Leave and License Agreements for property owners, including legal protection, flexibility, and ease of termination.",
      image: "https://images.pexels.com/photos/7710168/pexels-photo-7710168.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Leave & License",
    },
    {
      slug: "common-mistakes-leave-license-agreement",
      title: "Common Mistakes to Avoid in Leave and License Agreement",
      excerpt: "Avoid costly mistakes when drafting your Leave and License Agreement. Learn from common errors and ensure your agreement is legally sound.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 3, 2025",
      readTime: "5 min read",
      category: "Legal Tips",
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Legal <span className="text-orange-600">Blogs</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Expert insights, guides, and updates on Leave & License Agreements, property registration, and real estate legal documentation.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group bg-white rounded-xl border border-zinc-200 hover:border-orange-300 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Read More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

