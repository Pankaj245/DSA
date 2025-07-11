/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#61
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let curr = head;
  let length = 0;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  k = k % length;
  if (!head || !k) return head;

  let first = head;
  //move first pointer ahead by k times
  for (let i = 0; i < k; i++) {
    first = first.next;
  }

  //move first and second pointer ahead by one till first reaches last node
  let second = head;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  let result = second.next;
  second.next = null;
  first.next = head;
  return result;
};
