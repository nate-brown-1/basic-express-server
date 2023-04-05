// 'use strict';

// const uncapitalizeMessage = require('../src/uncapitalize/uncapitalizeMessage');

// describe('Test uncapitalize middleware', () => {
//   test('Should put message in lower case and pass to next middleware', () => {
//     const request = {
//       query: {
//         message: 'Nate'
//       }
//     };
//     const response = {};

//     const next = jest.fn();

//     uncapitalizeMessage(request, response, next);
//     expect(request.query.message).toEqual('nate');
//     expect(next).toHaveBeenCalled();
//   });

//   test('If no message in request, pass error into next', () => {
//     const request = {query: {}};
//     const response = {};
//     const next = jest.fn();

//     uncapitalizeMessage(request, response, next);
//     expect(next).toHaveBeenCalledWith('No message attached!');
//   });
// });
