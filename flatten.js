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
  // Check every element between 2 arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
    }
  }
  // all elements between 2 arrays are the same
  return check;
}

// Assume at most there is only 1 level of array inside the test array and extract all elements from all the array(s) inside to one new array
const flatten = function (nestedArray) {
  // Create an empty array to store all elements
  let list = [];
  // Go through all elements of the array
  for (let i = 0; i < nestedArray.length; i++) {
    // If the element is an array, we need another loop to go through all elements
    if (Array.isArray(nestedArray[i])) {
      for (let x = 0; x < nestedArray[i].length; x++) {
        // Store element into the new array
        list.push(nestedArray[i][x]);
      }
    }
    // The element is not an array, so we can store the element into the new array
    else {
      list.push(nestedArray[i]);
    }
  }
  // return the new array
  return list;
}

// Testing Data
//console.log(flatten([1, 2, [3, 4], 5, [6]]));
//console.log(flatten([[2, 3], [4, 5]], []));

// Export flatten function
module.exports = flatten;