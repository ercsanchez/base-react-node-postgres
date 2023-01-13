const sampleUser = require('../data/seedData');

module.exports = (app) => {
  app.get('/sample-route', (req, res) => {
    res.send('<h1>Sample Resource/Page</h1>');
  });

  app.get('/user', (req, res) => {
    res.send({
      email: sampleUser.email,
      password: sampleUser.password,
      profile: sampleUser.profile,
      posts: sampleUser.posts,
    });
  });
};
