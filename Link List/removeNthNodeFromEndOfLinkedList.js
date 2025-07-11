/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#19
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1], n = 1
// Output: []
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEndOnePass = function (head, n) {
  //add sentinel node at start
  let sentinel = new ListNode();
  sentinel.next = head;

  //move first pointer ahead by n
  let first = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  // Move both pointers ahead untill first pointer reaches the last node
  let second = sentinel;
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  //delete the node
  second.next = second.next.next;

  //return
  return sentinel.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//Leetcode#19
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1], n = 1
// Output: []
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
var removeNthFromEndThreePass = function (head, n) {
  let reverse = reverseList(head);
  let curr = reverse;

  if (n === 1) reverse = reverse.next;
  else {
    for (let i = 1; i < n - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  head = reverseList(reverse);

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#19
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1], n = 1
// Output: []
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndTwoPass = function (head, n) {
  let length = 0;
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;

  while (head) {
    length += 1;
    head = head.next;
  }
  let prevPos = length - n;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
};
