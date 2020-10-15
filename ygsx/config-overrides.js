const path = require('path')

const { disableEsLint, override, addDecoratorsLegacy, addWebpackAlias,fixBabelImports } = require('customize-cra')

module.exports = override(
  // 关闭eslint
  disableEsLint(),
  // 支持装饰器
  addDecoratorsLegacy(),
  // 别名定义
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  // antd-mobile样式按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  })
)

