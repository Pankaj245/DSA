/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Leetcode#234
// Input: head = [1,2,2,1]
// Output: true
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeUsingArray = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

// Leetcode#234
// Input: head = [1,2,2,1]
// Output: true
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //find the middle of the Linked List
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //get the middle as a slow
  console.log("middde", slow.val);

  //reverse the second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  console.log(prev);
  //got a reversed linked list-> prev as a head

  //check the palindrom
  let l1 = head;
  let l2 = prev;
  while (l2) {
    if (l1.val !== l2.val) return false;
    console.log(l1.val, l2.val);
    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
};
