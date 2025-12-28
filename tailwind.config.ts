import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This points to your app folder
  ],
  theme: {
    extend: {
      colors: {
        'tech-green': '#00FF41',
        'tech-black': '#0D1117',
        'paper-white': '#F5F5F7',
        'gold-award': '#FFD700',
        'gamer-orange': '#FF4500',
        'retro-cream': '#FDFBF7',
        'retro-red': '#E85C5C',
        'retro-black': '#1A1A1A',
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;