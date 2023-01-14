module.exports = (app) => {
  app.get('/sample-route', (req, res) => {
    res.send('<h1>Sample Resource/Page</h1>');
  });
};
