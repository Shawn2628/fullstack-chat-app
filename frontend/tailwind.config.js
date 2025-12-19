import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "winter",
      "valentine",
      "halloween",
      "cyberpunk",
      "bumblebee",
      "emerald",
      "black",
      "corporate",
      "synthwave",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "sunset",
      "coffee",
      "dim",
      "night",
      "nord",
      "lemonade",
      "luxury",
      "dracula",
      "acid",
      "business",
      "cmyk",
      "autumn",
    ],
  },
};

