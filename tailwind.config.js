module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC5500'
        },
        gray: {
          DEFAULT: '#3C3C3C'
        }
      },
      height: {
        'nav-screen': 'calc(100vh - 60px)'
      }
    }
  },
  plugins: []
};
