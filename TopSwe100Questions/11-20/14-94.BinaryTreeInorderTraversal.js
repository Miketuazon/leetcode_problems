/*

Understand problem
 - Return inorder traversal

 Make a plan
 - make a arr
 - Go through through all the way left
 - Once we make it all the way left, add nodes
 - Once we make it all to the right, print those nodes

 */

var inorderTraversal = function (root) {
    // Recursive
    // Base case
    if (!root) return [];

    let left = inorderTraversal(root.left)
    let right = inorderTraversal(root.right)

    return left.concat(root.val).concat(right)
}
