"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}