// src/pages/features.js
import * as React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import bannerImg from "../images/image3.png";

const features = [
  {
    title: "Swipe-Based Matching",
    description:
      "Quickly browse personalized job or candidate matches with a simple swipe. This swipe-right/swipe-left mechanism makes finding the right fit fast and fun.",
  },
  {
    title: "AI-Powered Suggestions",
    description:
      "Get smarter, more relevant recommendations every time you use the platform. Our AI learns from your preferences to show you opportunities or candidates that fit better each day.",
  },
  {
    title: "In-App Communication",
    description:
      "Connect directly within the app to streamline the hiring process. Once there’s a mutual interest, job seekers and recruiters can chat instantly without leaving JobMinglr.",
  },
  {
    title: "Mobile Optimized",
    description:
      "Enjoy a seamless experience on any device, anywhere. JobMinglr is built mobile-first, so you can swipe and match on the go using our app or mobile site.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Receive job suggestions tailored to your profile, skills, and interests. Job seekers get a curated feed of opportunities, and recruiters see candidates who best match their requirements.",
  },
  {
    title: "Smart Application Tracking",
    description:
      "Manage your applications effortlessly and track your progress in real time. Know which jobs you’ve applied to and get updates when your application is viewed or progresses.",
  },
  {
    title: "Resume Builder",
    description:
      "Create or upload your resume in minutes with our user-friendly tools. Keep your profile up-to-date and showcase your skills with ease.",
  },
  {
    title: "Job Alerts & Notifications",
    description:
      "Stay updated with instant notifications for new job opportunities that match your preferences. Never miss out on a great opportunity because you’ll be the first to know.",
  },
  {
    title: "Secure and Reliable",
    description:
      "Enjoy peace of mind with robust security. Your data is protected with the highest standards, and we continuously improve our platform to keep your information safe.",
  },
];

const FeaturesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout1>
      <SEO1
        title="Features"
        description="Discover JobMinglr's features: swipe-based job matching, AI recommendations, in-app chat, mobile optimization, personalized job alerts, and more."
      />

      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
          JobMinglr Features
        </h1>
        <p className="text-gray-700 mb-12 text-lg" data-aos="fade-up" data-aos-delay="100">
          JobMinglr offers a range of features designed to make hiring and job seeking more efficient and enjoyable. Here’s a closer look at what you can do on our platform:
        </p>

        {/* Add Image */}
        <div
          className="mb-12 rounded-2xl transform transition-transform duration-500 hover:scale-110 object-cover"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={bannerImg}
            alt="JobMinglr Features Banner"
            className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 object-cover"
          />
        </div>

        <ul className="space-y-8">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p className="text-gray-600 ml-4">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout1>
  );
};

export default FeaturesPage;
