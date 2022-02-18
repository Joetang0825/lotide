// Display message to indicate the actual result matches the expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

// Find the key in Objects by providing a callback function
const findKey = function (objects, callback) {
  for (let object in objects) {
    if (callback(objects[object])) {
      return object;
    }
  }
}

/* Test Data
assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), "noma");
*/

// Export findKey function
module.exports = findKey;
