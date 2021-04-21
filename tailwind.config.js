module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      minWidth: {
        '280': '280px'
      },
      height: {
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
      },

      colors: {
        "green-cremona-domicilio": "#49c4a0",
        "blue-cremona-domicilio": "#81d2e0",
        "yellow-cremona-domicilio": "#fdcd2f",
        "purple-cremona-domicilio": "#440063",
        "dark-cremona-domicilio": "#333",
        "gray-cremona-domicilio": "#999",
      },

      backgroundImage: theme => ({
        'more-banner-img': "url('https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/home-blocks/discover-more_d55cd453.png')",
        'join-banner-img': "url('https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/home-blocks/join-now_bc8d9f88.png')"
      }),
    },
  },
  variants: {
    extend: {
    }
  },
  plugins: [],
}
