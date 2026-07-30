/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0D24",
        primary: {
          DEFAULT: "#19183B",
          light: "#242256",
          dark: "#100F28",
        },
        secondary: {
          DEFAULT: "#708993",
          light: "#8CA2AB",
          dark: "#556B74",
        },
        accent: {
          DEFAULT: "#A1C2BD",
          light: "#BBD5D0",
          dark: "#87ADA6",
        },
        paper: "#E7F2EF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(161,194,189,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(112,137,147,0.18), transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(161,194,189,0.12), 0 20px 60px -20px rgba(161,194,189,0.35)",
        card: "0 1px 0 0 rgba(231,242,239,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.55)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
