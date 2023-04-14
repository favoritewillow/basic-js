const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  // Приведение числа к положительному значению
  number = Math.abs(number);

  // Сумма цифр числа
  let sum = 0;

  // Продолжаем складывать цифры числа, пока не получим однозначное число
  while (number > 9) {
    // Разбиваем число на цифры и складываем их
    sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum;
  }

  return sum;
  //console.log(sum);
}

let number = -10;
getSumOfDigits(number);

module.exports = {
  getSumOfDigits,
};
