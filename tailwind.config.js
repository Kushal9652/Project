/** @type {import('tailwindcss').Config} */
// import dummy from './src/Components/OurProducts/OurProducts.jsx'
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  // purge: [
  
  //   '!./src/Components/OurProducts/OurProducts.jsx', // Exclude this specific file
  // ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

