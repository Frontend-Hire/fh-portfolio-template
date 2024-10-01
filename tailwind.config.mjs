/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        hover: "hsl(var(--color-hover) / <alpha-value>)",

        "primary-dark": "hsl(var(--color-primary-dark) / <alpha-value>)",
        "secondary-dark": "hsl(var(--color-secondary-dark) / <alpha-value>)",
        "hover-dark": "hsl(var(--color-hover-dark) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
