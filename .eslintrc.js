
/*!
 * https://eslint.bootcss.com/docs/rules/
 * https://eslint.vuejs.org/rules/
 *
 * - 0: off
 * - 1: warn
 * - 2: error
 */

module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ["@typescript-eslint"],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules:{
    "no-undef": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0,
  }
}
