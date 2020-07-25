const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_var.scss"; @import "~element-ui/packages/theme-chalk/src/common/var.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('service', path.resolve(__dirname, './src/api'))
    config.resolve.alias.set('utils', path.resolve(__dirname, './src/utils'))
  }
}
