/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length-1

    while (left < right) {
        let valLeft = numbers[left]
        let valRight = numbers[right]
        let sum = valLeft + valRight
        if (sum === target) {
            return [left + 1, right + 1]
        }
        else if (sum > target) {
            right--
        }
        else if (sum < target) {
            left++
        }
    }
};
