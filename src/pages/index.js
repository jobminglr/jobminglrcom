import React, { useState, useEffect, useRef } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../images/imagelogo.png";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const prevOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      const handleLoaded = () => {
        setIsLoading(false);
        document.documentElement.style.overflow = prevOverflow || '';
      };
      if (typeof window !== 'undefined') {
        window.addEventListener('load', handleLoaded, { once: true });
      }
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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
            >
              Swipe. Connect. Hired.
            </h1>
            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start text-left "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/I'm+looking+for+talent.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/I'm+a+job+seeker.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
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
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Swipe+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Connect+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
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
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Post+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
              <img
                src="https://jobminglr-website.s3.us-east-1.amazonaws.com/Match+v2.png"
                alt="In-app chat mockup"
                className="w-full h-full object-contain block"
                loading="lazy"
              />
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
