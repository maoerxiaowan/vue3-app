const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: false,
  
  devServer: {

    port: 10000, //端口号
  }
})
