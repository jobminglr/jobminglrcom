import React, { useState } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";
import { navigate } from "gatsby";
import GreenHouseContactPage from "./greenhousecontact";
const GreenhousePage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // -5deg .. 5deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10; // -5deg .. 5deg
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

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
          <div className="space-y-0">
            <p>
              JobMinglr makes hiring simple by matching quality candidates with the right roles.
            </p>

            <p>When combined with Greenhouse, you get a seamless way to manage applications and speed up your hiring process.</p>

            <p>Best of all, setting up the integration only takes a few minutes — and it’s free.
            </p>

            <p>You can find JobMinglr in the <a href="https://integrations.greenhouse.com/" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse Marketplace</a>
            </p>

            <p>For setting up your integration, follow this <a href="https://support.greenhouse.io/hc/en-us/articles/40195031336475-Jobminglr-integration" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Setup Guide</a> provided by Greenhouse.
            </p>
          </div>

          <div className="mx-auto max-w-3xl" style={{ perspective: '1000px' }}>
            <div
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur overflow-hidden transition-transform duration-200 will-change-transform"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            >
              {/* subtle gradient edge */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />

              <video
                className="block w-full h-full aspect-video object-cover"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video-poster.jpg"
              >
                <source
                  src="https://jobminglr-website.s3.us-east-1.amazonaws.com/JobMinglr+%2B+Greenhouse+(1).mp4#t=1"
                  type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>

          <h2 className="text-2xl font-bold text-brandGreen">How to Get Started
          </h2>

          <GreenHouseContactPage />
          <h2 className="text-2xl font-bold text-brandGreen">FAQs</h2>

          <div className="max-w-xl mx-auto mt-16 text-gray-800" data-aos="fade-up" data-aos-delay="300">
            <div className="mt-4 space-y-3">
              {/* Q1 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>1) How do I enable the Greenhouse & JobMinglr integration?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>Follow the official Greenhouse instructions here:</p>
                  <p>👉 <span className="font-medium"><a href="https://support.greenhouse.io/hc/en-us/articles/40195031336475-Jobminglr-integration" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse Support — JobMinglr Integration</a></span></p>
                </div>
              </details>

              {/* Q2 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>2) Where can I find my Job Board Token?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>Your Job Board Token is the last part of your Greenhouse job board URL.</p>
                  <p>
                    In <a href="https://app9.greenhouse.io/dashboard" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse</a>, go to <strong>Configure ⚙️ → Job Board</strong>. Select the job board you use for external postings.
                  </p>
                  <p>Look at the URL for your board:</p>
                  <pre className="bg-gray-50 border border-gray-200 rounded p-2 text-xs overflow-x-auto">https://boards.greenhouse.io/examplecompany</pre>
                  <p>
                    Here, your token is: <code className="font-mono">examplecompany</code>
                  </p>
                  <p>
                    Enter only this token (<code className="font-mono">examplecompany</code>) into the JobMinglr form.
                  </p>
                </div>
              </details>

              {/* Q3 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>3) How do I get my Harvest API Key?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>
                    Harvest API Keys can’t be recovered once created. If you lose yours, you’ll need to generate a new one. Please follow the instructions on the Greenhouse integrations page here:
                  </p>
                  <p>👉 <span className="font-medium"><a href="https://support.greenhouse.io/hc/en-us/articles/40195031336475-Jobminglr-integration" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse Support — JobMinglr Integration</a></span></p>
                </div>
              </details>

              {/* Q4 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>4) How do I find my On-Behalf-Of User ID?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>
                    The On-Behalf-Of User ID is the Greenhouse user ID of the account that created your Harvest API Key.
                  </p>
                  <p>
                    In <a href="https://app9.greenhouse.io/dashboard" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Greenhouse</a>, go to <strong>Configure ⚙️ → Users</strong>. Find and click the user who created your API Key.
                  </p>
                  <p>Look at the URL in your browser — it ends with a number.</p>
                  <pre className="bg-gray-50 border border-gray-200 rounded p-2 text-xs overflow-x-auto">https://app.greenhouse.io/users/12345</pre>
                  <p>
                    Here, <code className="font-mono">12345</code> is the On-Behalf-Of User ID. Copy that number and provide it to JobMinglr.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section >
    </Layout1 >
  );
};

export default GreenhousePage;