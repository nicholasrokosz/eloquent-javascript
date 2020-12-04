// const reverseArray = (arr) => {
//   const newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
//   return newArr;
// };

const reverseArray = (arr) => {
  const newArr = [];
  arr.forEach((n) => newArr.unshift(n));
  return newArr;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const comp = arr.length - 1 - i;
    [arr[i], arr[comp]] = [arr[comp], arr[i]];
  }
  return arr;
};

const myArr = [1, 3, 5, 7, 9];
console.log(reverseArray(myArr));
console.log(myArr);
reverseArrayInPlace(myArr);
console.log(myArr);
