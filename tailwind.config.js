/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0ea5e9',
        'ocean-cyan': '#06b6d4',
        'ocean-teal': '#14b8a6',
        'ocean-emerald': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        'glass': '20px',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
        '3000': '3000px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  corePlugins: {
    backdropFilter: true,
  },
}
