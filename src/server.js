'use strict';

require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
const cors = require('cors');
const uncapitalizeMessage = require('./uncapitalize/uncapitalizeMessage');

const app = express();
app.use(cors());

const logger = require('./middleware/logger');
app.use(logger);

const validator = require('./middleware/validator');
app.use(validator);



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

// module.exports = app;
