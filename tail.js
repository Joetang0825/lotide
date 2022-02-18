// Return an array of all elements passed in, except the first element 
const tail = function (Array) {
  return Array.slice(1);
};

// Export tail function
module.exports = tail;