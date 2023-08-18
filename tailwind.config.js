/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          primary:'#BAE6EA',
          ligthblue:'#5DCBD5',
          moreblue: '#009FE3',
          moreligthblue:'#51ABBA',
          whiteblue: '#F8F8F8',
          dark: '#0000004A',
      },
      fontFamily: {
        custom: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
}
