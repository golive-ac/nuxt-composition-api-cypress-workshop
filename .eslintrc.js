module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:chai-friendly/recommended'
  ],
  plugins: [
    'cypress',
    'chai-friendly'
  ],
  // add your custom rules here
  rules: {
  }
}
