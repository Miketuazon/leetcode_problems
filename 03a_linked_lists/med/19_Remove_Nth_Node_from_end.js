/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

    Understand the problem
    - Depending on what n is, we remove it and return the list
    Make a plan
    - Have 2 pointers
        - Create a slow and fast pointer
    - Go through linked list
     - Slow and fast start at head
     - Then fast starts at .next depending on n
     - If fast is null, we return
     - Once fast reaches end
        - The next one after slow is the one to be removed
        - Reassign slow's .next to .next.next
    - Return head of LL
 */
    var removeNthFromEnd = function(head, n) {
        // Create 2 pointers to start at head
        let slow = head
        let fast = head
        console.log('starting places - slow - fast |', slow, fast)
        // We want fast to have a 'head start'. So we go next n times
        for (let i = 0; i < n; i++) {
            fast = fast.next
        }
        console.log('fasts NEW starting position -> ', fast)
        // If fast is null, we need to remove the first node
        if (!fast) return head.next

        // We do fast.next here, since we want slow to be one node before nth node
        while (fast && fast.next) {
            let sum = 1;
            console.log(`Iteration | slow | fast `, sum,  slow, fast)
            sum++

            slow = slow.next
            fast = fast.next
        }
        // Since slow's next node is the 'nth node', we need to rewire
        console.log('slow before rewiring', slow)
        slow.next = slow.next.next
        console.log('slow after rewiring', slow)

        // Return modified LL!
        return head
    };
