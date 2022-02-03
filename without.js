const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`);
  }
}

const eqArrays = function (array1, array2) {
  let check = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
    }
  }
  return check;
}

const without = function (source, itemsToRemove) {
  let result = [];
  let addElement = true;

  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      //console.log (`${source[i]} | ${itemsToRemove[x]}`);
      if (source[i] === itemsToRemove[x]) {
        addElement = false;
        break;
      }
    }
    if (addElement) {
      result.push(source[i]);
    }
    addElement = true;
  }

  return result;
  
}


/*
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

