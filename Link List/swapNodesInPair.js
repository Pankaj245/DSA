/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Leetcode#24
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairsRecursive = function (head) {
  if (!head || !head.next) return head;
  let l = head;
  let r = head.next;

  l.next = swapPairs(r.next);
  r.next = l;

  return r;
};

//Leetcode#24
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairsIterative = function (head) {
  if (!head || !head.next) return head;
  let p = new ListNode(0, head);
  let ans = p;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;

    p = c;
    c = c.next;
    n = c && c.next;
  }
  return ans.next;
};
