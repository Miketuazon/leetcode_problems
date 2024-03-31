/**
 * @param {number} n
 * @return {number}

 Understand the problem
 - Given an output n, return the F number

 Make a plan
 - Recursion
    - Base case
        - If n = 0, return 0
        - If n = 1 or 2, return 1
    - Recursive step
        - return fib(n -1) + fib(n-2)
 */
        var fib = function(n) {
            // Base case
            if (n === 0) return 0
            else if (n === 1 || n === 2) return 1
            // console.log('n', n)
            return fib(n-1) + fib(n-2)
        };
