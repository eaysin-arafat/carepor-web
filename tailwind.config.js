/** @type {import('tailwindcss').Config} */
import fleabite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
        xxs: "360px",
      },
      colors: {
        bodyColor: "var(--body)",
        primaryColor: "var(--primary)",
        primaryHoverColor: "var(--primaryHover)",
        lightBlueColor: "var(--lightBlue)",
        secondaryColor: "var(--secondary)",
        grayColor: "var(--grayColor)",
        lightGrayColor: "var(--lightGray)",
        blackColor: "var(--black)",
        whiteColor: "var(--white)",
        dangerColor: "var(--danger)",
        borderColor: "var(--border)",
        textColor: "var(--text)",
      },
    },
  },
  plugins: [fleabite],
};
