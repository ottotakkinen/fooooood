module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './pages/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      heading: ['"Playfair Display"'],
      body: ['"Poppins"'],
    },
    extend: {
      gridTemplateColumns: {
        311: '3fr 1fr 1fr',
        ingredient: '8fr 4fr 3fr 1fr',
      },
    },
  },
  plugins: [],
};
