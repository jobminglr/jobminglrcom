// src/pages/contact.js
import React, { useState } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";

const ContactPage = () => {
  const [showToast, setShowToast] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <Layout1>
      <SEO1
        title="Contact"
        description="Contact JobMinglr - send us a message or find our contact information (address, phone, email)."
      />
      <section className="container mx-auto py-16 px-6 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-8 text-lg">
          Have questions or feedback? Fill out the form and our team will get back to you shortly.
        </p>
        {showToast && (
          <div className="mb-6 rounded-md bg-brandGreen border border-brandGreen px-6 py-4 text-sm text-white shadow-md flex items-start justify-between animate-fade-in-out transition-all duration-300">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Thank you for your inquiry! We’ll get back to you within 48 hours.</span>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-4 text-green-600 hover:text-green-800">&times;</button>
          </div>
        )}

        <form onSubmit={handleContactSubmit} className="space-y-5 mb-12">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brandGreen-light"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brandGreen-light"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brandGreen-light"
            />
          </div>

          <button
            type="submit"
            className="bg-brandGreen text-white font-semibold px-6 py-2 rounded hover:bg-brandGreen-dark transition"
          >
            Send
          </button>
        </form>

        <div className="text-gray-800 space-y-1 text-base">
          <h2 className="text-2xl font-semibold mb-2">JobMinglr</h2>
          <p>701 Brazos Street, Austin, TX 78701</p>
          <p>Phone: (512) 240-2349</p>
          <p>Email: <a href="mailto:support@jobminglr.com" className="text-brandGreen hover:underline">support@jobminglr.com</a></p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Business Hours</h3>
          <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
          <p>Saturday & Sunday: Closed</p>
        </div>
      </section>
    </Layout1>
  );
};

export default ContactPage;
