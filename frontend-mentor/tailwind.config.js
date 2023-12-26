/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      borderBlue: "hsl(252, 100%, 67%)",
      borderPurple: "hsl(241, 81%, 54%)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      red: "hsla(0, 100%, 67%, 0.10)",
      orange: "hsla(39, 100%, 56%, 0.10)",
      green: "hsla(166, 100%, 37%, 0.10)",
      blue: "hsla(234, 85%, 45%, 0.10)",
      buttonGray: "hsl(224, 30%, 27%)",
    },
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk"],
      },
      height: {
        100: "25rem",
      },
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      lightWhite: "hsla(360, 100%, 100%, 0.5)",
      red: "hsl(0, 100%, 67%)",
      orange: "hsl(39, 100%, 56%)",
      green: "hsl(166, 100%, 37%)",
      blue: "hsl(234, 85%, 45%)",
    },
  },
  plugins: [],
};

/*- Light red: hsl(0, 100%, 67%)
- Orangey yellow: hsl(39, 100%, 56%)
- Green teal: hsl(166, 100%, 37%)
- Cobalt blue: hsl(234, 85%, 45%)*/
