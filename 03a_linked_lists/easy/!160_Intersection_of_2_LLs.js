// This one was hard to understand
var getIntersectionNode = function (headA, headB) {
    let l1 = headA;
    let l2 = headB;

    while (l1 !== l2) {
        // If we reached the end of LL1
        if (!l1) {
            l1 = headB; // Move l1 to the beginning of headB
        } else {
            l1 = l1.next;
        }
        // If we reached the end of LL2
        if (!l2) {
            l2 = headA; // Move l2 to the beginning of headA
        } else {
            l2 = l2.next;
        }
    }

    // Returning L1 will either be null or exit while loop early
    return l1;
}
