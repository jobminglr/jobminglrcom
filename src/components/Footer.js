// src/components/Footer.js
import React from "react";
import { Link } from "gatsby";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brandGreen-dark text-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <div className="mb-4 space-x-4">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/features" className="hover:underline">Features</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="mb-4 flex justify-center space-x-4 ">
          <a href="https://www.facebook.com/people/JobMinglr/61566729878215/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="mx-3" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="mx-3" />
          </a>
          <a href="https://www.linkedin.com/company/jobminglr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="mx-3" />
          </a>
          <a href="https://www.instagram.com/jobminglrr/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="mx-3" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} className="mx-3" />
          </a>
        </div>

        <p>&copy; 2025 JobMinglr. All rights reserved.</p>
        {/* 
        <div className="mb-4 flex justify-center space-x-3">
          <Link to="/acceptable-use-1" className="hover:underline">Acceptable Use</Link>
          <Link to="/ai-principles" className="hover:underline">AI Principles</Link>
          <Link to="/ai-faqs" className="hover:underline">AI FAQs</Link>
          <Link to="/disability-inclusion-1" className="hover:underline">Disability Inclusion Policy</Link>
          <Link to="/privacy-center" className="hover:underline">Privacy Center</Link>
          <Link to="/privacy-faqs" className="hover:underline">Privacy FAQs</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/security" className="hover:underline">Security</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div> */}

        <div className="mb-4 flex justify-center space-x-3 flex-wrap sm:flex-nowrap">
          <Link to="/acceptable-use-1" className="hover:underline mb-2 sm:mb-0">Acceptable Use</Link>
          <Link to="/ai-principles" className="hover:underline mb-2 sm:mb-0">AI Principles</Link>
          <Link to="/ai-faqs" className="hover:underline mb-2 sm:mb-0">AI FAQs</Link>
          <Link to="/disability-inclusion-1" className="hover:underline mb-2 sm:mb-0">Disability Inclusion Policy</Link>
          <Link to="/privacy-center" className="hover:underline mb-2 sm:mb-0">Privacy Center</Link>
          <Link to="/privacy-faqs" className="hover:underline mb-2 sm:mb-0">Privacy FAQs</Link>
          <Link to="/privacy-policy" className="hover:underline mb-2 sm:mb-0">Privacy Policy</Link>
          <Link to="/security" className="hover:underline mb-2 sm:mb-0">Security</Link>
          <Link to="/terms-of-service" className="hover:underline mb-2 sm:mb-0">Terms of Service</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
