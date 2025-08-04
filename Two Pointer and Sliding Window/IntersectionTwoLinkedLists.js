/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// Leetcode#160
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lengthA = 0
    let lengthB = 0

    let currA = headA
    while (currA) {
        ++lengthA
        currA = currA.next
    }
    let currB = headB
    while (currB) {
        ++lengthB
        currB = currB.next
    }
    currA = headA
    currB = headB
    if (lengthA > lengthB) {
        let diff = lengthA - lengthB
        while (diff && currA) {
            currA = currA.next
            --diff
        }
    } else {
        let diff = lengthB - lengthA
        while (diff && currB) {
            currB = currB.next
            --diff
        }
    }
    while (currA && currB) {
        if (currA === currB) {
            return currA
        }
        currA = currA.next
        currB = currB.next

    }
    return null

};
// Leetcode#160
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let currA = headA
    let currB = headB
    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }
    return currA
}