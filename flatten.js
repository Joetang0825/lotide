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

const flatten = function (nestedArray) {
  let list = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let x = 0; x < nestedArray[i].length; x++) {
        list.push(nestedArray[i][x]);
      }
    }
    else {
      list.push(nestedArray[i]);
    }
  }
  return list;
}

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
//console.log(flatten([[2, 3], [4, 5]], []));
