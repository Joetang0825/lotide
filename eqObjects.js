// Display message to indicate the actual result matches the expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `${String.fromCodePoint(
        128568
      )} Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `${String.fromCodePoint(
        128566
      )} Assertion Failed: ${actual} != ${expected}`
    );
  }
};

// Compare 2 arrays to see if they are the same
const eqArrays = function (array1, array2) {
  let check = true;

  // Compare length of 2 arrays
  if (array1.length !== array2.length) {
    check = false;
    return check;
  }

  // Compare each element between 2 arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
      return check;
    }
  }
  return check;
};

// Check if 2 objects are the same
const eqObjects = function (object1, object2) {
  let check = true;

  // Compare the number of keys of 2 objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    check = false;
    return check;
  }

  // Check to see if the key is an Array and then compare key between 2 objects
  for (let x in object1) {
    if (Array.isArray(object1[x])) {
      check = eqArrays(object1[x], object2[x]);
      if (check === false) {
        return check;
      }
    } else if (object1[x] !== object2[x]) {
      check = false;
      return check;
    }
  }

  return check;
};

/* Test Data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/

// Export eqObjects function
module.exports = eqObjects;
