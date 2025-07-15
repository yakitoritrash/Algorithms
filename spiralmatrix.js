function spiralMatrix(arr) {
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    res.push(arr[0][i]);
  }
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][arr[0].length - 1]);
  }
  for (let i = arr[0].length - 2; i >= 0; i--) {
    res.push(arr[arr.length - 1][i]);
  }
  console.log(res);
}

spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
