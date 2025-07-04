function productExceptSelf (arr) {
  let obj = Array(arr.length).fill(1);
  let left = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    obj[i] *= left;
    left *= arr[i];
  }
  let right = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    obj[i] *= right;
    right *= arr[i];
  }
  console.log(arr);
  console.log(obj);
  return obj;
}

productExceptSelf([2, 3, 4, 5, 6]);
