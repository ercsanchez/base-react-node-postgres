const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Server running...</h1>');
});

require('./routes/sampleRoutes')(app);
require('./routes/users')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});
