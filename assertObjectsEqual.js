// Compares 2 arrays and return true if they are the same, return false otherwise
const eqArrays = function (array1, array2) {
  let check = true;

  // Determin if the size of 2 arrays are the same. If not, return false
  if (array1.length !== array2.length) {
    check = false;
    return check;
  }

  // Compare each element between 2 arrays and return true if all elements are the same
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
      return check;
    }
  }
  return check;
}

// Compare 2 objects and return true if they are the same, return false otherwise
const eqObjects = function (object1, object2) {
  let check = true;

  // Check if number of keys from 2 objects are the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    check = false;
    return check;
  }

  // Check if keys in the object is an Array. If yes, then compare key from object 1 and object 2
  for (let x in object1) {
    if (Array.isArray(object1[x])) {
      check = eqArrays(object1[x], object2[x]);
      if (check === false) {
        return check;
      }
    }
    else if (object1[x] !== object2[x]) {
      check = false;
      return check;
    }
  }

  // Passed all the checks above and the two objects are the same so return true
  return check;


};

// Check if number of keys from 2 objects are the same
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

/* Testing data
const movie = {
  horror: 'Scary Movie 1',
  action: 'Avengers',
  cartoon: 'The Simpsons'
};

const movie2 = {
  horror: 'Scary Movie 1',
  action: 'Avengers',
  cartoon: 'The Simpsons'
};

assertObjectsEqual (movie, movie2);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
*/

// Export assertObjectsEqual function
module.exports = assertObjectsEqual;