/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let res = 0;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (mid*mid > x) {
            right = mid - 1;
        } 
        else {
            res = mid;
            left = mid + 1;
        }
    }
    return res;
};