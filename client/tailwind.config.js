/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sistema de diseño "Anti-Polish / Raw" — papel + tinta + kraft + cuero,
        // ensamblado con la skill ui-ux-pro-max para reflejar la identidad real
        // monocromática del menú impreso de Antana (no el rojo/naranja genérico de "restaurante").
        paper: "#FAF7F2",
        ink: "#1A1A1A",
        pencil: "#4A4A4A",
        kraft: {
          DEFAULT: "#C4A77D",
          dark: "#A9875F",
        },
        leather: "#7B4B2A",
        border: "#D8CFC0",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ['"Abril Fatface"', "serif"],
        body: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        grain: "url('/images/paper-grain.svg')",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "badge-pop": {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.35)" },
          "70%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "pop-in": "pop-in 180ms ease-out",
        "badge-pop": "badge-pop 420ms ease-out",
        "drawer-in": "drawer-in 280ms ease-out",
        "fade-in": "fade-in 200ms ease-out",
      },
    },
  },
  plugins: [],
};
