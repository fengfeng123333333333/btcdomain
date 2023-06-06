module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // "@babel/preset-env"
  ],
  plugins: [
    "@babel/plugin-transform-private-methods",
    [
    "import",
    {
      "libraryName": "view-ui-plus",
      "libraryDirectory": "src/components"
    },
    "view-ui-plus"
  ]],
}
