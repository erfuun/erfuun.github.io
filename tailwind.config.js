module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        12: "3rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("tailwindcss-pseudo-elements")({
      customPseudoClasses: ["foo"],
      customPseudoElements: ["bar"],
      contentUtilities: false,
      emptyContent: false,
      classNameReplacer: {
        "hover:before:text-black": "hbt"
      }
    })
  ]
};
