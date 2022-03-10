function newArray(arrA, arrB) {
  let arrC = [];

  for (let key of arrA) {
    arrC.push(key);
  }

  for (let key2 of arrB) {
    arrC.push(key2);
  }
  let arrD = new Set(arrC);
  return arrD;
}

const arrayA = [1, 2, 3, 3];
const arrayB = [1, 2, 3, 4, 4, 5, 5, 1];
console.log(newArray(arrayA, arrayB));
