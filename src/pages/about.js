// src/pages/about.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";

const AboutPage = () => {
  return (
    <Layout1>
      <SEO1 
        title="About" 
        description="Learn about JobMinglr's mission to simplify job searching and hiring with swipe-based matching and AI technology." 
      />
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6">About JobMinglr</h1>
        <p className="text-gray-800 text-lg mb-6">
          <strong>JobMinglr</strong> is a cutting-edge job matching platform that simplifies your search for the perfect role or candidate&#8203;. By blending modern technology with an intuitive swipe-based interface, we make finding the right match quick, easy, and enjoyable&#8203;:.
        </p>
        <p className="text-gray-800 mb-6">
          Our mission is to remove the friction from job hunting and recruiting. Whether you’re a job seeker looking for your dream job or a recruiter searching for the ideal candidate, JobMinglr is designed to connect people in a fast and fun way. 
        </p>
        <p className="text-gray-800 mb-6">
          Founded in 2024 and launching first in Austin, Texas, our team saw an opportunity to modernize the hiring process. We believe that swiping right or left isn’t just for dating &mdash; it can revolutionize how talent finds opportunity. With the power of AI-driven recommendations and a user-friendly app, JobMinglr aims to be the ultimate job search companion&#8203;: for the modern workforce.
        </p>
        <p className="text-gray-800">
          As we grow, we remain committed to our core values: innovation, inclusivity, and empowerment. Join us on this journey to transform the way job seekers and employers find their perfect match.
        </p>
      </section>
    </Layout1>
  );
};

export default AboutPage;
