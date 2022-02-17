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

module.exports = middle;