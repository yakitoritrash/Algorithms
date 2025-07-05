function maxHeight(height) {
  let left = 0;
  let right = height.length - 1;
  let products = [];
  while (left < right) {
    let product = Math.min(height[left], height[right]) * (right - left);
    products.push(product);
    left++;
  }

  while (left < right) {
    let product = Math.min(height[left], height[right]) * (right - left);
    products.push(product);
    right--;
  }
  console.log(height);
  console.log(products);
  console.log(Math.max(...products));
}

maxHeight([1,8,6,2,5,4,8,3,7]);

