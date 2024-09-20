/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: true,
  jsxSingleQuote: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
