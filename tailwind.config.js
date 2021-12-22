module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({after}) => after(['disabled']),
  },
  plugins: [require('@tailwindcss/forms')],
}
