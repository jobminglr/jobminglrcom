// src/pages/features.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import bannerImg from "../images/image3.png";

const FeaturesPage = () => {
  return (
    <Layout1>
      <SEO1
        title="Features"
        description="Discover JobMinglr's features: swipe-based job matching, AI recommendations, in-app chat, mobile optimization, personalized job alerts, and more."
      />

      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">JobMinglr Features</h1>
        <p className="text-gray-700 mb-12 text-lg">
          JobMinglr offers a range of features designed to make hiring and job seeking more efficient and enjoyable. Here’s a closer look at what you can do on our platform:
        </p>

        {/* Add Image */}
        <div className="mb-12 rounded-2xl transform transition-transform duration-500 hover:scale-110 object-cover">
          <img
            src={bannerImg}
            alt="JobMinglr Features Banner"
            className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 object-cover"
          />
        </div>


        <ul className="space-y-8">
          <li>
            <h2 className="text-2xl font-semibold">Swipe-Based Matching</h2>
            <p className="text-gray-600 ml-4">
              Quickly browse personalized job or candidate matches with a simple swipe. This swipe-right/swipe-left mechanism makes finding the right fit fast and fun.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">AI-Powered Suggestions</h2>
            <p className="text-gray-600 ml-4">
              Get smarter, more relevant recommendations every time you use the platform. Our AI learns from your preferences to show you opportunities or candidates that fit better each day.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">In-App Communication</h2>
            <p className="text-gray-600 ml-4">
              Connect directly within the app to streamline the hiring process. Once there’s a mutual interest, job seekers and recruiters can chat instantly without leaving JobMinglr.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Mobile Optimized</h2>
            <p className="text-gray-600 ml-4">
              Enjoy a seamless experience on any device, anywhere. JobMinglr is built mobile-first, so you can swipe and match on the go using our app or mobile site.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Personalized Recommendations</h2>
            <p className="text-gray-600 ml-4">
              Receive job suggestions tailored to your profile, skills, and interests. Job seekers get a curated feed of opportunities, and recruiters see candidates who best match their requirements.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Smart Application Tracking</h2>
            <p className="text-gray-600 ml-4">
              Manage your applications effortlessly and track your progress in real time. Know which jobs you’ve applied to and get updates when your application is viewed or progresses.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Resume Builder</h2>
            <p className="text-gray-600 ml-4">
              Create or upload your resume in minutes with our user-friendly tools. Keep your profile up-to-date and showcase your skills with ease.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Job Alerts & Notifications</h2>
            <p className="text-gray-600 ml-4">
              Stay updated with instant notifications for new job opportunities that match your preferences. Never miss out on a great opportunity because you’ll be the first to know.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">Secure and Reliable</h2>
            <p className="text-gray-600 ml-4">
              Enjoy peace of mind with robust security. Your data is protected with the highest standards, and we continuously improve our platform to keep your information safe.
            </p>
          </li>
        </ul>
      </section>
    </Layout1>
  );
};

export default FeaturesPage;
