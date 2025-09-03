// Leetcode#1448
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    if (root?.length <= 1) return root?.length
    let count = 1;
    let traverse = (curr, maxSeenSoFar) => {
        let maxValue = Math.max(maxSeenSoFar, curr.val)
        curr.left && curr.left.val >= maxValue && ++count
        curr.right && curr.right.val >= maxValue && ++count
        curr.left && traverse(curr.left, maxValue)
        curr.right && traverse(curr.right, maxValue)
    }
    traverse(root, root.val)
    return count
};