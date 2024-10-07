class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        
        lo = 0
        hi = len(nums)
        
        while lo < hi :
            m = (lo + (hi - lo)//2)
            
            if nums[m] == target:
                return m
            elif nums[m] > target:
                hi = m
            else:
                lo = m +1
        
        return lo


if __name__ == "__main__":
    
    sol = Solution()
    nums = [1, 2, 4, 7]
    target = 4
    print('Test case 1: nums = [1, 2, 4, 7] target = 4')
    print("Output: ", sol.searchInsert(nums, target))