const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx",
    "./node_modules/flowbite-react/dist/**/*.{js,cjs}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", ...fontFamily.sans],
      display: ["var(--font-inter-tight)", "var(--font-inter)", ...fontFamily.sans],
      mono: ["var(--font-jetbrains)", "ui-monospace", ...fontFamily.mono],
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1200px",
      },
    },
    extend: {
      letterSpacing: {
        eyebrow: "0.12em",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "12px",
      },
      colors: {
        primary: "#FFFFFF",
        "primary-hover": "#D4D4D8",
        background: "#0A0A0B",
        surface: "#121214",
        "surface-2": "#1A1A1D",
        border: "#26262B",
        foreground: "#F5F5F7",
        muted: "#A1A1AA",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
