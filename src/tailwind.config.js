/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  
    theme: {
      extend: {
        screens: {
          'mobile': {'max': '639px'},     // Écran extra-petit (max-width: 639px)
          'tablette': {'min': '640px', 'max': '767px'},  // Écran petit (min-width: 640px, max-width: 767px)
          'desktop': {'min': '767px', 'max': '1279px'}, // Écran moyen (min-width: 768px, max-width: 1023px)
               // Écran extra-large (min-width: 1280px)
        },
      },
    },
    plugins: [
      require("daisyui"),
    ],
    daisyui: {
      themes: [
        {
          main: {
  
            "primary": "#36d399",
  
            "secondary":"#f0b851" ,
  
            "tertio" : "#eb0909" ,
  
            "accent": "#378BC8",
  
            "neutral": "#f9f0ec",
  
            "base-100": "#1d232a",
  
            "info": "#3abff8",
  
            "success": "#36d399",
  
            "warning": "#fbbd23",
  
            "error": "#f87272",
          },
        },
      ],
    },
  
  
  }
  