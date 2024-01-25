class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for ast in asteroids:
            while stack and ast < 0 and stack[-1] > 0:
                if abs(stack[-1]) > abs(ast):
                    ast = 0
                elif abs(stack[-1]) < abs(ast):
                    stack.pop()
                else:
                    ast = 0
                    stack.pop()
            if ast:
                stack.append(ast)

        return stack
