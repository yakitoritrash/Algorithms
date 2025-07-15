function spiralMatrix(arr) {
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    res.push(arr[0][i]);
  }
  console.log(res);
}

spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
