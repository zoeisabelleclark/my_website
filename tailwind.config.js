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
          DEFAULT: "#F6F7F2",
          elevated: "#EEF1EA",
          subtle: "#DCE3D7",
        },
        text: {
          DEFAULT: "#111418",
          secondary: "#3E4A46",
          muted: "#6D7874",
        },
        border: {
          DEFAULT: "#C7D0C6",
          strong: "#AEBBB1",
        },
        accent: {
          blue: "#3B6EA8",
          "blue-soft": "#6F98C2",
          green: "#2F6B57",
          "green-soft": "#6E9783",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 0 rgba(17,20,24,0.04)",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
      letterSpacing: {
        label: "0.08em",
        tightish: "-0.02em",
      },
      outlineColor: {
        accent: "#2F6B57",
      },
    },
    plugins: [],
  }
}
