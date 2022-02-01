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

const middle = function (array) {
  let midElements = [];
  let midPoint = 0;
  if (array.length <= 2) {
    return midElements;
  }
  else {
    if (array.length % 2 === 1) {
      midPoint = (array.length / 2) + 0.5 - 1;
      midElements.push(array[midPoint]);
    }
    else {
      midPoint = (array.length / 2) - 1;
      midElements.push(array[midPoint], array[midPoint + 1]);
    }
  }
  return midElements;
}

/*
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([]),[]);
assertArraysEqual(middle(['abc', 'bcd', 'def', 'efg']),['bcd','def']);
*/