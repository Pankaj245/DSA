//Leetcode#543
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
var diameterOfBinaryTree = function (root) {
    let diameter = 0
    let findDepth = curr => {
        if (!curr) return 0
        let leftDepth = findDepth(curr?.left)
        let rightDepth = findDepth(curr?.right)
        diameter = Math.max(diameter, leftDepth + rightDepth)
        return 1 + Math.max(leftDepth, rightDepth)
    }
    findDepth(root)
    return diameter
};