"use strict";

var _reverseString = require("./reverseString");
test('reverse string Cow to equal woC', () => {
  expect((0, _reverseString.reverseString)('Cow')).toBe('woC');
});
test('reverse string 1234567 to equal 7654321', () => {
  expect((0, _reverseString.reverseString)('1234567')).toBe('7654321');
});
test('reverse string a to equal a', () => {
  expect((0, _reverseString.reverseString)('a')).toBe('a');
});