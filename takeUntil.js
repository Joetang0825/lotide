const eqArrays = function (array1, array2) {
  let check = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
    }
  }
  return check;
}

const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${ar1} != ${ar2}`);
  }
}

const takeUntil = function (array, callback) {
  let list = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      list.push(array[i]);
    }
    else {
      return list;
    }
  }
  return list;
}

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/

module.exports = takeUntil;

