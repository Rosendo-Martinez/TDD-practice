"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculator = Calculator;
function Calculator() {}
Calculator.prototype.add = function (a, b) {
  return a + b;
};
Calculator.prototype.sub = function (a, b) {
  return a - b;
};
Calculator.prototype.mul = function (a, b) {
  return a * b;
};
Calculator.prototype.div = function (a, b) {
  return a / b;
};