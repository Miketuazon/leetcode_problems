var postorderTraversal = function(root) {
    if (!root) return []

    let left = postorderTraversal(root.left)
    let right = postorderTraversal(root.right)
    console.log('left' ,left)
    console.log('right', right)
    return left.concat(right).concat(root.val)
};
