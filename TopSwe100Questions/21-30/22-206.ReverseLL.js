/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
    Understand the problem
        - Rewire the pointers and then return the reversed list
    Make a plan
        - Have a pointer for head
        - Have a prev pointer
        - Go through linked list
        - In each node
            - Create a temporary variable to hold the next pointer
            - reassign the next pointer to prev
            - Move the previousPointer to curr
            - Move the currentPointer to next node
        - Return the 'new' head
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currNode = head
    let prevNode = null
    while (currNode) {
        let nextNode = currNode.next
        // console.log('currNode', currNode)
        // console.log('prevNode', prevNode)
        // console.log('nextNode', nextNode)
        // console.log('____________________')
        currNode.next = prevNode
        prevNode = currNode
        currNode = nextNode
    }

    return prevNode
};