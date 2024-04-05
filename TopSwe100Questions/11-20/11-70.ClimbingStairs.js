/**
 * @param {number} n
 * @return {number}
 */
/*
*/
var climbStairs = function(n) {
    let one = 1
    let two = 1
        // 3        3 < 4
    for (let i = 0; i < n - 1; i++) {
        tempOne = one   // 5
        one = one + two // 8
        two = tempOne   // 5
    }
    return one
};
