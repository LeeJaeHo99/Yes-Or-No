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
        pressStart: ['Press-Start-2P', 'sans-serif'],
        DGM: ['DungGeunMo'],
      },
      keyframes: {
        bigger: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        bigger: 'bigger 1s ease-in-out both'
      }
    },
  },
  plugins: [],
} satisfies Config;
