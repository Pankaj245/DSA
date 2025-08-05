/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#2
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ans = new ListNode();
  let ansHead = ans;

  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let newNode = new ListNode();//sentinal node
    newNode.val = digit;
    ans.next = newNode;
    ans = ans.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
};
// let carry = 0;
// let head=l1;
// let sentinal1 = new ListNode()
// let curr = sentinal1

// while (l1 && l2 ) {
//     let sum = l1.val + l2.val + carry
//     carry = Math.floor(sum / 10)
//     let reminder = sum % 10
//     let sentinal = new ListNode()
//     sentinal.val = reminder
//     curr.next=sentinal
//     curr=curr.next
//     l1 = l1.next
//     l2 = l2.next
// }
// while (l1) {
//     let sum = l1.val + carry
//     carry = Math.floor(sum / 10)
//     let reminder = sum % 10
//     let sentinal = new ListNode()
//     sentinal.val = reminder
//     curr.next=sentinal
//     curr= curr.next
//     l1=l1.next
// }
//  while (l2) {
//     let sum = l2.val + carry
//     carry = Math.floor(sum / 10)
//     let reminder = sum % 10
//     let sentinal = new ListNode()
//     sentinal.val = reminder
//     curr.next=sentinal
//     curr= curr.next
//     l2=l2.next
// }
// if(carry){
//     let sentinal = new ListNode()
//     sentinal.val = carry
//     curr.next=sentinal
//     curr= curr.next
// }
// return sentinal1.next
