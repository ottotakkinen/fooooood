module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './pages/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        311: '3fr 1fr 1fr',
      },
    },
  },
  plugins: [],
};
