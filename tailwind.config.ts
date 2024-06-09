import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxlA: { min: "1440px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1028px" },
      // => @media (max-width: 1023px) { ... }

      lgSm: { max: "950px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "834px" },
      // => @media (max-width: 767px) { ... }
      mdSm: { max: "768px" },
      // => @media (max-width: 7px) { ... }

      xlsm: { max: "550px" },
      // => @media (max-width: 550px) { ... }
      xlsmMin: { min: "550px" },
      // => @media (min-width: 550px) { ... }

      sm: { max: "380px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      primary: ["serif"],
      secondary: ["sans serif"],
    },

    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
