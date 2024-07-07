import type { Config } from "tailwindcss";
import fontSize from "./font-size";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      fontSize: fontSize,
      borderRadius: ({ theme }) => theme("spacing"),
    },
  },
  plugins: [],
};
export default config;
