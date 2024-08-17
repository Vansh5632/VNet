// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#2ECC71',
        },
        turquoise: {
          500: '#1ABC9C',
        },
        sky: {
          blue: {
            500: '#3498DB',
          },
        },
        amethyst: {
          500: '#9B59B6',
        },
        slate: {
          500: '#34495E',
        },
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-32px)' }, // Adjust bounce height for more 3D effect
        },
      },
      // Adding custom animation delays
      animationDelay: {
        '0': '0s',
        '200': '0.2s',
        '400': '0.4s',
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
      });
    },
  ],
};
