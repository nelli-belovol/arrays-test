const array = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];

const template = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkMatrix(matrix, idealNumbers) {
  let rezult = [];
  let testArray = [];

  for (let i = 0; i <= matrix[0].length - 3; i++) {
    testArray = matrix.flatMap((array) => array.slice(i, i + 3));

    const test = idealNumbers.every((num) => testArray.includes(num));
    if (test) {
      rezult.push(true);
    } else rezult.push(false);
  }

  return rezult;
}

console.log(checkMatrix(array, template));
