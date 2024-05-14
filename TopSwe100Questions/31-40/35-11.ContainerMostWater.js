/**
 * @param {number[]} height
 * @return {number}

 Understand the problem
 - Return the most water that the array can contain, w/o slanting the container

 Make a plan
 - Have 2 pointers
    - One pointing to 1st num
    - One pointing to last num
 - Create a var called maxWater to account for water
 - While left doesnt overlap with right
    - Create var for currWater
    - Reassign maxWater by comparing max of maxWater and currWater
    - Move pointer depending which one is lower
    - If both are same, move a pointer anyway
- Return maxWater
 */
var maxArea = function (height) {
    // Creating pointers, and maxWater
    let left = 0
    let right = height.length - 1
    let maxWater = 0

    // While they don't intersect
    while (left < right) {
        // The min of either left or right (since no slanted water) * distance between pointers
        let currWater = Math.min(height[left], height[right]) * (right - left)
        // Reassign maxWater
        maxWater = Math.max(maxWater, currWater)

        // Move smallest num

        // if left is smaller
        if (height[left] < height[right]) left++
        // if right is smaller
        else if (height[left] > height[right]) right--
        // Move a pointer if they're equal
        else right--
    }

    return maxWater
};
