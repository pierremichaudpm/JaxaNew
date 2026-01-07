/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jaxa-blue': '#0083C0',
        'orange': '#FF6B35',
        'turquoise': '#00D9C0',
        'anthracite': '#2E2E3A',
        'yellow': '#FFD23F',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float 15s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(30px, -30px) rotate(180deg)' },
        }
      }
    },
  },
  plugins: [],
}
