"use strict";

var _calculator = require("./calculator");
const calcObj = new _calculator.Calculator();
test('1 + 2 to equal 3', () => {
  expect(calcObj.add(1, 2)).toBe(3);
});
test('4 - 9 to equal -5', () => {
  expect(calcObj.sub(4, 9)).toBe(-5);
});
test('4 * 5 to equal 20', () => {
  expect(calcObj.mul(4, 5)).toBe(20);
});
test('8 / 4 to equal 2', () => {
  expect(calcObj.div(8, 4)).toBe(2);
});