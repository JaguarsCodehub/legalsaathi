"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-zinc-300 rounded text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-zinc-300 rounded text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-colors"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-zinc-300 rounded text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-colors"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-zinc-300 rounded text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-3 rounded-md font-medium hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}

