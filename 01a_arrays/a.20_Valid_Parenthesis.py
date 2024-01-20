class Solution:
    def isValid(self, s: str) -> bool:
        # Understand the problem
        #   - Return True if brackets are closed in the correct order. False otherwise
        # Make a plan
        # - Making a stack keep track of the open parenthesis
        #   - So for ex. ( go in our stack
        #   - If it's a closed parenthesis, we need to check our stack to ensure
        #       - it's the right pairng


        if len(s) % 2 != 0:
            return False
        stack = []

        pairings = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for char in s:
            print(char)
            if char in pairings.keys():
                stack.append(char)
            elif not stack or char != pairings[stack.pop()]:
                return False

        return len(stack) == 0
