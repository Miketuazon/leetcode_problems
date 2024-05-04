/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

 Understand problem
 - Use binary search to return index of target IF it exists

 Make a plan
 - Create left, right, and midpoint
 - If target is less than mid
    - Move left to upper half
 - Else
    - Move right to lower half
- If mid === target,
    - Return target idx
- If L and right crosses, return -1
 */
var search = function(nums, target) {
    // Create L and R pointers
    let left = 0;
    let right = nums.length - 1

    // While they don't touch
    while (left < right) {
        // Create midpoint
        let mid = Math.floor((left + right) / 2)
        // console.log('mid', mid)

        // 1. We found target!
        if (nums[mid] === target) return mid
        // 2. Current mid val is < target, need to move Left pointer over mid
        else if (nums[mid] < target) {
            left = mid + 1
        }
        // 3. Move right pointer before mid
        else {
            right = mid - 1
        }
    }

    // Return -1 if L and R crossed, and we couldn't find target
    return -1
};
