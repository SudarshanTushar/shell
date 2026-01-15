module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ind-blue': '#0f172a', // Slate 900
        'ind-steel': '#cbd5e1', // Slate 300
        'ind-accent': '#0284c7', // Sky 600
        'brand-orange': '#ea580c', // Orange 600
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'], // Mechanical precision
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
