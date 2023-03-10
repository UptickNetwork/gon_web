const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8180,
    open: true,
    https: false,
    proxy: {
      "/gonapi": {
      target: "http://192.168.1.101:7097",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/gonapi": "/",
      },
    },

    }
  
  },
})
