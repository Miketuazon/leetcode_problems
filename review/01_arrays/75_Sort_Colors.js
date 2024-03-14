/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
    Understand problem
    - return array sorted from 0-2

    Make a plan
    - Go through array
    - Create 3 counters for colors
    - Depending on num, push to certain counter
    - Alter nums length to 0
    - Push from each counter depending on how many
 */
    var sortColors = function (nums) {
        let red = 0
        let white = 0
        let blue = 0

        for (let num of nums) {
            if (num === 0) red++
            else if (num === 1) white++
            else blue++
        }

        nums.length = 0

        for (let i = 0; i < red; i++) nums.push(0)
        for (let i = 0; i < white; i++) nums.push(1)
        for (let i = 0; i < blue; i++) nums.push(2)
    };
