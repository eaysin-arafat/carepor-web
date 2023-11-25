/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        bodyColor: "var(--body)",
        primaryColor: "var(--primary)",
        secondaryColor: "var(--secondary)",
        grayColor: "var(--grayColor)",
        blackColor: "var(--black)",
        whiteColor: "var(--white)",
        dangerColor: "var(--danger)",
        borderColor: "var(--border)",
      },
    },
  },
  plugins: [],
};

/**
 * 'Poppins', sans-serif;
 * fontFamily:{
      "roboto":['Roboto', 'sans-serif'],
    }, */
