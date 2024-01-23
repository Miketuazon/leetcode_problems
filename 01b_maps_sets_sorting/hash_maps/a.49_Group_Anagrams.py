class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Understand the problem
        #   - Return subarrays that have the same anagram
        # Make a plan
        #   - Have a holder to hold our strings
        #   - Go through the array
        #   - With each word, we want to sort it and check if we have it sorted
        #       - If it is not in, we use a key as the word sorted, and the value as the word
        #       - If it is in, we just add the word as another 'value' in the anagram
        #   - Return the array

        holder = {}

        for word in strs:
            # Python sort, need to sort and then join
            s_word = ''.join(sorted(word))
            # print(s_word)
            if s_word not in holder:
                holder[s_word] = [word]
            else:
                holder[s_word] += [word]

        return holder.values()
