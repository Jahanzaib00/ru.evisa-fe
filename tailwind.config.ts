import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gov-blue": "#112e51",
        "gov-blue-light": "#205493",
        "gov-red": "#cd2026",
        "gov-gray-lightest": "#f1f1f1",
        "gov-gray-light": "#aeb0b5",
        "gov-gray": "#5b616b",
        "gov-gray-dark": "#323a45",
        "gov-success": "#2e8540",
        "gov-warning": "#fdb81e",
        primary: {
          DEFAULT: "#112e51",
          light: "#205493",
        },
        accent: "#cd2026",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
