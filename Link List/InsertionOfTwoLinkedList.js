/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// LeetCode#160
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeUsingSet = function (headA, headB) {
  let currA = headA;
  let currB = headB;

  let newSetA = new Set();
  while (currA) {
    if (!newSetA.has(currA)) {
      newSetA.add(currA);
    }
    currA = currA.next;
  }
  while (currB) {
    if (newSetA.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }
  return null;
};

// LeetCode#160
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
/**
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeWithoutExtraSpace = function (headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return currA;
};
