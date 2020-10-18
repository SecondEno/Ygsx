const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

// 多服务器请求代理在工作中，可能会出现

module.exports = app => {
  // 反向代理
  app.use('/api', proxy({
    target: 'http://localhost:8080',
    changeOrigin: true,
  }))

}

