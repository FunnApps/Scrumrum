module.exports = {
  extends: ["next", "turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/no-internal-modules": "off",
    "no-console": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
  },
};
