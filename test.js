'use strict';

const parseIpPort = require('./index');

test('Test', () => {
  expect(() => parseIpPort('2@#24L:ccc')).toThrowError();
  expect(() => parseIpPort('1:1')).toThrowError();
  expect(parseIpPort('127.0.0.1:80')).toEqual(['127.0.0.1', 80]);
  expect(parseIpPort('0.0.0.0:0')).toEqual(['0.0.0.0', 0]);
  expect(() => parseIpPort(':')).toThrowError();
  expect(() => parseIpPort('127.0.0.211:')).toThrowError();
  expect(() => parseIpPort(':80')).toThrowError();
  expect(() => parseIpPort('1.1.1.1:5555555')).toThrowError();
  //expect(parseIpPort('localhost:80', false)).toEqual(['localhost', 80]);
  //expect(parseIpPort('google.com:80', false)).toEqual(['google.com', 80]);
});