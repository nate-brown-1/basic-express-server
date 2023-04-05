'use strict';

function logger (request, response, next) {
  // log request method
  console.log(request.method);
  // log request path
  console.log(request.path);
  console.log('Sometimes a great notion');
  next();
}

module.exports = logger;
