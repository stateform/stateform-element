const ENV = process.env.NODE_ENV
const isPro = ENV === 'production' ? true : false
const proConfig = {
  externals: {
    'element-ui': 'element-ui'
  }
}

module.exports = {
  configureWebpack: isPro ? proConfig : undefined
}
