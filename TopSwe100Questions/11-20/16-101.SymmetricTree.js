/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
Understand problem
- Return true if left and right side mirrors each other

Make a plan
- Create 2 queues
    - left queue start on left side
    - right queue start on right side
- compare nodes
    - if nodes are equal move on
    - if nodes are not same, or one is null return false
- push node's children
- return true at end

 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let queueLeft = []
    let queueRight = []

    // Create 2 queues
    queueLeft.push(root.left)
    queueRight.push(root.right)
    // console.log('queueLeft', queueLeft)
    // console.log('queueRight', queueRight)

    // run while both queues have a length
    while (queueLeft.length && queueRight.length) {
        let node1 = queueLeft.shift()
        let node2 = queueRight.shift()
        // console.log('node1', node1)
        // console.log('node2', node2)

        // if both null, skip to next iteration
        if (node1 === null && node2 === null) continue

        // if either node is null, or values don't equal each other, return false
        if (node1 === null || node2 === null || node1.val !== node2.val) return false

        // push left's children to left queue
        queueLeft.push(node1.left)
        queueLeft.push(node1.right)

        // push right's children to right queue   
        queueRight.push(node2.right)
        queueRight.push(node2.left)
    }

    return true

}