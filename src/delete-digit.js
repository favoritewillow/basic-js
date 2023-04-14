const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const digits = number.toString().split("");
  const minDigitIndex = digits.findIndex(
    (d, i) => i < digits.length - 1 && d < digits[i + 1]
  );
  digits.splice(minDigitIndex, 1);

  return parseInt(digits.join(""));
  // console.log(digits.join(''))
}

let number = 152;
deleteDigit(number);

module.exports = {
  deleteDigit,
};
