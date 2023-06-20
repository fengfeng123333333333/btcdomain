const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify')
      }
    }
  },
  
  // outputDir: 'dist-main',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  publicPath: './',
})
