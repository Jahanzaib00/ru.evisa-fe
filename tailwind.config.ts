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
        blue: "#112e51",
        "blue-light": "#205493",
        red: "#cd2026",
        "gray-lightest": "#f1f1f1",
        "gray-light": "#aeb0b5",
        gray: "#5b616b",
        "gray-dark": "#323a45",
        success: "#2e8540",
        warning: "#fdb81e",
        primary: "#112e51",
        "primary-light": "#205493",
        accent: "#cd2026",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
