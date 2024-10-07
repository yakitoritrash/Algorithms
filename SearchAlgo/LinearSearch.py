class Solution(object):
    def LinearSearch(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        
        for i in range(len(nums)):
            if nums[i] == target:
                return i
        return -1
    


if __name__ == "__main__":
    sol = Solution()
    
    nums = [1, 2, 4, 7]
    target = 4
    
    print("Nums = [1, 2, 4, 7] Target = 4")
    print("Output: ", sol.LinearSearch(nums, target))
    
        
        
        
        
        
        
        
        
        
        
        




