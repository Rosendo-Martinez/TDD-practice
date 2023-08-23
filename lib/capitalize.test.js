"use strict";

var _capitalize = require("./capitalize");
test('capitalize apple to equal Apple', () => {
  expect((0, _capitalize.capitalize)('apple')).toBe('Apple');
});
test('capitalize z to equal Z', () => {
  expect((0, _capitalize.capitalize)('z')).toBe('Z');
});
test('does nothing to already capitalized string', () => {
  expect((0, _capitalize.capitalize)('Blue')).toBe('Blue');
});