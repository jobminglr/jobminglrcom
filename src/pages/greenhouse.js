import React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";
import { navigate } from "gatsby";

const GreenhousePage = () => {
  return (
    <Layout1>
      <SEO1
        title="Greenhouse Integration"
        description="JobMinglr + Greenhouse Integration"
      />
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-brandGreen" data-aos="fade-up">
          JobMinglr + Greenhouse Integration
        </h1>

        <div
          className="max-w-3xl mx-auto mt-10 mb-16 text-left text-gray-700 space-y-6"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <p>
            Looking to supercharge your hiring with smarter matches? If you’re
            already using Greenhouse, you can now connect JobMinglr directly from
            the Greenhouse Marketplace.
          </p>

          <h2 className="text-2xl font-bold text-brandGreen">Why connect JobMinglr to Greenhouse?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Seamless Integration</strong> – Get quality candidates synced into your Greenhouse pipeline.</li>
            <li><strong>Smarter Matching</strong> – Our proprietary match score ensures you see the most relevant applicants first.</li>
            <li><strong>Frictionless Experience</strong> – Candidates swipe, match, and apply through JobMinglr; you receive them instantly in Greenhouse.</li>
            <li><strong>No Extra Cost</strong> – The integration is free to enable from the Greenhouse Marketplace.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brandGreen">How to Get Started</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Visit the <a href="https://integrations.greenhouse.com/" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse Marketplace</a>
            </li>
            <li>Search for JobMinglr</li>
            <li>Click Connect and follow the setup steps</li>
            <li>Start receiving high-quality matches in real time</li>
          </ol>

          <p>
            ✅ <strong>Already a Greenhouse customer?</strong> Enable JobMinglr today
            and start hiring smarter — for free.
          </p>

          <p>
            💡 <strong>Interested in Greenhouse but don’t have an account yet?</strong>{" "}
            Contact us and we’ll assist you with getting started.
          </p>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-brandGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-brandGreen-dark transition"
            >
              Submit Integration Request &rarr;
            </button>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default GreenhousePage;