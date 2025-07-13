function mountain(arr) {

  let state = false;
  for (let i = 0; i <= arr[Math.max(...arr)]; i++) {
    if (arr[i] < arr[i + 1]) {
      state = true;
    } 
  }
  for (let i = arr[Math.max(...arr)]; i <= arr.length - 1; i++) {
    if (state == true) {
      if (arr[i] <= arr[i + 1]) {
        state = false;
      } else {
        state == true;
      }
    }
  }
  if (arr.length < 3) {
    state = false;
  }
  console.log(state);
}

mountain([0, 1, 2, 3, 4, 5, 6, 4, 3, 2, 1, 0]);
mountain([0, 2, 1, 0]);
mountain([0, 1, 2, 4, 2, 2, 1]);
mountain([3, 5, 5]);
