module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules:{
    "no-undef": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0,
  }
}
