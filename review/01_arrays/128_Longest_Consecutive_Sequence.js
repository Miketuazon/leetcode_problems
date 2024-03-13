/**
 * @param {number[]} nums
 * @return {number}
    Understand problem
    - Return length of max consecutive nums

    Make a plan
    - Create set
        - Use set onto nums
    - Iterate through set
        - Check to see if the num we are at doesnt have one lower
        - Check to see if theres a num +1
        - Count how many consecuitves we have
    - Return max
 */
        var longestConsecutive = function (nums) {
            // Case if nums is 1 or 0
            if (nums.length === 1) return 1
            if (nums.length === 0) return 0

            let setOfNums = new Set(nums)

            let max = 1

            // Iterate thru set
            for (let num of setOfNums) {
                // We have a beginning if lower num is not there
                if (!setOfNums.has(num - 1)) {
                    let currNum = num
                    let count = 1
                    // console.log('currNum', currNum)
                    // console.log('count', count)
                    // While loop to keep track of count and num
                    while (setOfNums.has(currNum + 1)) {
                        // Up the count and number we are tracking
                        count++
                        currNum++
                        // console.log('count', count)
                        // console.log('currNum', currNum)
                    }
                    max = Math.max(count, max)
                }
            }
            return max
        };
