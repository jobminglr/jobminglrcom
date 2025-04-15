// src/pages/testimonials.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";

const TestimonialsPage = () => {
  return (
    <Layout1>
      <SEO1 
        title="Testimonials" 
        description="See what job seekers and recruiters are saying about JobMinglr's swipe-to-hire platform." 
      />
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
        <p className="text-gray-700 text-lg mb-12">Hear from some of our early users and how JobMinglr has helped them in their job search or hiring process:</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="text-gray-800 text-xl italic">"I found my dream job in just two weeks using JobMinglr. The swipe feature made it so easy to quickly go through opportunities. It’s like the fun of a dating app, but for jobs!"</p>
            <p className="mt-4 font-semibold text-gray-900">Jane D.</p>
            <p className="text-gray-600 text-sm">Marketing Specialist</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="text-gray-800 text-xl italic">"As a recruiter, JobMinglr has streamlined the way I find candidates. Swiping through profiles is a game-changer – it saves me time, and I can quickly reach out to the best matches. We made two great hires in a month thanks to this app."</p>
            <p className="mt-4 font-semibold text-gray-900">John S.</p>
            <p className="text-gray-600 text-sm">Tech Recruiter</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="text-gray-800 text-xl italic">"The AI suggestions on JobMinglr are surprisingly spot on. I kept getting matched with jobs that were exactly what I was looking for. It took the stress out of job hunting for me."</p>
            <p className="mt-4 font-semibold text-gray-900">Alex P.</p>
            <p className="text-gray-600 text-sm">Software Engineer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="text-gray-800 text-xl italic">"We tried JobMinglr for our startup's hiring needs and it’s fantastic. The quality of candidates we found by swiping was great, and the direct chat made communication so much faster than email."</p>
            <p className="mt-4 font-semibold text-gray-900">Emily R.</p>
            <p className="text-gray-600 text-sm">Founder, Startup Co.</p>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default TestimonialsPage;
