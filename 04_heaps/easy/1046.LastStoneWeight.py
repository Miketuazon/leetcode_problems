import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # In python there is only a min heap, need to convert everything to a -num
        stones = [-stone for stone in stones]
        # Convert array to a heap using heapq
        heapq.heapify(stones)

        # Keep running until there is 1 stone left
        while len(stones) > 1:
            first = heapq.heappop(stones)
            second = heapq.heappop(stones)
            # print('first', first)
            # print('second', second)

            # New weight of y stone
            if second > first:
                # pushing onto stones arr, the difference of the 2 stones
                heapq.heappush(stones, first-second)
        # If there are no stones left, add an empty stone
        stones.append(0)
        # return as absolute val since we have to reconvert from negative
        return abs(stones[0])
