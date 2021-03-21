const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyHost = process.env.REACT_APP_PROXY_HOST || 'localhost';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${proxyHost}:3080`,
      changeOrigin: true
    })
  );
};
