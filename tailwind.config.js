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
        brand: {
          50: '#eef1ff',
          100: '#e0e4ff',
          200: '#c7ceff',
          300: '#a3aeff',
          400: '#7a84ff',
          500: '#585DFF', // Airtribe primary purple/indigo
          600: '#4345e6',
          700: '#3435b8',
          800: '#2a2b91',
          900: '#252674',
        },
        dark: {
          950: '#06070a',
          900: '#0b0c10',
          850: '#11131c',
          800: '#161825',
          700: '#222538',
          600: '#2f344e',
        },
        electric: '#3580F9',
        coral: '#FF725A',
        emerald: '#00D084',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(88, 93, 255, 0.25) 0%, rgba(11, 12, 16, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-radial': 'radial-gradient(circle, rgba(88, 93, 255, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

