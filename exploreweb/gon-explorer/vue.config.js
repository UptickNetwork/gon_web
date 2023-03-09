const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8089,
    open: true,
    https: false,
    proxy: {
      "/uptickevmapi": {
      target: "http://192.168.1.101:7097",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/uptickevmapi": "/",
      },
    },

    }
  
  },
})
