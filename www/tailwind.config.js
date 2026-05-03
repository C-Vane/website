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
      sans: ["Inter var", ...fontFamily.sans],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        background: "#0a0a0f",
        surface: "#111118",
        "surface-2": "#18181f",
        border: "#1e1e2e",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
