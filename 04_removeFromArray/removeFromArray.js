const removeFromArray = function (arr, ...args) {
  return arr.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
