function twoSumii(numbers, k) {
  //numbers[i] + numbers[j] = k;
  //return [i, j];
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === k) {
      console.log([left + 1, right + 1]);
      return [left + 1, right + 1];
   } else if (k > sum) {
      left++;
    } else {
      right--;
    }
  }
}

twoSumii([2, 7, 11, 15], 9);
