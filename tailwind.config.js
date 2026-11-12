/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ajuste os caminhos para abranger a sua estrutura em src/
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4648d4", // Cor primária do CodeForge
        surface: "#faf8ff", // Fundo leve
        cardBg: "#ffffff",  // Fundo dos cards
      },
    },
  },
  plugins: [],
};