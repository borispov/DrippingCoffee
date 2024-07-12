/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: [
      {
        mytheme: {
          "primary": "#e5bf55",
          "secondary": "#bb1450",
          "accent": "#c2c5cc",
          "neutral": "#f6e5bd",
          "base-100": "#f3eee4",
          "info": "#206ee9",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },      
      },
    "light"
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
