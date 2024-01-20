class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Understand problem
        #   - Return an array of intervals where overlapping intervals are merged.
        # Make a plan
        #   - Sort the array
        #   - Have the first interval as a "starting point"
        #   - Go through the array after the first interval
        #       - If the current interval start is less than or equal to the end
        #           - Merge the intervals together
        #       - If the current interval start is greater than, we add the interval

        intervals.sort()

        res = [intervals[0]]

        for interval in intervals[1:]:
            curr_start = interval[0]
            curr_end = interval[1]

            prev_end = res[-1][1]

            if curr_start <= prev_end:
                res[-1][1] = max(prev_end, curr_end)
            else:
                res.append(interval)

        return res
