// src/pages/contact.js
import React, { useState } from "react";
import "aos/dist/aos.css";

const GreenhouseReferralContactComponent = () => {
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const data = {
      name,
      email,
      message,
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
        setName(""); // Reset form fields
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

    <div>
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

      <form onSubmit={handleContactSubmit} className="space-y-5 max-w-xl mx-auto" data-aos="zoom-in" data-aos-delay="400">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
        />
        <textarea
          placeholder="Your Company Name & Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm"
        />
        <button
          type="submit"
          className="bg-brandGreen text-white px-6 py-3 rounded-full hover:bg-brandGreen-dark transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GreenhouseReferralContactComponent;
