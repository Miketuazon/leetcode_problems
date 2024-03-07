/*
Understand problem
- Return true if from bottom of tree to top of tree adds up to target

Make a plan
- Recursively go left and right
- Each time we go through one, we subtract from targetSum
- If we reach a node with no children, and val == target, return true
 */
var hasPathSum = function(root, targetSum) {
    // Base case
    if (!root) return false;

    // We find a leaf node that equals to target return true
    if (!root.left && !root.right && root.val === targetSum) return true

    // Recursively go left and right, subtract root val
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
