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

const tail = function (Array) {
  return Array.slice(1);
};

/*
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); // ensure we get back two elements

const result3 = tail([]);
assertEqual(result3.length, 0); // ensure we get back two elements

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
