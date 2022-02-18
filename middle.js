// Return the middle element(s) of an array
const middle = function (array) {
  let midElements = [];
  let midPoint = 0;

  // If the array is too short (i.e. length < 2), we just return an empty array
  if (array.length <= 2) {
    return midElements;
  }
  else {
    // If the size of the array is odd, then return the middle element
    if (array.length % 2 === 1) {
      midPoint = (array.length / 2) + 0.5 - 1;
      midElements.push(array[midPoint]);
    }
    // The size of the array is even, return the middle 2 elements
    else {
      midPoint = (array.length / 2) - 1;
      midElements.push(array[midPoint], array[midPoint + 1]);
    }
  }
  return midElements;
}

// Export middle function
module.exports = middle;