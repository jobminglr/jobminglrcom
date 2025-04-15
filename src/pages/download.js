// src/pages/testimonials.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";
import bannerImg from "../images/qr.png";

const DownloadPage = () => {

  const getAppLink = () => {
    const isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroidDevice = /Android/i.test(navigator.userAgent);

    if (isAppleDevice) {
      return "https://apps.apple.com/us/app/jobminglr/id6738838504";
    } else if (isAndroidDevice) {
      return "https://play.google.com/store/apps/details?id=com.jobminglr.in.android&utm_source=na_Med";
    } else {
      // Web browser, return the website link
      return "https://www.jobminglr.app/";
    }
  };

  const appLink = getAppLink();

  return (
    <Layout1>
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">JobMinglr: Scan QR to Download</h1>
        <p className="text-gray-700 mb-12 text-lg">
          JobMinglr offers a range of features designed to make hiring and job seeking more efficient and enjoyable. Here’s a closer look at what you can do on our platform:
        </p>

        <div className="mb-12 rounded-2xl transform transition-transform duration-500 hover:scale-110 object-cover" onClick={() => {
          window.open(appLink, '_blank');
        }}>
          <img
            src={bannerImg}
            alt="JobMinglr Features Banner"
            className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 object-cover"
          />
        </div>
      </section>
    </Layout1>
  );

};

export default DownloadPage;
