const fibonacci = function(nth) {
  nth = parseInt(nth);
  return nth < 0 ? "OOPS" : nth < 2 ? nth : fibonacci(nth - 1) + fibonacci(nth - 2);
};

// Do not edit below this line
module.exports = fibonacci;
