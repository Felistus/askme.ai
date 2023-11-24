/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#228B22",
          900: "#0A2A0A",
        },
        secondary: {
          50: "#EEEAFE",
          700: "#4723C2",
          900: "#1B0D49",
        },
      },
      fontFamily: {
        "inter-black": ["inter-black", "sans-serif"],
        "inter-bold": ["inter-bold", "sans-serif"],
        "inter-extrabold": ["inter-extrabold", "sans-serif"],
        "inter-extralight": ["inter-extralight", "sans-serif"],
        "inter-light": ["inter-light", "sans-serif"],
        "inter-medium": ["inter-medium", "sans-serif"],
        "inter-regular": ["inter-regular", "sans-serif"],
        "inter-semilbold": ["inter-semilbold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
