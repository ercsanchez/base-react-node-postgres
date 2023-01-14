const {
  getUsers,
  getUserById,
  getUserByEmail,
} = require('../controllers/user');

module.exports = (app) => {
  app.get('/users', getUsers);
  app.get('/user/:id', getUserById);
  app.get('/user/:email', getUserByEmail);
};
