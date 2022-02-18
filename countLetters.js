// Display message to indicate the actual result matches the expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

// Count the occurences of letter in a sentence
const countLetters = function (sentence) {

  // Create an empty object to store each character as its key and their occurences
  const result = {};

  // Go through each character in the sentence
  for (char of sentence) {
    // We don't count empty space
    if (char !== ' ') {
      // The character exists, increase the count by 1
      if (result[char]) {
        result[char]++;
      }
      // New character, set the occurence to 1
      else {
        result[char] = 1;
      }
    }
  }

  return result;
}

/* Test Data
console.log(countLetters('LH L '));
const result1 = countLetters("lighthouse in the house");

for (const element in result1) {
  console.log (element, result1[element]);
}*/

// Export countLetters function
module.exports = countLetters;