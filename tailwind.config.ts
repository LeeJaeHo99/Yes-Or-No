import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        pBold: ['PyeongChangPeace-Bold', 'sans-serif'],
        pLight: ['PyeongChangPeace-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
