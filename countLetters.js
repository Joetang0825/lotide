const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};

  for (char of sentence) {
    if (char !== ' ') {
      if (result[char]) {
        result[char]++;
      }
      else {
        result[char] = 1;
      }
    }
  }

  return result;
}

/*
console.log(countLetters('LH L '));
const result1 = countLetters("lighthouse in the house");

for (const element in result1) {
  console.log (element, result1[element]);
}*/

module.exports = countLetters;