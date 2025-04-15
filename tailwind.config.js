/**
 * tailwind.config.js
 */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          brandGreen: {
            DEFAULT: "#004d40",   // JobMinglr primary dark green (from app branding)
            light: "#E0F2F1",     // a light teal for highlights/accents
            dark: "#002923"       // an even darker shade for headers or footers
          },
          brandAccent: {
            DEFAULT: "#c0392b",   // an accent color (reddish) for emphasis
            light: "#fdecea"      // very light red/pink for background accents
          }
        }
      }
    },
    plugins: [
      require("@tailwindcss/forms")
    ]
  };
  