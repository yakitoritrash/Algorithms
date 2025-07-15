function maxHeight(height) {
  let left = 0;
  let right = height.length - 1;
  let products = 0;
  while (left < right) {
    let product = Math.min(height[left], height[right]) * (right - left);
    products = Math.max(products, product);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  console.log(height);
  console.log(products);
}

maxHeight([8,7,2,1]);

