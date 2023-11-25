/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        primaryColor: "var(--body)",
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
