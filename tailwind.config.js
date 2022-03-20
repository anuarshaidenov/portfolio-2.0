module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-from-left': 'bounce-from-left 9s infinite',
        'scale-slow': 'scale-slow 12s infinite',
        'bounce-from-right': 'bounce-from-right 9s infinite',
      },
      keyframes: {
        'bounce-from-left': {
          '0%, 100%': {
            transform: 'translate(-20px, -50px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
        'bounce-from-right': {
          '0%, 100%': {
            transform: 'translate(20px, 50px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
        'scale-slow': {
          '0%, 100%': {
            transform: 'scaleY(1.2)',
          },
          '50%': {
            transform: 'scaleY(1)',
          },
        },
      },
    },
    colors: {
      primary: '#FFF0E5',
      secondary: '#F73E59',
      white: '#FFFFFF',
      black: '#000',
      transparent: 'transparent',
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
      secondary: ['Roboto Slab', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
