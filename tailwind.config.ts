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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "light-pink": "hsl(275, 100%, 97%)",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
export default config;
