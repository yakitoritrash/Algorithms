import math
from typing import List

class Solution:
    def twocrystallBalls(self, breaks: List[bool]) -> int:
        '''
        :type breaks: List[bool]
        :rtype: int
        '''
        
        jmpAmt = math.floor(math.sqrt(len(breaks)))
        
        for i in range(jmpAmt, len(breaks), jmpAmt):
            if breaks[i]:
                break
            
        i -= jmpAmt
        
        for j in range(i, len(breaks)):
            if breaks[j]:
                return j

        return -1

if __name__ == "__main__":
    solution = Solution()
    
    # Test case 1: No breaks
    breaks = [False, False, False, False, False, False, False, False, False, False]
    print(solution.twocrystallBalls(breaks))  # Expected output: -1

    # Test case 2: Break at the end
    breaks = [False, False, False, False, False, False, False, False, False, True]
    print(solution.twocrystallBalls(breaks))  # Expected output: 9

    # Test case 3: Break in the middle
    breaks = [False, False, False, True, False, False, False, False, False, False]
    print(solution.twocrystallBalls(breaks))  # Expected output: 3

    # Test case 4: Multiple breaks
    breaks = [False, False, True, True, False, False, True, True, False, False]
    print(solution.twocrystallBalls(breaks))  # Expected output: 2
    
    
    breaks = [False, True, True, True, False, False, True, True, False, False]
    print(solution.twocrystallBalls(breaks))  # Expected output: 1