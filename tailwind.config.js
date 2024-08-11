/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',,
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
      colors: {
        dark: '#354649',    // Custom primary color
        gray: '#6C7A89',  // Custom secondary color
        blue: '#A3C6C4',     // Custom accent color
        light: '#E0E7E9',     // Custom accent color
        // Add more custom colors as needed
      },
      fontFamily: {
        agustina: ['Agustina Regular', 'sans-serif'], // Add your custom font family here
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)', // Base shadow
        'custom-hover': '0 8px 15px rgba(125, 197, 190, 0.5), 0 2px 4px rgba(125, 197, 190, 0.3)', // Custom shadow on hover
      },
      textShadow: {
        'custom': '1px 1px 1px limegreen, 0 0 .5em lightblue, 0 0 0.1em lightseagreen',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '1px 1px 1px limegreen, 0 0 .5em lightblue, 0 0 0.1em lightseagreen',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
});
