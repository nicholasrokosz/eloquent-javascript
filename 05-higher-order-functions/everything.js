const every = (arr, test) => {
    // for (let n of arr) {
        // if (!test(n)) return false
    // }
    // return true
    return !arr.some(i => !test(i))
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
