/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#83
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let tempHead = head;

  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    }
    if (head.next && head.val !== head.next.val) {
      head = head.next;
    }
  }

  return tempHead;
};
