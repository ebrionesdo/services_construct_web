/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    extend:  {
      colors: {
        primarycolor: '#003248',
        secondarycolor: '#3cade1',
        custom: {
            DEFAULT: '#153349',
            light: '#fff'
        }
      }
    },
  },
  // plugins: [require('tailwind-scrollbar')],
  // variants: {
  //   scrollbar: ['rounded']
  // }
}
