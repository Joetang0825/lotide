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

module.exports = eqArrays;