const palindromes = function (str) {
  return (
    str.toLowerCase().replace(/[^a-z]/g, "") ===
    str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .reverse()
      .join("")
  );
};

// Do not edit below this line
module.exports = palindromes;
