// src/pages/contact.js
import React, { useState } from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import "aos/dist/aos.css";

const InfoTooltip = ({ text }) => (
  <span className="relative group inline-flex items-center align-middle ml-1" tabIndex={0} aria-label={text}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-gray-700">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 15.5h-1.5v-6h1.5v6zm0-8h-1.5v-1.5h1.5V9.5z" />
    </svg>
    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 rounded bg-gray-900 text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition shadow-lg whitespace-normal break-words leading-snug min-w-[16rem] w-[28rem] sm:w-[30rem] max-w-[90vw]">      {text}
    </span>
  </span>
);

const GreenHouseContactPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [boardToken, setBoardToken] = useState("https://boards.greenhouse.io/");
  const [boardSlug, setBoardSlug] = useState("");
  const [harvestApiKey, setHarvestApiKey] = useState("");
  const [onBehalfOf, setOnBehalfOf] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    const composedMessage = [
      company && `Company: ${company}`,
      boardToken && `Job Board Link: ${boardToken}`,
      harvestApiKey && `Harvest API Key: ${harvestApiKey}`,
      onBehalfOf && `On-Behalf-Of User ID: ${onBehalfOf}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const data = {
      name: fullName,
      email,
      message: composedMessage,
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
        setTimeout(() => setShowToast(false), 5000); // Hide toast after 5 seconds
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setBoardToken("https://boards.greenhouse.io/");
        setBoardSlug("");
        setHarvestApiKey("");
        setOnBehalfOf("");
        setMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

    <section >
      <p className="text-gray-600 max-w-2xl mb-10">
        Fill out the form below so we can connect your Greenhouse account. Please make sure you have created a Harvest API Key and located your Job Board Link and On-Behalf-Of User ID.
      </p>

      {showToast && (
        <div className="mb-6 rounded-md bg-brandGreen border border-brandGreen px-6 py-4 text-sm text-white shadow-md flex items-start justify-between animate-fade-in-out transition-all duration-300 max-w-xl mx-auto">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Thank you! We’ll get back to you within 48 hours.</span>
          </div>
          <button onClick={() => setShowToast(false)} className="ml-4 text-white hover:text-gray-200">&times;</button>
        </div>
      )}

      {!showToast && (
        <form onSubmit={handleContactSubmit} className="space-y-5 max-w-xl mx-auto" >
          <div className="space-y-4">
            {/* First Name */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            {/* Company */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700">Company</label>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            {/* Job Board Link */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700 flex items-center">Job Board Link <InfoTooltip text={"Paste the full Greenhouse job board URL (e.g. https://boards.greenhouse.io/examplecompany)."} /></label>
              <div className="sm:col-span-2">
                <div className="flex rounded shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                    https://boards.greenhouse.io/
                  </span>
                  <input
                    type="text"
                    value={boardSlug}
                    onChange={(e) => {
                      const raw = e.target.value.trim();
                      const cleaned = raw
                        .replace(/^https?:\/\/boards\.greenhouse\.io\/?/i, "")
                        .replace(/\s+/g, "-")
                        .replace(/[^a-zA-Z0-9-]/g, "");
                      setBoardSlug(cleaned);
                      setBoardToken(`https://boards.greenhouse.io/${cleaned}`);
                    }}
                    placeholder="company-name"
                    className="flex-1 min-w-0 w-full px-4 py-3 border border-gray-300 rounded-r shadow-sm"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">We’ll build the full URL for you.</p>
              </div>
            </div>

            {/* Harvest API Key */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700 flex items-center">Harvest API Key <InfoTooltip text={"Generate this in Greenhouse: Configure → Dev Center → API Credential Management → Create New API Key."} /></label>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  value={harvestApiKey}
                  onChange={(e) => setHarvestApiKey(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            {/* On-Behalf-Of User ID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-sm font-medium text-gray-700 flex items-center">On-Behalf-Of User ID <InfoTooltip text={"In Greenhouse: Configure → Users → click the API key owner → copy the number from the URL."} /></label>
              <div className="sm:col-span-2">
                <input
                  placeholder="On-Behalf-Of User ID"
                  type="text"
                  value={onBehalfOf}
                  onChange={(e) => setOnBehalfOf(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <div className="sm:col-start-2 sm:col-span-2">
                <button
                  type="submit"
                  className="bg-brandGreen text-white px-6 py-3 rounded-full hover:bg-brandGreen-dark transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

    </section>

  );
};

export default GreenHouseContactPage;
