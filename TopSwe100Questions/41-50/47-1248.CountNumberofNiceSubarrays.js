/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let countOdd = 0;
    let l = 0;
    let niceSubarray = 0;
    let result = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 !== 0) {
            countOdd++;
        }
        if (countOdd === k) {
            niceSubarray = 0;
        }
        while (countOdd >= k) {
            if (nums[l] % 2 !== 0) {
                countOdd--;
            }
            l++;
            niceSubarray++;
        }
        result += niceSubarray;
    }
    return result;
};