import React, { useState, useEffect } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const HomePage = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [appLink, setAppLink] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const data = {
      name: "Subscriber", // Static name as per your example
      email: email,
      message: "Subscribe",
    };

    try {
      // Call the API using fetch
      const response = await fetch("https://it96ohh4nc.execute-api.us-east-1.amazonaws.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000); // Hide toast after 4 seconds
        setEmail(""); // Reset the email field
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

    // Set appLink only after component mounts
    setAppLink(getAppLink());
  }, []); // Empty dependency array means this runs only once after initial render


  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "JobApplication.jpg" }) {
        publicURL
      }
    }
  `);

  const imageUrl = data.file.publicURL;

  return (
    <Layout1>
      <SEO1
        title="Home"
        description="JobMinglr – Swipe to hire platform connecting job seekers and recruiters. Find jobs or candidates with a swipe."
      />

      <section
        className="bg-brandGreen text-white text-center py-20 px-4 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-brandGreen opacity-90" />
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-brandAccent"
            style={{
              textShadow: '.5px .5px 0px black, -.5px -.5px 0px black, .5px -.5px 0px black, -.5px .5px 0px black'
            }}>
            Swipe. Connect. Hired.
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Your next career move is just a swipe away.
          </p>
          <div className="flex justify-center flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            {/* <a
              href="/features"
              className="bg-white text-brandGreen font-semibold px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              Learn How It Works
            </a> */}
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"  // Added security
              className="bg-white text-brandGreen font-semibold px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              Download JobMinglr
            </a>
          </div>
          <button
            className="block text-3xl mt-12 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("jobMinglrForSection")}
          >
            ⌄
          </button>
        </div>
      </section>

      <section id="jobMinglrForSection" className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Who is JobMinglr for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {["Job Seekers", "Recruiters", "Companies"].map((audience) => (
            <div key={audience}>
              <h3 className="text-2xl font-semibold mb-3">{audience}</h3>
              <p className="text-gray-700">
                {audience === "Job Seekers"
                  ? "Swipe through personalized job openings. AI-driven recommendations and instant notifications."
                  : audience === "Recruiters"
                    ? "Quickly connect with top talent. Swipe profiles and chat instantly."
                    : "Streamline your hiring process with our swipe-to-hire platform. Find candidates faster."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why JobMinglr?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Swipe Matching", "AI Suggestions", "In-App Chat", "Mobile Optimized"].map((feature) => (
              <div key={feature} className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg">
                <h3 className="font-semibold">{feature}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {feature === "Swipe Matching"
                    ? "Fast, intuitive swipe-based browsing."
                    : feature === "AI Suggestions"
                      ? "Personalized AI-driven recommendations."
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

      {/* Newsletter Signup */}
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

      <button
        href={appLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4"
      >
        <StaticImage
          src="../images/qr.png"
          alt="Download JobMinglr App"
          className="w-24 h-24 shadow-lg rounded"
        />
      </button>
    </Layout1>
  );
};

export default HomePage;
