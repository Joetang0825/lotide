const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128568)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(128566)} Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  let check = true;
  
  if (array1.length !== array2.length) {
    check = false;
    return check;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
      return check;
    }
  }
  return check;
}


const eqObjects = function (object1, object2) {
  let check = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    check = false;
    return check;
  }

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

  return check;

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true



const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
