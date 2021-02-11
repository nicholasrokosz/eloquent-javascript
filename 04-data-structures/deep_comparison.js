const deepEqual = (val1, val2) => {
  if (val1 === null || val2 === null) return false;
  else if (typeof val1 !== 'object' || typeof val2 !== 'object')
    return val1 === val2;
  else if (Object.keys(val1).length !== Object.keys(val2).length) return false;
  else return deepEqual(Object.keys(val1), Object.keys(val2));
};

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
