"use strict";

var _caesarCipher = require("./caesarCipher");
test('abc shifted by 1 to equal bcd', () => {
  expect((0, _caesarCipher.caesarCipher)('abc', 1)).toBe('bcd');
});
test('abc shifted by -1 to equal zab', () => {
  expect((0, _caesarCipher.caesarCipher)('abc', -1)).toBe('zab');
});
test('efgh shifted by 27 to equal fghi', () => {
  expect((0, _caesarCipher.caesarCipher)('efgh', 27)).toBe('fghi');
});
test('efgh shifted by -28 to equal cdef', () => {
  expect((0, _caesarCipher.caesarCipher)('efgh', -28)).toBe('cdef');
});
test('efgh shifted by 55 to equal ijkl', () => {
  expect((0, _caesarCipher.caesarCipher)('efgh', 55)).toBe('hijk');
});
test('123 ab ?!@ shifted by 3 to equal 123 de ?!@', () => {
  expect((0, _caesarCipher.caesarCipher)('123 ab ?!@', 3)).toBe('123 de ?!@');
});