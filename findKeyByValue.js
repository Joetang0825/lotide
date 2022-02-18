// Display message to indicate the actual result matches the expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

// Search key's value in an object and return the key
const findKeyByValue = function (showObj, Name) {
  for (let x in showObj) {
    if (showObj[x].localeCompare(Name) === 0) {
      return x;
    }
  }
  // Cannot find the key
  return undefined;
}


/* Test Data
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/

// Export findKeyByValue function
module.exports = findKeyByValue;