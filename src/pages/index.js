import React, { useState, useEffect, useRef } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import { graphql, useStaticQuery } from "gatsby";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../images/imagelogo.png";

const HomePage = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [appLink, setAppLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [now, setNow] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Lock scroll while loading
    if (typeof document !== 'undefined') {
      const prevOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';

      const handleLoaded = () => {
        setIsLoading(false);
        document.documentElement.style.overflow = prevOverflow || '';
      };

      // Page fully loaded
      if (typeof window !== 'undefined') {
        window.addEventListener('load', handleLoaded, { once: true });
      }

      // Fallback in case 'load' fires late
      const t = setTimeout(handleLoaded, 500);

      return () => {
        clearTimeout(t);
        if (typeof window !== 'undefined') {
          window.removeEventListener('load', handleLoaded);
        }
        document.documentElement.style.overflow = prevOverflow || '';
      };
    }
  }, []);
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

  if (isLoading) {
    return (
      <div className="min-h-[100svh] w-full bg-gradient-to-br from-brandGreen via-emerald-700 to-brandGreen-dark flex items-center justify-center p-6 animate-fade-in">
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <img
              src={img}
              alt="JobMinglr logo"
              className="h-20 w-auto object-contain animate-pulse drop-shadow-xl"
            />
            <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl animate-ping" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden min-h-[100svh] md:h-screen overflow-y-auto md:overflow-y-scroll md:snap-y scroll-smooth">
      <Layout1>
        <SEO1
          title="Home"
          description="JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."
        />
        <section
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
          style={{ backgroundImage: `url(https://jobminglr-website.s3.us-east-1.amazonaws.com/backgound-1.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-70" />
          <div className="relative w-full max-w-8xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-6 text-white drop-shadow-lg"
              data-aos="fade-up"
            >.
            </h1><h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-6 text-white drop-shadow-lg"
              data-aos="fade-up"
            >
              Swipe. Connect. Hired.
            </h1>
            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start text-left "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="relative bg-black rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto min-h-[420px] md:h-[560px] flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex-1 flex items-center justify-center px-5 bg-gradient-to-b from-[#5f1c15] to-[#c0392b]">
                  <div className="bg-[#ffffff] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-[380px] md:h-[520px]">
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
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto min-h-[420px] md:h-[560px] flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex-1 flex items-center justify-center px-5 bg-gradient-to-b from-[#5f1c15] to-[#c0392b]">
                  <div className="bg-white text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#E6D9C8]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-[380px] md:h-[520px]">
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
              <div className="container mx-auto max-w-6xl relative md:col-span-2">
                <div className="text-center mb-10">
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
          className=" text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
          style={{ backgroundImage: `url(https://jobminglr-website.s3.us-east-1.amazonaws.com/backgound-1.png)` }}

        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-70" />
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brandGreen blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-700 blur-3xl animate-pulse" />
          </div>
          <div className="relative  max-w-6xl">
            <br />
            <br />
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-left"
            >
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              > */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Swipe+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              {/* <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
                </div> */}
              {/* </div> */}
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
              > */}
              {/* <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
                </div> */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Connect+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              {/* </div> */}
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
              </div> */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Hired+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
            </div>
            <br />
            <div><a href="https://apps.apple.com/us/app/jobminglr/id6738838504" target="_blank" rel="noopener noreferrer">Download JobMinglr</a> today on the Apple App Store & Google Play Store.</div>
          </div>
        </section>
        <section id="jobMinglrForRecruiterSection"
          className="bg-brandGreen text-white text-center relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 snap-start"
          style={{ backgroundImage: `url(https://jobminglr-website.s3.us-east-1.amazonaws.com/backgound-1.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-70" />
          <div className="relative max-w-6xl">
            <br />
            <br />
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-left"
            >
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
              </div> */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Post+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              {/* </div> */}
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
              </div> */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Match+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              {/* <div
                className="relative bg-white rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden w-full max-w-[min(92vw,22rem)] md:max-w-[22rem] aspect-[9/20] mx-auto flex flex-col max-h-[80svh] md:max-h-[80vh]"
              >
                <div className="bg-[#ECEED9] text-[#1C1B1A] rounded-[1.75rem] p-6 shadow-2xl border border-[#E6D9C8] ring-1 ring-[#436052]/60 w-full max-w-xs md:max-w-none text-center md:text-left flex flex-col justify-between min-h-0 h-full">
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
              </div> */}
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Hire+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
            </div>
            <br />
            <div><a href="https://apps.apple.com/us/app/jobminglr/id6738838504" target="_blank" rel="noopener noreferrer">Download JobMinglr</a> today on the Apple App Store & Google Play Store.</div>

          </div>
        </section>


        <section className="bg-white py-16 px-6 snap-start">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Connect JobMinglr to your favorite ATS in minutes.</h2>
            <div className="mt-6 grid grid-cols-2 gap-8 items-center justify-items-center">
              <a href="/greenhouse">
                <div
                  className="mb-8 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 object-cover max-w-xs mx-auto"
                >
                  <img
                    src="https://jobminglr-website.s3.us-east-1.amazonaws.com/GREENHOUSE_WORDMARK_GREEN.png"
                    alt="Greenhouse ATS logo"
                    className="h-24 md:h-40 w-auto object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
              </a>
              <a href="/pinpoint">
                <div
                  className="mb-8 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 object-cover max-w-xs mx-auto"
                >
                  <img
                    src="https://jobminglr-website.s3.us-east-1.amazonaws.com/pinpoint+logo.png"
                    alt="Pinpoint ATS logo"
                    className="h-24 md:h-40 w-auto object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

      </Layout1>
    </div >
  );
};

export default HomePage;
