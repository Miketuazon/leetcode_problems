# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Understand problem
#   - if nodes in LL are the same, 'delete' one and return sorted LL

# Make a plan
#   - If the list is empty, return empty LL
#   - Create a dummy pointer
#   - If there is a next pointer
#       - If the curr val is equal to next val
#           - Move the pointer to next val
#       -
class Solution:
    def deleteDuplicates(self, head):
        curr=head
        # Ensure there is a node and next node
        while curr and curr.next:
            # If our current node equals to next node
            if curr.val==curr.next.val:
                # reassign next to the next NEXT node
                curr.next=curr.next.next
            else:
                # Go to next node
                curr=curr.next
        # Return head of list
        return head
