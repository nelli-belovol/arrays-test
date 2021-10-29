function testArray(array) {
  let rezArray = [];
  for (let i = 0; i <= array.length - 3; i++) {
    const numbers = array.slice(i, i + 3);
    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];
    if ((a > b && b < c) || (a < b && b > c)) {
      rezArray.push(1);
    } else {
      rezArray.push(0);
    }
  }
  console.log(rezArray);
  return rezArray;
}

let array1 = [1, 3, 5, 4, 5, 7];
// let array2 = [10, 4, 3, 15, 25, 7, 2, 1, 0];
testArray(array1);
// testArray(array2);
