import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["questrial", "sans-serif"],
        secondary: ["stretch", "sans-serif"]
      },
      colors: {
        primary: "#39393a"
      }
    },
  },
  plugins: [],
};

export default config satisfies Config