const { defineConfig } = require('@vue/cli-service')

const { name } = require("./package");

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    // mode: 'development',
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 8080, //主应用启动端口号，视情况而定
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域访问子应用页面
    },
  },
}