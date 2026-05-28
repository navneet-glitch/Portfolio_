/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFD6E7',
        'soft-lavender': '#E5D9FF',
        'soft-cyan': '#DDF8FF',
        'soft-beige': '#FFF6F2',
        'text-grey': '#666666',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      zIndex: {
        '1000': '1000',
        '1001': '1001',
        '9998': '9998',
        '9999': '9999',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
        'blur-xl': 'blur(25px)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'holoPulse': 'holoPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'sparkleFloat': 'sparkleFloat 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, -50px) scale(1.1)' },
        },
        holoPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 30px rgba(255, 214, 231, 0.3), inset 0 0 30px rgba(255, 214, 231, 0.1)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 50px rgba(255, 214, 231, 0.5), inset 0 0 50px rgba(255, 214, 231, 0.2)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        sparkleFloat: {
          '0%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '100%': { opacity: '0', transform: 'translate(0, -30px) scale(0)' },
        },
      },
    },
  },
  plugins: [],
}
