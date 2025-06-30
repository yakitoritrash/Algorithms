def rotateArray(nums, k):
    k = k % len(nums)
    left = 0
    right = len(nums) - 1
    while (left < right):
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
    
    left = 0
    right = k - 1
    while (left < right):
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1

    left = k
    right = len(nums) - 1
    while (left < right):
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
    return nums

if __name__ == "__main__":
    nums = [3, 4, 5, 6, 7]
    print(nums)
    print(rotateArray(nums, 3))
