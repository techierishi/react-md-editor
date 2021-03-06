"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSurroundingWord;

function getSurroundingWord(text, position) {
  if (!text) throw Error("Argument 'text' should be truthy");

  var isWordDelimiter = function isWordDelimiter(c) {
    return c === " " || c.charCodeAt(0) === 10;
  }; // leftIndex is initialized to 0 because if selection is 0, it won't even enter the iteration


  var start = 0; // rightIndex is initialized to text.length because if selection is equal to text.length it won't even enter the interation

  var end = text.length; // iterate to the left

  for (var i = position; i - 1 > -1; i--) {
    if (isWordDelimiter(text[i - 1])) {
      start = i;
      break;
    }
  } // iterate to the right


  for (var _i = position; _i < text.length; _i++) {
    if (isWordDelimiter(text[_i])) {
      end = _i;
      break;
    }
  }

  return {
    start: start,
    end: end
  };
}

module.exports = exports.default; 
//# sourceMappingURL=getSurroundingWord.js.map