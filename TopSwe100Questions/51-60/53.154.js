/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let curr_max = nums[0];
    let curr_min = nums[0]
    
    for(let i=1; i<nums.length; i++){
        let maxMul = curr_max*nums[i], minMul=curr_min*nums[i];
        
        curr_max = Math.max(maxMul, nums[i], minMul)
        curr_min = Math.min(maxMul, nums[i], minMul)
        
        max = Math.max(max, curr_max);
    }
    return max;
};