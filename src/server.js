'use strict';

require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
const cors = require('cors');
const uncapitalizeMessage = require('./uncapitalize/uncapitalizeMessage');

const app = express();
app.use(cors());

const data = [];

function logger (request, response, next) {
  console.log('Express app hit!');
  next();
}
app.use(logger);


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
