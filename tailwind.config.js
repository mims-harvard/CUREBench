// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: '#A51C30',
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        molecules: "url('/bg-molecules.svg')"
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      }
    }
  },
  plugins: []
};
