const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function logEachMatrixItem(matrix) {
  console.log("\nLog each matrix item:");

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}

function showMatrix(matrix) {
  console.log("\nShow matrix:");

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

function countCats(matrix) {
  let countCatsYears = [];

  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === "^^") {
        countCatsYears.push(i);
      }
    }
  }

  console.log(countCatsYears);
}

let matrix = [
  [0, 1, "^^"],
  [0, "^^", 2],
  ["^^", 1, 2],
];
showMatrix(matrix);
logEachMatrixItem(matrix);
countCats(matrix);
module.exports = {
  countCats,
};
