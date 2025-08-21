import React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";
import { navigate } from "gatsby";

const PinPointPage = () => {
  return (
    <Layout1>
      <SEO1
        title="Pinpoint Integration"
        description="Pinpoint Integration X JobMinglr"
      />
      <section className="container mx-auto py-20 px-6 text-center">
        <div className="max-w-xl mx-auto mt-20 mb-16 text-left text-gray-700" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-3xl font-extrabold mb-2 text-brandGreen">JobMinglr × Pinpoint Integration</h2>
          <p className="mb-6 text-lg text-gray-600">Seamlessly connect JobMinglr with your Pinpoint ATS to streamline candidate sourcing and workflow.</p>

          <h3 className="text-xl font-semibold mb-2 text-brandGreen">What the integration does</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Automatically syncs sourced candidates from JobMinglr to your Pinpoint jobs</li>
            <li>Keeps candidate status up-to-date across both platforms</li>
            <li>Enables one-click candidate push from JobMinglr to Pinpoint</li>
            <li>Reduces manual data entry and errors</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-brandGreen">How it works</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-1">
            <li>Connect your Pinpoint account to JobMinglr with a secure API key.</li>
            <li>Select which jobs you want to sync candidates to.</li>
            <li>Sourced candidates in JobMinglr are instantly available in Pinpoint.</li>
            <li>Candidate updates and notes can flow between the two systems.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2 text-brandGreen">Getting started</h3>
          <p className="mb-6">
            Ready to activate the integration? Simply submit a request below and our team will help you connect your Pinpoint and JobMinglr accounts.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-brandGreen">FAQs</h3>
          <div className="mb-6">
            <div className="mb-3">
              <p className="font-semibold">Q: Is this integration secure?</p>
              <p className="ml-2 text-gray-600">A: Yes, all data is transferred securely using encrypted connections. Your API keys are never shared.</p>
            </div>
            <div className="mb-3">
              <p className="font-semibold">Q: Will existing candidates in Pinpoint be affected?</p>
              <p className="ml-2 text-gray-600">A: No, the integration only adds new candidates sourced from JobMinglr to your selected Pinpoint jobs.</p>
            </div>
            <div className="mb-3">
              <p className="font-semibold">Q: Can I choose which jobs to sync?</p>
              <p className="ml-2 text-gray-600">A: Absolutely! You control which jobs receive candidates from JobMinglr.</p>
            </div>
            <div>
              <p className="font-semibold">Q: How do I disconnect the integration?</p>
              <p className="ml-2 text-gray-600">A: You can disconnect anytime from your JobMinglr account settings, or contact our team for assistance.</p>
            </div>
          </div>

          <div className="mb-6 justify-center text-center" data-aos-delay="300">
            <button onClick={() => navigate("/contact")}
              className="bg-brandGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-brandGreen-dark transition justify-center">
              Submit Integration Request &rarr;
            </button>
          </div>
          <div>
            <span className="text-gray-700">Questions? Contact our partner team at </span>
            <a href="mailto:partners@jobminglr.com" className="text-brandGreen hover:underline">partners@jobminglr.com</a>
          </div>
        </div>

        <div className="text-gray-800 mt-16 space-y-2 max-w-xl mx-auto text-sm sm:text-base" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mt-10">📍 JobMinglr HQ</h2>
          <p>701 Brazos Street, Austin, TX 78701</p>
          <p>📞 (512) 240-2349</p>
          <p>✉️ <a href="mailto:support@jobminglr.com" className="text-brandGreen hover:underline">support@jobminglr.com</a></p>
          <h3 className="text-lg font-semibold mt-6">🕘 Business Hours</h3>
          <p>Mon–Fri: 9 AM – 5 PM</p>
          <p>Sat & Sun: Closed</p>
        </div>
      </section>
    </Layout1>
  );
};

export default PinPointPage;
