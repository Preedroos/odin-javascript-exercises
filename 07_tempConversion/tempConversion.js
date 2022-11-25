const convertToCelsius = function (f) {
  let c = ((f - 32) * 5) / 9;
  return Math.abs(c - Math.trunc(c)) > 0 ? Number(c.toFixed(1)) : c;
};

const convertToFahrenheit = function (c) {
  let f = (c * 9) / 5 + 32;
  return Math.abs(f - Math.trunc(f)) > 0 ? Number(f.toFixed(1)) : f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
