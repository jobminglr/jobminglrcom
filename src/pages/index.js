import React, { useState, useEffect } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [appLink, setAppLink] = useState('');

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
            return "https://www.jobminglr.app/";
          }
        }
      } catch (e) {
        return "https://www.jobminglr.app/";
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
          className="bg-brandGreen text-white text-center py-20 px-4 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-brandGreen-dark opacity-90" />
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg" data-aos="fade-up">
              Swipe. Connect. Get Hired.
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

        <section className="bg-black text-white py-16 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Watch JobMinglr in Action</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="JobMinglr Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
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
            <Link to="/features" className="mt-10 inline-block text-brandGreen hover:underline">
              See all features &raquo;
            </Link>
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
