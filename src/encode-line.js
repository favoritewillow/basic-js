const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
//encodeLine('aabbbc') => '2a3bc'

function encodeLine(str) {
  let encodedStr = "";
  let count = 1;

  // Проходим по каждому символу в строке
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      // Если текущий символ равен следующему, увеличиваем счетчик
      count++;
    } else {
      // Иначе добавляем количество и символ в закодированную строку
      //encodedStr += (count > 1 ? count : "") + str[i];
      //count = 1;
      if (count > 1) {
        encodedStr += count + str[i];
      } else {
        encodedStr += str[i];
      }
      count = 1;
    }
  }

  return encodedStr;
}

let str = "aabbbc";
let encodedStr = encodeLine(str);
encodeLine(str);

module.exports = {
  encodeLine,
};
