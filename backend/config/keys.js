if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod'); // eslint-disable-line global-require
} else {
  module.exports = require('./dev'); // eslint-disable-line global-require, import/no-unresolved, import/extensions, node/no-missing-require
}
