// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (i === 0) {
        temp.push(1);
      } else {
        temp.push(
          (result[i - 1][j - 1] !== undefined ? result[i - 1][j - 1] : 0) +
            (result[i - 1][j] !== undefined ? result[i - 1][j] : 0)
        );
      }
    }
    result.push(temp);
  }
  return result;
};

console.log(generate(5));
