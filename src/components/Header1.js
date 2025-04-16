// src/components/Header.js
import React, { useState } from "react";
import { Link } from "gatsby";
import img from "../images/imagelogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-brandGreen">
          <img src={img} alt="logo" className="w-6 h-6 text-brandAccent filter-orange" />
          <span>JobMinglr</span>
        </Link>

        <button
          className="md:hidden text-brandGreen focus:outline-none text-4xl"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>

        <div className="hidden md:flex space-x-8">
          <Link to="/" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Home
          </Link>
          <Link to="/about" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            About
          </Link>
          <Link to="/features" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Features
          </Link>
          {/* <Link to="/blog" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Blog
          </Link>
          <Link to="/testimonials" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Testimonials
          </Link> */}
          <Link to="/pricing" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Pricing
          </Link>
          <Link to="/contact" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Contact
          </Link>
          <Link to="/download" activeClassName="font-semibold text-brandGreen-dark" className="text-gray-700 hover:text-brandGreen-dark">
            Download
          </Link>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Features
          </Link>
          {/* <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link> */}
          <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/download" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
            Download
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
