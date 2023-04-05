'use strict';

// import and start express server
const express = require('express');
const app = express();

// import cross origin resource sharing
const cors = require('cors');
app.use(cors());

// import function from lab 01
// this is only for sample purposes
const uncapitalizeMessage = require('./uncapitalize/uncapitalizeMessage');

// import logger module
const logger = require('./middleware/logger');
app.use(logger);

// import validator module
const validator = require('./middleware/validator');
app.use(validator);


// empty data array for later
const data = [];

app.get('/message', (request, response, next) => {
  response.send(data);
});

app.post('/message', uncapitalizeMessage, (request, response, next) => {
  data.push(request.query.message);
  response.json(data);
});


app.use(function (error, request, response, next) {
  console.log(error);
  response.status(500).send('Internal Server Error');
});

module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Listening on ${port}`);
  })
};
