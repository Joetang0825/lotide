const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

const head = function(Array) {
  return Array[0];
};

/*
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/