/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['"Manrope"', '"sans-serif"'],
      sans: ['"Open Sans"', '"sans-serif"'],
    },
    extend: {
      fontFamily: {
        body: ['"Manrope"', '"sans-serif"'],
        sans: ['"Open Sans"', '"sans-serif"'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        "dark-blue": "#0A2640",
        gray: "#777777",
        green: "#65E4A3",
      },
      leading: {
        big: "78px",
      },
      screens: {
        xlg: "1080px",
        tab: "900px",
      },
    },
  },
  plugins: [],
};
