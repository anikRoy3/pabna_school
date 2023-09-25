/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,php}"],
  theme: {
    extend: {
      fontSize: {
        '10': "0.625em",
        '12': "0.75em",
        '13': "0.8125em",
        '14': "0.875em",
        '15': "0.9375em",
        '16': "1em",
        '18': "1.125em",
        '20': "1.25em",
        '24': '1.5em',
        '26': '1.625em',
        '32': '2em',
        '36': '2.25em',
        '40': '2.5em',
        '48': '3em'
      },
      colors:{
        primary: "#0C1167",
        secondary: '#D00025',
        accent: '#E7E8FF'

      },
      fontFamily:{
        nikosh: ['nikosh', 'sans-serif'],
        kalpurush: ['kalpurush', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
};
