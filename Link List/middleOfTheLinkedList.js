// Definition for singly-linked list.
//   function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }

//leetcode#876
//input=>[1,2,3,4,5]   output=>[3,4,5]
//input=>[1,2,3,4,5,6] output=>[4,5,6]
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  //console.log(head.next);
  let arr = [];
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow);
  return slow;
};
