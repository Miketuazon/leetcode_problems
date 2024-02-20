# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        NewList = ListNode()
        def Merge(NewList,node1,node2):
			if node1 == None and node2 == None:
				return

			if node1 == None and node2 != None:
				return node2

			if node2 == None and node1 != None:
				return node1

			if node1.val <= node2.val:
				NewList = node1
				NewList.next = Merge(NewList, node1.next,node2)

			if node1.val > node2.val:
				NewList = node2
				NewList.next = Merge(NewList, node1,node2.next)

			return NewList

		return Merge(NewList,list1,list2)
