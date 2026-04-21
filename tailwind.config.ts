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
        // Brownish–orange brand palette
        primary: "#B45309",   // deep brown-orange
        secondary: "#F97316", // bright orange accent
        body: "#5C5247",
        dark: "#1F1309",
        white: "#ffffff",
        black: "#1A1510",
        paragraph: "#4A4036",
      },
      fontFamily: {
        main: ["Manrope", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

