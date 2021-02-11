const loop = (val, test, update, action) => {
  let n = val;
  while (test(n)) {
    action(n);
    n = update(n);
  }
};
loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
