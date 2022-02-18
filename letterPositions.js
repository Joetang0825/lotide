// Compare 2 arrays to see if they are the same
const eqArrays = function (array1, array2) {
  let check = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
    }
  }
  return check;
}

// Compare two arrays using eqArray() and display message to confirm if the actual result matches the expected result
const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`);
  }
}

// Find the position of every unique character in the sentence, with index starting at 0
const letterPositions = function (sentence) {
  const results = {};
  // Go through every character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    // We will skip empty space
    if (sentence[i] !== ' ') {
      // We have created an array for this character, store another position of this character
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }
      // This is the first time we find this character, create a new array to store its position and store the position
      else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  // return the objects that contains all the character's position
  return results;
};

/* Test Data
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
*/

// Export letterPositions function
module.exports = letterPositions;