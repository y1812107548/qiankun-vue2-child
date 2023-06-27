const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
module.exports = defineConfig({
  // publicPath:"/" + name,
  transpileDependencies: true,
  devServer:{
    port:'8090',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  }
})
