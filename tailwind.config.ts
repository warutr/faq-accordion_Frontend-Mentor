import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile": "url('/images/background-pattern-mobile.svg')",
        "desktop": "url('/images/background-pattern-desktop.svg')",
      },
    },
    colors: {
      "light-pink": "hsl(275, 100%, 97%)",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
export default config;
