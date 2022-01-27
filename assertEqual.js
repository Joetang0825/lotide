const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(128568) + ' Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log(String.fromCodePoint(128566) + ' Assertion Failed: ' + actual + ' != ' + expected);
  }
};



assertEqual("Abc", "Abc");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 1.1);