
module.exports = {
  lintOnSave: false,

  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {      
        target: 'http://p.gemtec.ltd/', // 测试
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/': ''
        }
      },
      // '/uploads':{target:'http://t.api.tutubox.cn',changeOrigin: true}
    },
    
    before: app => {
      // app is an express instance
    }
  },

}
