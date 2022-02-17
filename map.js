const eqArrays = function (array1, array2) {
  let check = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
    }
  }
  return check;
};

const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(
      `${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`
    );
  } else {
    console.log(
      `${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`
    );
  }
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/*
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

assertArraysEqual(
  map(words, (word) => word[word.length - 1]),
  ["d", "l", "o", "r", "m"]
);

assertArraysEqual(
  map(words, (word) => word + "s"),
  ["grounds", "controls", "tos", "majors", "toms"]
);
*/


module.exports = map;