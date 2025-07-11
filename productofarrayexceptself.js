var productExceptSelf = function (nums) {
  const output = Array(nums.length).fill(1)
  let left = 1;
  for (let i = 0; i < output.length; i++) {
    output[i] *= left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = output.length - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }
  return output;
}
