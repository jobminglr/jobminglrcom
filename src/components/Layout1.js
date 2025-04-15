import React from "react";
import Header from "./Header1";
import Footer from "./Footer";
import { StaticImage } from 'gatsby-plugin-image'

const Layout1 = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{/* ensure content is below fixed header */}
        {children}
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://apps.apple.com/us/app/jobminglr/id6738838504"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            src="../images/qr.png"
            alt="Download JobMinglr App"
            placeholder="blurred"
            layout="constrained"
            className="w-20 h-20 shadow-lg border rounded-lg"
          />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Layout1;
