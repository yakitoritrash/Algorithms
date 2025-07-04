function threeSum (nums) {
  let res = [];
  nums.sort((a, b) => a - b) 
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log(res);
  return res;
}

threeSum([-1, 0, 1, 2, -1, -4]);
