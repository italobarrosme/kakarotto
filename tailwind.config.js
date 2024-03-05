/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    screens: {
      sm: '380px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {
      colors: {
        brand: {
          dark: '#030826',
          light: '#fffef3',
          primary: '#fda000',
          secondary: '#f24c27',
          soft: '#F28D77',
          accent: '#F24C27',
          grey: '#c1c1c1ab',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 5rem)',
      },
    },
  },
}
