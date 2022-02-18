// import eqArray function to perform checking 
const eqArrays = require('./eqArrays');

// Compare two arrays using eqArray() and display message to confirm if the actual result matches the expected result
const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`);
  }
}

// export assertArraysEqual function
module.exports = assertArraysEqual;