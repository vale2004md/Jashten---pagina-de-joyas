/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7AC5CD',  // Azul celeste principal
          light: '#B0E0E6',    // Celeste claro
          dark: '#4682B4',     // Azul más oscuro
        },
        // Azules del diamante
        diamond: {
          light: '#87CEEB',    // Celeste brillante
          DEFAULT: '#4169E1',  // Azul diamante
          dark: '#00008B',     // Azul oscuro del diamante
        },
        gold: {
          DEFAULT: '#FFD700',  // Dorado (para detalles)
          light: '#FFF8DC',
          dark: '#DAA520',
        },
        silver: '#C0C0C0',
        background: '#F0F8FF',  // Azul muy claro para fondos
        dark: '#2C3E50',        // Azul oscuro para texto
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],  // Para títulos elegantes
        body: ['Inter', 'sans-serif'],           // Para texto normal
        logo: ['Georgia', 'serif'],              // Similar a tu logo
      },
      boxShadow: {
        'diamond': '0 4px 20px rgba(65, 105, 225, 0.3)',  // Sombra azul diamante
        'glow': '0 0 20px rgba(122, 197, 205, 0.5)',      // Brillo celeste
      },
    },
  },
  plugins: [],
}