import React, { useState } from "react";
import "aos/dist/aos.css";

const InfoTooltip = ({ text }) => (
  <span className="relative group inline-flex items-center align-middle ml-1" aria-label={text}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-gray-700">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 15.5h-1.5v-6h1.5v6zm0-8h-1.5v-1.5h1.5V9.5z" />
    </svg>
    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 rounded bg-gray-900 text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition shadow-lg whitespace-normal break-words leading-snug min-w-[16rem] w-[28rem] sm:w-[30rem] max-w-[90vw]">
      {text}
    </span>
  </span>
);

const PinpointContactPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState("");
  const [subDomain, setSubDomain] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    const composedMessage = [
      company && `Company: ${company}`,
      subDomain && `Pinpoint Sub-Domain: ${subDomain}`,
      apiKey && `API Key: ${apiKey}`,
      webhookSecret && `Webhook Signing Secret: ${webhookSecret}`,
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
      const response = await fetch("https://it96ohh4nc.execute-api.us-east-1.amazonaws.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setApiKey("");
        setMessage("");
        setSubDomain("");
        setWebhookSecret("");
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

        Once the setup is completed, jobs typically sync within 24 hours.<br />
        Our team is available to assist during setup and to answer any technical questions.
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name<span className="text-red-500">*</span></label>
              <div className="sm:col-span-2">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name<span className="text-red-500">*</span></label>
              <div className="sm:col-span-2">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
              <div className="sm:col-span-2">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="company" className="text-sm font-medium text-gray-700">Company<span className="text-red-500">*</span></label>
              <div className="sm:col-span-2">
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="subDomain" className="text-sm font-medium text-gray-700">Pinpoint Sub-Domain</label>
              <div className="sm:col-span-2">
                <input
                  id="subDomain"
                  type="text"
                  value={subDomain}
                  placeholder="yourcompany.pinpointhq.com"
                  onChange={(e) => setSubDomain(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="apiKey" className="text-sm font-medium text-gray-700 flex items-center">API Key <InfoTooltip text={"Generate this in Pinpoint."} /></label>
              <div className="sm:col-span-2">
                <input
                  id="apiKey"
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label htmlFor="webhookSecret" className="text-sm font-medium text-gray-700">Pinpoint Webhook Signing Secret</label>
              <div className="sm:col-span-2">
                <input
                  id="webhookSecret"
                  type="text"
                  value={webhookSecret}
                  onChange={(e) => setWebhookSecret(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="sm:col-start-2 sm:col-span-2 flex justify-end">
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

export default PinpointContactPage;
