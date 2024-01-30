# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

# Understand problem
# - Return number picked based on using API
# Make a plan
#   - Depending on what we return, we need to see if our guess is higher or lower
#   - If guess > pick, reassign right to guess - 1 |
#   - If guess < pick, reassign left to guess + 1  |
#   - If guess == pick, return 0
class Solution:
    def guessNumber(self, n: int) -> int:
        # Numbers range from 1 - 10
        left, right = 0, n
        # While our left is still not overlapping right pointer
        while left <= right:
            # Use mid to be the num to guess
            mid = left + (right - left)//2
            # The number we are guessing is the mid one
            our_guess = guess(mid)
            print('our_guess', our_guess)
            print('mid', mid)
            # If our guess returns -1, meaning our guess is higher
            if our_guess < 0:
                right = mid - 1
            # If our guess returns 1, meaning our guess is lower
            elif our_guess > 0:
                left = mid + 1
            # If our guess returns 0, we found the pick!
            else:
                return mid
