/*
Understand the problem
- Find out how far the tree goes down

Make a plan
- Recursively go left
- Recursively go right
- see what is the max between those 2 and return that
*/
var maxDepth = function(root) {
   // Base case - if root is null, return 0
   if (!root) return 0
   // Use math.max, and add 1 since our base case returns 0
   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
