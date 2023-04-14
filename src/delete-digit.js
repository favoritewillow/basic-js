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
  let str = number.toString();
  let arr = Array.from(str, Number);

  let digit = [];

  for (let i = 0; i < arr.length; i++) {
    digit = arr[i];
    console.log(digit);
  }

  function minNum(arr) {
    let minNumber = Math.min(...arr);
    let filteredNumbers = arr.filter((number) => number !== minNumber);
    console.log(filteredNumbers);
    let num = parseInt(filteredNumbers.join(""));
    filteredNumbers.reverse();
    let numReverse = parseInt(filteredNumbers.join(""));
    console.log(num);
    console.log(numReverse);

    if (num > numReverse) {
      return num;
      //console.log(num);
    } else if (num < numReverse) {
      return numReverse;
      //console.log(numReverse);
    }
    return -1;
  }

  minNum(arr);
}

let number = 152;
deleteDigit(number);

module.exports = {
  deleteDigit,
};
