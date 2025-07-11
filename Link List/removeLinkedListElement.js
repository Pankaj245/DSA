/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Leetcode#203
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Input: head = [], val = 1
// Output: []
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElementsWithoutSentinel = function (head, val) {
  let prev = head;
  let curr = head && head.next;

  while (curr) {
    if (curr.val == val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  if (head && head.val === val) {
    head = head.next;
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Leetcode#203
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Input: head = [], val = 1
// Output: []
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElementsUsingSentinel = function (head, val) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;

  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
};
