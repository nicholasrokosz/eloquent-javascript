const range = (start, end, step) => {
  const arr = [];
  step ? (s = Math.abs(step)) : (s = 1);
  if (start <= end) for (let i = start; i <= end; i += s) arr.push(i);
  else if (start > end) for (let i = start; i >= end; i -= s) arr.push(i);
  return arr;
};

const sum = (arr) => arr.reduce((a, b) => a + b);
// const sum = (arr) => {
//   t = 0;
//   arr.forEach((n) => (t += n));
//   return t;
// };

console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(5, 5, 5)));
