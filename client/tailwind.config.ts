const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0D',     // Deepest Jet Black
          darkGrey: '#1A1A1A', // Card backgrounds
          silver: '#C0C0C0',   // Metallic accents
          red: '#E50914',      // Performance Red (CTA)
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'], // For high-end headings
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
}