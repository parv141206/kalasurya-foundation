/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    extend: {
      boxShadow: {
        max: "0px 35px 30px 30px white",
        maxdark: "0px 35px 30px 30px rgb(2 6 23)",
        "custom-shadow": "-6px 6px 0px 6px #181141",
        "custom-shadow-dark": "-6px 6px 0px 6px  #cfe2ff",
      },
      animation: {
        "spin-slow": "spin 45s linear infinite",
        "spin-medium": "spin 2s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
