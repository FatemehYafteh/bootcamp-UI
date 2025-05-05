/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./public/**/*.{html,js}"],
      theme: {
        extend: {
          fontFamily:{
            sans: ["vazir"],
          },
          colors: {
            secondary: '#555775',
            primary:'#4A6DFF',
          },
        },
      },
      plugins: [],
    }