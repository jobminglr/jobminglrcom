// src/pages/index.js
import React, { useState } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import { Link } from "gatsby";

const HomePage = () => {

  const [showToast, setShowToast] = useState(false);

  // Handler for newsletter form submission (mocked functionality)
  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000); // hide after 4s
    //Call api to Subscribe
  };

  // Scroll up handler
  const scrollToTop = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  // Scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout1>
      <SEO1
        title="Home"
        description="JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."
      />

      {/* Hero Section */}
      <section className="bg-brandGreen text-white text-center py-20 px-4 ">
        {/* <section className="bg-brandGreen text-white text-center py-20 px-4 min-h-screen flex flex-col justify-center"> */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Swipe. Connect. Hired.</h1>
        <p className="text-lg md:text-2xl mb-8">
          Your next career move is just a swipe away. Join JobMinglr and experience a new way to find the perfect match.
        </p>
        <div className="space-x-8">

          <Link to="/features" className="inline-block bg-white text-brandGreen font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition transform transition-transform duration-500 hover:scale-110 object-cover">
            Learn How It Works
          </Link>

          <Link to="https://apps.apple.com/us/app/jobminglr/id6738838504" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-brandGreen font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition transform transition-transform duration-500 hover:scale-110 object-cover">
            Download JobMinglr
          </Link>
        </div>
        {/* Bouncing arrow icon to encourage scrolling */}
        <div className="mt-12 flex justify-center">
          <span


            className="text-3xl animate-bounce cursor-pointer"
            // onClick={scrollToTop} // Added click handler
            onClick={() => scrollToSection("jobMinglrForSection")} // Scroll to the specific section


          >⌄</span>
        </div>
      </section>

      {/* Audience Targeting Section */}
      <section id="jobMinglrForSection" className="container mx-auto py-16 px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12">Who is JobMinglr for?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Job Seekers</h3>
            <p className="text-gray-700">
              Create a profile and swipe through personalized job openings. Get AI-driven recommendations and instant notifications for matches.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Recruiters</h3>
            <p className="text-gray-700">
              Quickly browse and connect with top talent. Swipe through candidate profiles and reach out directly through our in-app chat.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Companies</h3>
            <p className="text-gray-700">
              Streamline your hiring process with our swipe-to-hire platform. Promote your brand and find the right candidates faster than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Highlight (brief) */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why JobMinglr?</h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-12">
            JobMinglr combines a familiar swipe interface with powerful AI matching to make job hunting and hiring quick, easy, and fun&#8203;:. Here are a few highlights:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Swipe-Based Matching</h3>
              <p className="text-gray-600 text-sm">
                Quickly browse jobs or candidates with a simple swipe&#8203;:. It’s fast, intuitive, and engaging.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">AI-Powered Suggestions</h3>
              <p className="text-gray-600 text-sm">
                Get smart recommendations every time you use the platform, thanks to AI that learns your preferences&#8203;:.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">In-App Chat</h3>
              <p className="text-gray-600 text-sm">
                Connect and communicate instantly through built-in messaging to streamline the hiring process&#8203;:.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Mobile Optimized</h3>
              <p className="text-gray-600 text-sm">
                Use JobMinglr anytime, anywhere. The experience is fully optimized for your phone or tablet&#8203;:.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/features" className="text-brandGreen font-medium hover:underline">
              See all features &raquo;
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action / Newsletter Signup */}


      <section className="container mx-auto text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Stay in the loop</h2>
        <p className="text-gray-700 mb-6">Join our newsletter to get the latest updates on JobMinglr, including our launch in Austin, TX and new features.</p>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brandGreen-light"
            />
            <button
              type="submit"
              className="bg-brandGreen text-white px-6 py-2 rounded hover:bg-brandGreen-dark transition"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Beautiful toast alert within section */}
        {showToast && (
          <div className="mt-6 inline-flex items-center bg-brandGreen text-white text-sm font-medium px-5 py-3 rounded-lg shadow animate-fade-in-out transition-all duration-500">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            You're subscribed! Thanks for joining.
          </div>
        )}
      </section>

      <div className="absolute bottom-5 right-5 w-40 h-auto bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/images/qr.png)' }}></div>

    </Layout1>
  );
};

export default HomePage;
