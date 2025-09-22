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
  const [now, setNow] = useState(new Date());
  const timeLabel = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(now);

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

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const aosAnimation = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      { threshold: 0.5 },
    );
    aosAnimation.forEach((aosObject) => {
      observer.observe(aosObject);
    });
    return () => {
      observer.disconnect();
    };
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
    <div className="overflow-x-hidden h-screen overflow-y-scroll snap-y scroll-smooth">
      <Layout1>
        <SEO1
          title="Home"
          description="JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."
        />

        <section
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-90" />
          <div className="relative w-full max-w-6xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
              data-aos="fade-up"
            >
              Swipe. Connect. Hired.
            </h1>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden h-[560px] flex flex-col"
                style={{ width: '320px', margin: '0 auto' }}
                // onMouseMove={handleMouseMove}
                // onMouseLeave={handleMouseLeave}
                // style={{
                //   // height: '80%',
                //   maxWidth: '360px',
                //   margin: '0 auto',
                //   transform: `rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)`,
                //   transition: 'transform 120ms ease-out',
                //   transformStyle: 'preserve-3d',
                //   willChange: 'transform'
                // }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/*  <div className="flex items-center justify-between px-4 pt-2 text-[10px] font-semibold text-[#37473C]">
                  <span>{timeLabel}</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" strokeWidth="2" />
                      <line x1="23" y1="10" x2="23" y2="14" strokeWidth="2" />
                    </svg>
                  </span>
                </div> */}

                <div className="flex-1 flex items-center justify-center px-5 bg-gradient-to-b from-[#F6F1E6] to-[#c0392b]">
                  <div className="bg-[#ffffff] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-[420px]">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2F6858] mb-3 md:mb-4">I’m looking for a job</h3>
                      <ul className="list-none md:list-disc md:list-inside space-y-1 md:space-y-2 text-base">
                        <li>Swipe through jobs.</li>
                        <li>Connect with recruiters.</li>
                        <li>Get hired faster.</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("jobMinglrForSeekersSection")}
                      className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#002923] text-white font-semibold shadow hover:brightness-95 transition"
                    >
                      Get hired faster
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden h-[560px] flex flex-col"
                style={{ width: '320px', margin: '0 auto' }}
                // onMouseMove={handleMouseMove}
                // onMouseLeave={handleMouseLeave}
                // style={{
                //   // height: '80%',
                //   maxWidth: '360px',
                //   margin: '0 auto',
                //   transform: `rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)`,
                //   transition: 'transform 120ms ease-out',
                //   transformStyle: 'preserve-3d',
                //   willChange: 'transform'
                // }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* <div className="flex items-center justify-between px-4 pt-2 text-[10px] font-semibold text-[#37473C]">
                  <span>{timeLabel}</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" strokeWidth="2" />
                      <line x1="23" y1="10" x2="23" y2="14" strokeWidth="2" />
                    </svg>
                  </span>
                </div> */}
                {/* <div className="h-2" /> */}
                <div className="flex-1 flex items-center justify-center px-5 bg-gradient-to-b from-[#F6F1E6] to-[#c0392b]">
                  <div className="bg-white text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#E6D9C8]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-[420px]">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2F6858] mb-3 md:mb-4">I’m hiring</h3>
                      <ul className="list-none md:list-disc md:list-inside space-y-1 md:space-y-2 text-base">
                        <li>Post jobs instantly.</li>
                        <li>Match with qualified candidates.</li>
                        <li>Make the right hire.</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => scrollToSection("jobMinglrForRecruiterSection")}
                      className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#002923] text-white font-semibold shadow hover:brightness-95 transition"
                    >
                      Start hiring
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <button
              className="block text-3xl mt-12 animate-bounce cursor-pointer mx-auto"
              onClick={() => scrollToSection("jobMinglrForSection")}
              aria-label="Scroll to next section"
            >
              ⌄
            </button> */}
          </div>
        </section>

        <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden min-h-screen snap-start">
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
            <div className="mx-auto max-w-3xl" style={{ perspective: '1000px' }}>
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
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster="/video-poster.jpg"
                >
                  <source src="https://jobminglr-website.s3.us-east-1.amazonaws.com/jobminglr+website+video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

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

        <section id="jobMinglrForSeekersSection"
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-90" />
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brandGreen blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-700 blur-3xl animate-pulse" />
          </div>
          <div className="relative  max-w-6xl">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  height: '80%',
                  maxWidth: '360px',
                  margin: '0 auto',
                  transform: `rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)`,
                  transition: 'transform 1020ms ease-out',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Swipe</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Swipe jobs that fits.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/job+listing+light+green.JPG"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                style={{ height: '80%', maxWidth: '360px', margin: '0 auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Connect</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Connect with recruiters in‑app.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/chat.png"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                style={{ height: '80%', maxWidth: '360px', margin: '0 auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Hired</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Hired on the spot.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/you+start+monday.jpg"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div><a href="https://apps.apple.com/us/app/jobminglr/id6738838504" target="_blank" rel="noopener noreferrer">Download JobMinglr</a> today on the Apple App Store & Google Play Store.</div>

          </div>
        </section>

        <section id="jobMinglrForRecruiterSection"
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-90" />
          <div className="relative max-w-6xl">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                style={{ height: '80%', maxWidth: '360px', margin: '0 auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Post</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Post jobs instantly.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/job+listing+green.JPG"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                style={{ height: '80%', maxWidth: '360px', margin: '0 auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Match</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Match with qualified candidates.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/job+listing+beige.JPG"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col aspect-[9/20]"
                style={{ height: '80%', maxWidth: '360px', margin: '0 auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1F513F] text-center">Hire</h3>
                    <p className="text-xs font-semibold text-[#EB5B53] text-center mt-1">Hire the right fit.</p>
                    <div className="mt-4 bg-white rounded-[24px] border border-[#E6D9C8] shadow-lg w-full aspect-[9/20] overflow-hidden">
                      <img
                        src="https://jobminglr-website.s3.us-east-1.amazonaws.com/offer+sent.jpg"
                        alt="In-app chat mockup"
                        className="w-full h-full object-contain block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div><a href="https://apps.apple.com/us/app/jobminglr/id6738838504" target="_blank" rel="noopener noreferrer">Download JobMinglr</a> today on the Apple App Store & Google Play Store.</div>

          </div>
        </section>

        <section id="jobMinglrForSection" className="container mx-auto py-16 px-6 text-center snap-start">
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

        <section className="bg-white py-16 px-6 snap-start">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Connect JobMinglr to your favorite ATS in minutes.</h2>
            <div className="mt-6 grid grid-cols-2 gap-8 items-center justify-items-center">
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/GREENHOUSE_WORDMARK_GREEN.png"
                alt="Greenhouse ATS logo"
                className="h-40 w-auto object-contain opacity-90"
                loading="lazy"
              />
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/pinpoint+logo.png"
                alt="Pinpoint ATS logo"
                className="h-40 w-auto object-contain opacity-90"
                loading="lazy"
              />
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
    </div >
  );
};

export default HomePage;
