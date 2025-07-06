import React, { useState, useEffect } from "react";
import Header from "./Header1";
import Footer from "./Footer";
import { StaticImage } from 'gatsby-plugin-image'

const Layout1 = ({ children }) => {
  const [appLink, setAppLink] = useState('');

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
            return "https://apps.apple.com/us/app/jobminglr/id6738838504";
          }
        }
      } catch (e) {
        return "https://apps.apple.com/us/app/jobminglr/id6738838504";
      }
    };

    // Set appLink only after component mounts
    setAppLink(getAppLink());
  }, []); // Empty dependency array means this runs only once after initial render

  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <div className="fixed bottom-4 right-4 max-w-[90vw] overflow-hidden z-50">
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <StaticImage
            src="../images/qr.png"
            alt="Download JobMinglr App"
            className="w-20 h-20 shadow-lg rounded"
          />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Layout1;
