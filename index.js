'use strict';

require('dotenv').config();
const port = process.env.PORT;

const app = require('./src/server');

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
