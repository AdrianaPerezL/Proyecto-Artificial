/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#025373",
        "light-white": "rgba(255,255,255, 0.18)",
        "col1": "#1C66A6",
        "col2": "#3C7DA6",
        "col3": "#699EBF",
        "col4": "#36736D",
        "azul-ver": "#035AA6",
        "amarillo-editar": "#BF7E04",
        "rojo-eliminar": "#A61F1F",
    },
    },
  },
  plugins: [],
}

