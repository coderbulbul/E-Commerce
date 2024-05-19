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
      //custom colors
      colors: {
        primary: "#3BB77E",
      },
      //custom fonts
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        lato: ["Lato", "sans-serif]"],
      },
    },
  },
  plugins: [],
};

export default config;
