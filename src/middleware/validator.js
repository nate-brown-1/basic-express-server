'use strict';

function validator (request, response, next) {
  if (request.query.name) {
    console.log('request has name');
  } else {
    console.log('request does not have name');
  }
  console.log('I feel validated');
}

module.exports = validator;
