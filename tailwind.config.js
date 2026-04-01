/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F3F1EA",
          elevated: "#E4E0D4",
          subtle: "#D6D1C3",
        },
        text: {
          DEFAULT: "#15181B",
          secondary: "#2B3136",
          muted: "#5B646B",
        },
        border: {
          DEFAULT: "#A9B1AF",
          strong: "#7E8987",
        },
        accent: {
          blue: "#2F5F8F",
          "blue-soft": "#5E83A8",
          green: "#2E5A46",
          "green-soft": "#5F7E6F",
        },
      },
      fontFamily: {
        sans: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 0 rgba(21,24,27,0.06)",
      },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        md: "6px",
      },
      letterSpacing: {
        label: "0.1em",
        tightish: "-0.025em",
      },
      outlineColor: {
        accent: "#2E5A46",
      },
    },
  },
  plugins: [],
};
