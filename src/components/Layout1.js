import React from "react";
import Header from "./Header1";
import Footer from "./Footer";
import { StaticImage } from 'gatsby-plugin-image'

const Layout1 = ({ children }) => {

  const getAppLink = () => {
    if (typeof window !== "undefined") {
      const isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isAndroidDevice = /Android/i.test(navigator.userAgent);
      console.log("navigator.userAgent", navigator.userAgent);

      if (isAppleDevice) {
        console.log("APPLE DEVICE");
        return "https://apps.apple.com/us/app/jobminglr/id6738838504";
      } else if (isAndroidDevice) {
        console.log("ANDROID DEVICE");
        return "https://play.google.com/store/apps/details?id=com.jobminglr.in.android&utm_source=na_Med";
      } else {
        console.log("OTHER DEVICE");
        return "https://www.jobminglr.app/";
      }
    }
  };

  const appLink = getAppLink();

  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={appLink}
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
