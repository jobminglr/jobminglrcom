import React, { useState, useEffect, useRef } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import { graphql, useStaticQuery } from "gatsby";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [appLink, setAppLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // -5deg .. 5deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10; // -5deg .. 5deg
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const enterPiP = async () => {
    try {
      if (
        typeof document !== 'undefined' &&
        videoRef.current &&
        'pictureInPictureEnabled' in document
      ) {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      }
    } catch (err) {
      console.error('PiP error', err);
    }
  };

  const handleSubscribe = async (e) => {

    e.preventDefault();

    const data = {
      name: "Subscriber",
      email: email,
      message: "Subscribe",
    };

    try {
      const response = await fetch("https://it96ohh4nc.execute-api.us-east-1.amazonaws.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        setEmail("");
      } else {
        console.error("Failed to send subscription");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const getAppLink = () => {
      try {
        if (typeof window !== 'undefined') {
          const isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
          const isAndroidDevice = /Android/i.test(navigator.userAgent);

          if (isAppleDevice) {
            return "https://apps.apple.com/us/app/jobminglr/id6738838504";
          } else if (isAndroidDevice) {
            return "https://play.google.com/store/apps/details?id=com.jobminglr.in.android&utm_source=na_Med";
          } else {
            return "https://apps.apple.com/us/app/jobminglr/id6738838504";
          }
        }
      } catch (e) {
        return "https://apps.apple.com/us/app/jobminglr/id6738838504";
      }
    };

    setAppLink(getAppLink());
  }, []);


  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "JobApplication.jpg" }) {
        publicURL
      }
    }
  `);

  const imageUrl = data.file.publicURL;

  return (
    <div className="overflow-x-hidden">
      <Layout1>
        <SEO1
          title="Home"
          description="JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."
        />

        <section
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-90" />
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg" data-aos="fade-up">
              Swipe. Connect. Hired.
            </h1>
            <p className="text-lg sm:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
              Your next career move is just a swipe away.
            </p>
            <div className="flex justify-center flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-col items-center">
                <span className="inline-block mb-4 px-3 py-1 bg-white text-brandGreen text-sm font-semibold rounded-full shadow">
                  🚀 Launching in Austin, TX
                </span>
                <a
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brandGreen font-semibold px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  Download JobMinglr
                </a>
              </div>
            </div>
            <button
              className="block text-3xl mt-12 animate-bounce cursor-pointer mx-auto"
              onClick={() => scrollToSection("jobMinglrForSection")}
            >
              ⌄
            </button>
          </div>
        </section>

        {/* Demo video — interactive 3D card with PiP and modal */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
          {/* background accents */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brandGreen blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-700 blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 ring-1 ring-white/20">Product demo</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4">See JobMinglr in action</h2>
              <p className="text-gray-300 mt-2">A quick peek at swipe, match score, and chat—right inside the app.</p>
            </div>

            {/* perspective wrapper */}
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
                  ref={videoRef}
                  className="block w-full h-full aspect-video object-cover"
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster="/video-poster.jpg"
                >
                  <source src="https://jobminglr-website.s3.us-east-1.amazonaws.com/jobminglr+website+video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* floating controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play or pause demo"
                    className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
                  >
                    Play/Pause
                  </button>
                  <button
                    type="button"
                    onClick={enterPiP}
                    aria-label="Toggle Picture in Picture"
                    className="px-4 py-2 rounded-full bg-black/70 text-white text-sm font-semibold ring-1 ring-white/30 hover:bg-black/80 transition"
                  >
                    PiP
                  </button>
                  <button
                    type="button"
                    onClick={openModal}
                    aria-label="Open full-screen demo"
                    className="px-4 py-2 rounded-full bg-brandGreen text-white text-sm font-semibold hover:scale-105 transition"
                  >
                    Watch full demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* modal overlay */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
              <div className="relative w-full max-w-5xl">
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close demo"
                  className="absolute -top-10 right-0 text-white/80 hover:text-white"
                >
                  ✕ Close
                </button>
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/20 bg-black">
                  <video
                    className="w-full h-full aspect-video object-contain bg-black"
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    poster="/video-poster.jpg"
                  >
                    <source src="https://jobminglr-website.s3.us-east-1.amazonaws.com/jobminglr+website+video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="jobMinglrForSection" className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Who is JobMinglr for?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {[
              {
                title: "Job Seekers",
                points: [
                  "Instantly build your profile with your resume",
                  "Match score only shows jobs you likely to get",
                  "Swipe Right. You applied.",
                ],
              },
              {
                title: "Job Recruiters",
                points: [
                  "Quality candidates",
                  "In-App chat",
                  "Application directly to your dashboard",
                  "Integrated with Greenhouse",
                ],
              },
            ].map(({ title, points }, idx) => (
              <div
                key={title}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition text-center w-full h-full flex flex-col justify-start"
                data-aos="fade-up"
                data-aos-delay={`${idx * 200}`}
              >
                <h3 className="text-2xl font-semibold mb-3 text-brandGreen">{title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why JobMinglr?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Swipe Matching", "Match Score Suggestions", "In-App Chat", "Mobile Optimized"].map((feature, idx) => (
                <div key={feature} className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg" data-aos="zoom-in" data-aos-delay={`${idx * 200}`}>
                  <h3 className="font-semibold text-xl">
                    {feature === "Swipe Matching"
                      ? "🔄 Swipe Matching"
                      : feature === "Match Score Suggestions"
                        ? "🤖 Match Score Suggestions"
                        : feature === "In-App Chat"
                          ? "💬 In-App Chat"
                          : "📱 Mobile Optimized"}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {feature === "Swipe Matching"
                      ? "Fast, intuitive swipe-based browsing."
                      : feature === "Match Score Suggestions"
                        ? "Personalized Match Score-driven recommendations."
                        : feature === "In-App Chat"
                          ? "Instant messaging built right into the platform."
                          : "Fully optimized mobile experience."}
                  </p>
                </div>
              ))}
            </div>
            {/* <Link to="/features" className="mt-10 inline-block text-brandGreen hover:underline">
              See all features &raquo;
            </Link> */}
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">What our users say</h2>
            <div className="space-y-8">
              <blockquote className="text-lg italic text-gray-800" data-aos="fade-left">
                “I landed my dream job within a week. The swipe feature is genius!”
                <footer className="mt-2 text-sm text-gray-500">– Abhay S., Software Engineer</footer>
              </blockquote>
              <blockquote className="text-lg italic text-gray-800" data-aos="fade-left">
                “Saves hours of filtering resumes. A must-have for recruiters.”
                <footer className="mt-2 text-sm text-gray-500">– William R., Hiring Manager</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="container mx-auto text-center py-16 px-6">
          <h2 className="text-2xl font-bold mb-4">Stay in the loop</h2>
          <p className="mb-6 text-gray-700">
            Join our newsletter for updates on JobMinglr’s launch in Austin, TX, and upcoming features.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border rounded focus:ring-2 focus:ring-brandGreen-light"
            />
            <button type="submit" className="bg-brandGreen text-white px-6 py-2 rounded hover:bg-brandGreen-dark transition">
              Subscribe
            </button>
          </form>

          {showToast && (
            <div className="mt-6 inline-flex items-center bg-brandGreen text-white px-5 py-3 rounded-lg shadow animate-fade-in-out">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              You're subscribed! Thanks for joining.
            </div>
          )}
        </section>
      </Layout1>
    </div>
  );
};

export default HomePage;
