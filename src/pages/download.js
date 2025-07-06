// src/pages/testimonials.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import bannerImg from "../images/qr.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const DownloadPage = () => {

  const getAppLink = () => {
    try {
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
          return "https://apps.apple.com/us/app/jobminglr/id6738838504";
        }
      }
    } catch (e) {
      return "https://apps.apple.com/us/app/jobminglr/id6738838504";
    }
  };

  const appLink = getAppLink();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout1>
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-brandGreen" data-aos="fade-up">📲 Download JobMinglr</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="200">
          The easiest way to find jobs or hire talent. Use the QR code below or tap the button to install JobMinglr on your phone.        </p>

        <div className="flex flex-col items-center justify-center gap-6" data-aos="zoom-in" data-aos-delay="400">
          <img
            src={bannerImg}
            alt="Download JobMinglr QR"
            className="w-48 h-48 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <button
            className="bg-brandGreen text-white px-6 py-3 rounded-full hover:bg-brandGreen-dark transition"
            onClick={() => window.open(appLink, '_blank')}
          >
            Open in App Store / Play Store
          </button>
        </div>
      </section>
    </Layout1>
  );

};

export default DownloadPage;
