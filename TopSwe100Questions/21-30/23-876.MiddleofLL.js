/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 Understand the problem
 - We want to return the middle node, if 2 middle nodes, return 2nd middle

 Make a plan
 - Have a fast and slow pointer
 - Go through the LL
 - Once fast pointer reaches end, return the slow pointer
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        // console.log('fast', fast)
        // console.log('slow', slow)
        fast = fast.next.next
        slow = slow.next
    }

    return slow
};