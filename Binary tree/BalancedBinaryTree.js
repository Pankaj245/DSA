// Leetcode#110
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ans = true
    let traverse = (curr) => {
        if (!curr) return 0
        let leftTreeDepth = traverse(curr.left)
        let rightTreeDepth = traverse(curr.right)
        if (Math.abs(leftTreeDepth - rightTreeDepth) > 1) {
            ans = false
        }
        return 1 + Math.max(leftTreeDepth, rightTreeDepth)
    }
    traverse(root)
    return ans
};