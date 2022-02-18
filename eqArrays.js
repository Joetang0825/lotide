// Compare 2 arrays to see if they are the same
const eqArrays = function (array1, array2) {
  let check = true;

  // Compare the size of 2 arrays
  if (array1.length !== array2.length) {
    check = false;
    return check;
  }

  // Check if every element between 2 arrays are the same
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      check = false;
      return check;
    }
  }
  return check;
}


// Export eqArrays function
module.exports = eqArrays;
