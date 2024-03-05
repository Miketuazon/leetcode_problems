/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}

 Understand problem
 - Return inorder traversal

 Make a plan
 - make a arr
 - Go through through all the way left
 - Once we make it all the way left, add nodes
 - Once we make it all to the right, print those nodes

 */
 var inorderTraversal = function (root) {
    // Base case
    if (!root) return [];

    let res = []
    // Recursive steps
    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);
    return left.concat([root.val], right);
};
