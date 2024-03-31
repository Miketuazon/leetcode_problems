/**
 * @param {number} n
 * @return {boolean}

Understand the problem
- Get powers of 3
    - If they equal 1 return true
    - Else if they less than 1, return false
 */
    var isPowerOfThree = function(n) {
        // Base case
        if (n === 1) return true
        else if (n < 1) return false

        // Recursive step
        return isPowerOfThree(n / 3)
    };
