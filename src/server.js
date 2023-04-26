'use strict';

// import and start express server
const express = require('express');
const app = express();

// import cross origin resource sharing
const cors = require('cors');
app.use(cors());

// // import logger module
// const logger = require('./middleware/logger');
// app.use(logger);

// // import validator module
// const validator = require('./middleware/validator');
// app.use(validator);

// // error handler modules
// const notFoundErrorHandler = require('./error-handlers/404');
// const serverErrorHandler = require('./error-handlers/500');

app.get('/test', (request, response, next) => {
  response.status(200).send('Test Passed! Great Job!');
});

// // error 404 for bad routes
// app.get('*', (request, response, next) => {
//   notFoundErrorHandler();
// });

// // last chance, error 500
// app.use(serverErrorHandler);

// export server object with app and start
module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`Listening on ${port}`);
  })
};
