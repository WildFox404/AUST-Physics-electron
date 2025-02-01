/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui,animate, setupInspiraUI],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

