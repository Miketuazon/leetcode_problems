# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Understand problem
#   - given a val, return LL with removed vals
# Make a plan
# - Go through LL
# - If curr.val == val, remove it
#   - Need to set .next -> .next.next
# - return head of list
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        # Create a dummy to start
        dummy = ListNode()
        # print(dummy) ListNode{val: 0, next: None}

        # Create the dummy pointer to head
        dummy.next = head

        # Have a pointer for curr
        curr = dummy
        # print(curr) ListNode{val: 0, next:
        # ListNode{val: 7, next: ListNode{val: 7, next: ListNode{val: 7, next: ListNode{val: 7, next: None}}}}}

        # While we have our curr node and pointing to next node
        while curr and curr.next:
            if curr.next.val == val:
                curr.next = curr.next.next
            else:
                curr = curr.next

        return dummy.next
