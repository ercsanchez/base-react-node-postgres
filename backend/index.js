const express = require('express');
require('./prisma/seed');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Server running...</h1>');
});

require('./routes/sampleRoutes')(app);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});
