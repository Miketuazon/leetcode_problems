class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Understand problem
        #   - Return target's index if found, if not return -1
        # Make a plan
        #   - Array is sorted
        #   - Have 2 pointers and a mid
        #       - If mid is == target, return index
        #       - If mid is < target, move left pointer
        #       - If mid is > target, move right pointer

        left, right = 0, len(nums) - 1

        # print(left, right)

        while left <= right:
            # // is to Math.floor
            mid_idx = left + (right-left)//2
            mid_val = nums[mid_idx]
            # print('mid_idx', mid_idx)
            # print('mid_val', mid_val)
            # print(left, right)

            if mid_val == target:
                return mid_idx
            elif mid_val < target:
                left = mid_idx + 1
            elif mid_val > target:
                right = mid_idx - 1

        return -1
