// src/pages/blog/index.js
import * as React from "react";
import Layout1 from "../../components/Layout1";
import SEO1 from "../../components/SEO1";
import { Link } from "gatsby";

const BlogIndexPage = () => {
  return (
    <Layout1>
      <SEO1 
        title="Blog" 
        description="JobMinglr Blog - Read articles and insights about job search, hiring trends, and JobMinglr updates." 
      />
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">JobMinglr Blog</h1>
        <p className="text-gray-700 mb-12 text-lg">Insights, tips, and updates about modern job searching and hiring.</p>
        
        <div className="space-y-12">
          <article>
            <h2 className="text-2xl font-semibold text-brandGreen mb-2">
              <Link to="/blog/swipe-to-hire" className="hover:underline">
                Swipe-to-Hire: A New Era in Recruiting
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-1">January 5, 2025</p>
            <p className="text-gray-800">
              How swipe-based apps are changing the hiring landscape. We explore the origins of the swipe-to-hire concept and how platforms like JobMinglr are making recruitment faster and more engaging...
            </p>
            <Link to="/blog/swipe-to-hire" className="text-brandGreen hover:underline text-sm">
              Read more &raquo;
            </Link>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-brandGreen mb-2">
              <Link to="/blog/job-hunting-trends" className="hover:underline">
                Job Hunting Trends in 2025
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-1">February 20, 2025</p>
            <p className="text-gray-800">
              The job market is evolving with new technologies and trends. From AI-driven resume screening to mobile-first job applications, here are the top 5 trends every job seeker and recruiter should know...
            </p>
            <Link to="/blog/job-hunting-trends" className="text-brandGreen hover:underline text-sm">
              Read more &raquo;
            </Link>
          </article>
        </div>
      </section>
    </Layout1>
  );
};

export default BlogIndexPage;
