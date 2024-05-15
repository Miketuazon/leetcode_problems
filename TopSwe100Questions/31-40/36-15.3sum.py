class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Understand problem
        #   - Return sub arrs where 3 non duplicate numbers add to 0
        # Make a plan
        #   - Create res as a set since we don't want duplicates
        #   - Sort the array so we can use 2 pointers approach
        #   - Using first num as a checkpoint, make left firstnum + 1 and right last num
        #   - With those two pointers, add the sum together, and make a complement variable.
        #   - Create a current sum.
        #   - If the current sum == 0, add it to res
        #   - Return res

        #
        res = set()
        nums.sort()

        for idx in range(len(nums) - 2):
            first_num = nums[idx]
            left = idx + 1
            right = len(nums) - 1

            while left < right:
                val_1 = nums[left]
                val_2 = nums[right]

                curr_sum = first_num + val_1 + val_2
                if curr_sum == 0:
                    res.add((first_num, val_1, val_2))
                    left += 1
                    right -= 1
                elif curr_sum < 0:
                    left += 1
                else:
                    right -= 1


        return res
