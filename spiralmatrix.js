function spiralMatrix(arr) {
  let res = [];
  let top = 0, bottom = arr.length - 1;
  let left = 0, right = arr[0].length - 1;
//  for (let i = 0; i < arr[0].length; i++) {
//    res.push(arr[0][i]);
//  }
//  for (let i = 0; i < arr.length; i++) {
//    res.push(arr[i][arr[0].length - 1]);
//  }
//  for (let i = arr[0].length - 2; i >= 0; i--) {
//    res.push(arr[arr.length - 1][i]);
//  }
  
  while (top <= bottom && left <= right) {
    for (let i = top; i <= right; i++) {
      res.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(res);
}

spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
