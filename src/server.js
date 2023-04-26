'use strict';

// import and start express server
const express = require('express');
const app = express();

// import cross origin resource sharing
const cors = require('cors');
app.use(cors());

app.get('/ping', (request, response, next) => {
  response.status(200).send('Test Passed! Great Job!');
});

// export server object with app and start
module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Listening on ${port}`);
  })
};
