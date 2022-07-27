const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    port: 8082, //主应用启动端口号，视情况而定
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域访问子应用页面
    },
  },
})
