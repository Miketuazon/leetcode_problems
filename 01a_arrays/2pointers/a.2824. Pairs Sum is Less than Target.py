class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        # Understand problem
        #   - return number of pairs where it's less than the target
        # Make a plan
        #   - Sort the nums arr
        #   - Check to see if 2 pointers can be less than targ
        #   - If they can, we can record it and also assume all numbers in between can be counted
        # [-1,1,2,3,1]
        nums.sort()
        # [-1,1,1,2,3] -> sorted

        res = 0
        left, right = 0, len(nums) - 1
        print(nums)
        while left < right:
            left_num = nums[left]
            right_num = nums[right]

            curr_sum = left_num + right_num
            print(curr_sum)

            if curr_sum < target:
                res += right - left
                left += 1
            else:
                right -= 1

        return res
