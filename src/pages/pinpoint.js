import React, { useState, useEffect, useRef, useCallback } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";
import bannerImg from "../images/pinpointlogo.jpeg";
import PinpointContactPage from "./pinpointcontact";

const PinPointPage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(true);
  const videoRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nextX = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // -5..5
    const nextY = ((e.clientY - rect.top) / rect.height - 0.5) * -10; // -5..5

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setTilt({ x: nextX, y: nextY }));
  }, [tiltEnabled]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const pointerFine = window.matchMedia('(pointer: fine)');
    const update = () => setTiltEnabled(pointerFine.matches);
    update();
    pointerFine.addEventListener('change', update);
    return () => pointerFine.removeEventListener('change', update);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0.01;
      } catch (_) { /* no-op */ }
    }
  }, []);

  return (
    <Layout1>
      <SEO1
        title="Pinpoint Integration"
        description="Pinpoint Integration X JobMinglr"
      />
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-brandGreen" data-aos="fade-up">JobMinglr &amp; Pinpoint ATS Integration</h1>
        <br />

        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="flex-1 text-left space-y-4 md:pr-6">
            <p>JobMinglr makes hiring simple by matching quality candidates with the right roles. With our partnership with Pinpoint, you get a seamless way to manage applications and speed up your hiring process.</p>
            <p>Best of all, setting up the integration only takes a few minutes and it’s free.</p>
            <p>Find JobMinglr on the <a href="https://www.pinpointhq.com/integrations/jobminglr" target="_blank" rel="noopener noreferrer" className="text-brandGreen hover:underline">Pinpoint Marketplace</a>. </p>
          </div>

          <div className="flex-1 w-full md:w-auto md:max-w-none [perspective:1000px]">
            <div
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur overflow-hidden transition-transform duration-200 will-change-transform"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
              <video
                ref={videoRef}
                className="block w-full h-full aspect-video object-cover"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay={!prefersReducedMotion}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source
                  src="https://jobminglr-website.s3.us-east-1.amazonaws.com/JobMinglr+%2B+Pinpoint+(1).mp4"
                  type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <section className="bg-brandGreen/5 py-20">

          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="flex-1 text-left space-y-4 md:pr-6">
              <h2 className="text-2xl font-bold text-brandGreen">How to connect Pinpoint to JobMinglr</h2>
              <p>1) Create an API Key for JobMinglr.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Follow this guide:{" "}
                  <a
                    href="https://help.pinpoint.support/en/articles/9353462-how-do-i-generate-a-pinpoint-api-key"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:underline"
                  >
                    Generate a Pinpoint API Key
                  </a>
                </li>
              </ul>

              <p className="font-semibold">API Key Permissions</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Candidate: Read &amp; Write</li>
                <li>Application: Read &amp; Write</li>
                <li>Job: Read</li>
                <li>Interview: Read</li>
                <li>Answer: Read &amp; Write</li>
              </ul>

              <p>2) Create a webhook for JobMinglr.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Follow this guide:{" "}
                  <a
                    href="https://help.pinpoint.support/en/articles/10176739-custom-integrations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:underline"
                  >
                    Custom Integrations
                  </a>
                </li>
                <li>
                  Webhook URL:{" "}
                  <a
                    href="https://webhook.jobminglr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:underline"
                  >
                    https://webhook.jobminglr.com
                  </a>
                </li>
              </ul>

              <p className="font-semibold">Events to Send:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>New Application</li>
                <li>Application Stage Changed</li>
                <li>Offer Accepted</li>
                <li>Applicant Hired</li>
                <li>Document Request Accepted</li>
                <li>Job Updated</li>
                <li>Job Deleted</li>
                <li>Interview Scheduled</li>
              </ul>
            </div>

            <div className="flex-1 text-left space-y-4 md:pr-6">
              <h2 className="text-2xl font-bold text-brandGreen">Fill out the form with the required information</h2>
              <PinpointContactPage />
            </div>
          </div>
        </section>
        <br />
        <br />
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">

          <div className="flex-1 text-left space-y-4 md:pr-6">
            <h2 className="text-2xl font-bold text-brandGreen">Don't have an ATS?</h2>
            <p>Not using Pinpoint yet? Book a demo with Pinpoint to explore how it can support your hiring process.</p>
          </div>
          <div className="flex-1 w-full md:w-auto md:max-w-none" style={{ perspective: '1000px' }}>
            <a href="https://www.pinpointhq.com/?utm_source=partner&utm_medium=marketplace&utm_campaign=jobminglr" target="_blank" rel="noopener noreferrer">
              <div
                className="mb-8 rounded-xl transform transition-transform duration-500 hover:scale-105 object-cover max-w-xs mx-auto"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={bannerImg}
                  alt="PinpointLogo"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 object-cover"
                />
              </div>
            </a>
          </div>

        </div>
        <br />
        <div className="bg-brandGreen/5"><br />
          <h2 className="text-2xl font-bold text-brandGreen">FAQs</h2>
          <div className="max-w-xl mx-auto  text-gray-800" data-aos="fade-up" data-aos-delay="300">
            <div className="mt-4 space-y-3">
              {/* Q1 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>1) Do you change my job postings?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>No. Job details always come directly from Pinpoint — including job titles, descriptions, and links.</p>
                </div>
              </details>

              {/* Q2 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>2) Can anyone apply?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>No. JobMinglr only allows candidates who match your role and reach a high compatibility score to apply. This ensures you only see quality applicants.</p>
                </div>
              </details>

              {/* Q3 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>3) What comes back into Pinpoint?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>
                    Every application includes the candidate’s profile plus a standardized, ATS-optimized resume. This format makes reviewing faster and keeps all applications consistent.                </p>
                </div>
              </details>

              {/* Q4 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>4) Can I choose what jobs to sync?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>
                    JobMinglr automatically syncs your Pinpoint jobs once per day. All active jobs are updated, and any edits you make in Pinpoint are reflected in JobMinglr automatically. There’s no manual sync process required.</p>
                </div>
              </details>

              {/* Q5 */}
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="text-base font-medium cursor-pointer flex items-center justify-between">
                  <span>5) How do I disconnect the integration?</span>
                  <span className="ml-3 text-gray-500">▾</span>
                </summary>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                  <p>
                    You can disconnect anytime by removing your API key from the integration settings. Once removed, JobMinglr will stop syncing jobs and sending applications.</p>
                </div>
              </details>
              <br />
            </div>
          </div>
        </div>
      </section >
    </Layout1 >
  );
};

export default PinPointPage;
