/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#328
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

// if(!head)return head
// let odd = head
// let even = head?.next && head?.next
// let evenHead = head?.next &&  head?.next
// while(odd && even && even.next){
//     odd.next = even.next
//     odd=odd.next
//     even.next=odd.next
//     even=even.next
// }
// odd.next = evenHead

// return head
