import React, { useState } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";
import { navigate } from "gatsby";
import bannerImg from "../images/pinpointlogo.jpeg";

const PinPointPage = () => {
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
        title="Pinpoint Integration"
        description="Pinpoint Integration X JobMinglr"
      />
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-brandGreen" data-aos="fade-up">JobMinglr &amp; Pinpoint ATS Integration</h1>
        <p className="mt-4 text-xl text-gray-700" data-aos="fade-up">Swipe. Connect. Hired.</p>
        <div className="max-w-3xl mx-auto mt-10 mb-16 text-left text-gray-700 space-y-6" data-aos="fade-up" data-aos-delay="250">
          <p>Hiring shouldn’t mean sorting through hundreds of unqualified resumes. With JobMinglr and <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Pinpoint</a>, you put your open roles in front of the right people — automatically. Our swipe-to-match platform surfaces only high-fit, match-scored candidates, and every application flows directly into Pinpoint with an ATS-ready resume.</p>
          <p>The result? Faster screening, better candidate quality, and a seamless recruiter workflow.</p>

          <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer">
            <div
              className="mb-8 rounded-xl transform transition-transform duration-500 hover:scale-105 object-cover max-w-xs mx-auto"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={bannerImg}
                alt="PinpointLogo"
                className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 object-cover"
              />
            </div>
          </a>

          <h2 className="text-2xl font-bold text-brandGreen">How does <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Pinpoint</a> and JobMinglr integration work?</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Automatic job syncing</strong><br />JobMinglr connects directly with Pinpoint to pull in your active roles. We check your dashboard daily, so any new postings or updates are reflected in JobMinglr automatically — no extra steps for your team.</li>
            <li><strong>Intelligent candidate matching</strong><br />Not everyone gets to apply. JobMinglr’s proprietary algorithm analyzes skills, titles, and role requirements, then scores every candidate. Only those who meet your criteria and reach a high match score can swipe right and apply.</li>
            <li><strong>Seamless application delivery</strong><br />When a candidate applies, their profile and a fully standardized, ATS-optimized resume are delivered straight back into Pinpoint. Your team sees applicants instantly and can review them just like any other candidate.</li>
            <li><strong>A streamlined recruiter experience</strong><br />No extra logins. No manual exports. No clunky tools. The integration keeps everything inside Pinpoint, so your hiring process stays consistent while your talent pool gets stronger.</li>
          </ol>

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
                autoPlay
                playsInline
                preload="metadata"
                poster="/video-poster.jpg"
              >
                <source src="https://jobminglr-website.s3.us-east-1.amazonaws.com/JobMinglr+%2B+Pinpoint+(1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
          <h2 className="text-2xl font-bold text-brandGreen">How to connect <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Pinpoint</a> and JobMinglr</h2>
          <p>Getting started is simple and takes only a few minutes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide your <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Pinpoint</a> API key. This is the only setup step — no complex configuration.</li>
            <li>Sync begins automatically. Once connected, all of your active jobs flow into JobMinglr and refresh daily.</li>
            <li>Start receiving candidates. As soon as job seekers swipe and apply, their applications appear in your Pinpoint dashboard in real time.</li>
          </ul>
          <p>Our team is available to assist during setup and to answer any technical questions. Most customers are live with the integration the same day they connect.</p>

          <h2 className="text-2xl font-bold text-brandGreen">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Do you change my job postings?</p>
              <p className="ml-2 text-gray-600">No. Job details always come directly from Pinpoint — including job titles, descriptions, and links.</p>
            </div>
            <div>
              <p className="font-semibold">Can anyone apply?</p>
              <p className="ml-2 text-gray-600">No. JobMinglr only allows candidates who match your role and reach a high compatibility score to apply. This ensures you only see quality applicants.</p>
            </div>
            <div>
              <p className="font-semibold">What comes back into Pinpoint?</p>
              <p className="ml-2 text-gray-600">Every application includes the candidate’s profile plus a standardized, ATS-optimized resume. This format makes reviewing faster and keeps all applications consistent.</p>
            </div>
            <div>
              <p className="font-semibold">Can I choose what jobs to sync?</p>
              <p className="ml-2 text-gray-600">JobMinglr automatically syncs your Pinpoint jobs once per day. All active jobs are updated, and any edits you make in Pinpoint are reflected in JobMinglr automatically. There’s no manual sync process required.</p>
            </div>
            <div>
              <p className="font-semibold">How do I disconnect the integration?</p>
              <p className="ml-2 text-gray-600">You can disconnect anytime by removing your API key from the integration settings. Once removed, JobMinglr will stop syncing jobs and sending applications.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brandGreen">Connect now</h2>
          <p>Ready to supercharge your hiring pipeline? Connect Pinpoint with JobMinglr today and start receiving high-quality, match-scored candidates in your ATS.</p>
          <div className="text-center">
            <button onClick={() => navigate("/contact")}
              className="bg-brandGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-brandGreen-dark transition">
              Submit Integration Request &rarr;
            </button>
          </div>

          <h2 className="text-2xl font-bold text-brandGreen">Contact us</h2>
          <p>Have questions or need help with setup? Our partnership team is here to support you.</p>
          <p>📧 <a href="mailto:partners@jobminglr.com" className="text-brandGreen hover:underline">partners@jobminglr.com</a></p>
        </div>
      </section>
    </Layout1 >
  );
};

export default PinPointPage;
