// Display message to indicate the actual result matches the expected result
const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`);
  }
}

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

// Remove elements from source array that match element from itemsToTRemove array
const without = function (source, itemsToRemove) {
  let result = [];
  let addElement = true;

  // Create nested loops to go through source and itemsToRemove arrays
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      // if we found an element to remove, we move to the next element in source array
      if (source[i] === itemsToRemove[x]) {
        addElement = false;
        break;
      }
    }
    // The element from source array should be kept
    if (addElement) {
      result.push(source[i]);
    }
    // Reset addElement flag and assume next element from source array will be added for now
    addElement = true;
  }

  return result;

}


/* Test Data
const words = ["hello", "world", "lighthouse"];
const words2 = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words2, ["hello", "world"]);


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([1, 2, 3], [5]), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
assertArraysEqual(without([], ["1", "2", "3"]), []);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
*/

// Export without function
module.exports = without;
