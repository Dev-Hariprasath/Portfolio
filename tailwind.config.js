module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: 'media', // Or remove this line if not needed
  theme: {
    extend: {
      borderRadius: {
        service: '5px 100px 5px 100px',
        about: '20px 5px 20px 5px',
      },
      colors: {
        customNav: '#f272c8',
        secondary: '#292e33',
        hover: '#12f7ff',
        bg: '#250821',
        primary: '#3490dc',
      },
      boxShadow: {
        neon: '0 0 .5rem #12f7ff',
      },
      animation: {
        morph: 'morph 6s linear infinite',
        slideAnimation: 'slideAnimation 1s ease-in-out',
        glow: 'glow 0.04s linear forwards',
        slide: 'slideAnimation 1s ease-out',
        html: 'html 2s ease-out forwards',
        css: 'css 2s ease-out forwards',
        javascript: 'javascript 2s ease-out forwards',
        ceh: 'ceh 2s ease-out forwards',
        progress: 'progress 2s ease-out forwards',
        scrollScale: 'scrollScale 0.5s ease-out',
      },
      transitionProperty: {
        width: 'width',
      },
      keyframes: {
        progress: {
          '0%': {
            background: 'conic-gradient(#12f7ff 0%, transparent 0%)',
          },
          '100%': {
            background: 'conic-gradient(#12f7ff 0%, #12f7ff 100%, transparent 100%)',
          },
        },
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%' },
          '30%': { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%' },
          '60%': { borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%' },
          '80%': { borderRadius: '69% 31% 66% 34% / 21% 30% 70% 79%' },
        },
        glow: {
          '0%': { background: 'var(--bg-color)', boxShadow: 'none' },
          '100%': { background: 'var(--hover-color)', boxShadow: 'var(--neon-box-shadow)' },
        },
        slideAnimation: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        html: {
          '0%': { width: '0%' },
          '100%': { width: '72%' },
        },
        css: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        javascript: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
        ceh: {
          '0%': { width: '0%' },
          '100%': { width: '62%' },
        },
        scrollScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
