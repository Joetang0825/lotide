const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

module.exports = assertEqual;


