# Understand problem
#   - Return total num of good pairs (value is equal and 1st val idx < 2nd val idx)
# Make a plan
# - Create a hash
# - Create a count for sum of good pairs
#   - Key as num, val as count
#   - If we find the same num, add to value of hash
# - Iterate through hash table
# - If the count is greater than 1
#   - Multiply by count * (count - 1) and then divide by 2

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        hash_table = {}
        sum = 0

        for idx, val in enumerate(nums):
            # print('val', val)
            # print('idx', idx)
            # print('______')
            if val not in hash_table:
                hash_table[val] = 1
            else:
                hash_table[val] = hash_table[val] + 1
        
        for val in hash_table:
            count = hash_table[val]
            print('count', count)
            print('val', val)
            print('_____')

            if count > 1:
                sum = sum + (count*(count-1))//2
            
        return sum
            
# Understand problem
#   - Return total num of good pairs (value is equal and 1st val idx < 2nd val idx)
# Make a plan
# - Create a hash
# - Create a count for sum of good pairs
#   - Key as num, val as count
#   - If we find the same num, add to value of hash
# - Iterate through hash table
# - If the count is greater than 1
#   - Multiply by count * (count - 1) and then divide by 2

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        hash_table = {}
        sum = 0

        for idx, val in enumerate(nums):
            # print('val', val)
            # print('idx', idx)
            # print('______')
            if val not in hash_table:
                hash_table[val] = 1
            else:
                hash_table[val] = hash_table[val] + 1
        
        for val in hash_table:
            count = hash_table[val]
            print('count', count)
            print('val', val)
            print('_____')

            if count > 1:
                sum = sum + (count*(count-1))//2
            
        return sum
            
