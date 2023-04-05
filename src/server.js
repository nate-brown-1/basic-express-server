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

// error handler modules
const notFoundErrorHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');

// empty data array for later
const data = [];

// person route
app.get('/person', (request, response, next) => {
  if ( validator(request.query.name) ) {
    response.send(200, {'name': `${request.query.name}`});
  }
});

// app.get('/message', (request, response, next) => {
//   response.send(data);
// });

// app.post('/message', uncapitalizeMessage, (request, response, next) => {
//   data.push(request.query.message);
//   response.json(data);
// });

// error 404 for bad routes
app.get('*', (request, response, next) => {
  notFoundErrorHandler();
});

// last chance, error 500
app.use(serverErrorHandler);

// export server object with app and start
module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Listening on ${port}`);
  })
};
