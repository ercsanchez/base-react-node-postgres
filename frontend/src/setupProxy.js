const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/sample-route', '/user'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
