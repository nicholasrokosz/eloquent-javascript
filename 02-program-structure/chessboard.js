const chessboard = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        j % 2 === 0 ? (str += "_") : (str += "#");
      } else {
        j % 2 === 0 ? (str += "#") : (str += "_");
      }
    }
    str += "\n";
  }
  console.log(str);
};

chessboard(8);
