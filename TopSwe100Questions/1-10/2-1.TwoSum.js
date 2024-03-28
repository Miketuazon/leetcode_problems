/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
Understand problem
- Return indexes of 2 nums that add up to target

Make a plan
- NOTE: They'res always going to be at least 2 nums to equal target
- Create an object
- Go through array
- For each num,
   - We would have a complement
   - If complement is not in obj, input into obj as key val pair -> num: index
   - If complement is in obj, return complement's i and current i
*/
var twoSum = function (nums, target) {
    let complementHolder = {}

    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i]
        let complement = target - nums[i]

        if (complementHolder.hasOwnProperty(complement)) {
            return [complementHolder[complement], i]
        }

        complementHolder[currNum] = i
    }
};
