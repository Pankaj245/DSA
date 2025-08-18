// Leetcode#112
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // bottom-up approach
    if (!root) return false
    if (!root?.left && !root?.right ) {
        return root?.val === targetSum
    }
    let hasPathLeft = hasPathSum(root?.left, targetSum - root?.val)
    let hasPathRight = hasPathSum(root?.right, targetSum - root?.val)

    return hasPathLeft || hasPathRight
}
// Leetcode#112
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // top-down approach
    let ans =false
    let traverse = (curr, sum) =>{
        if(!curr?.left && !curr?.right && (sum + curr?.val) === targetSum){
            ans = true
        }
        curr?.left && traverse(curr?.left, sum+curr?.val)
        curr?.right && traverse(curr?.right, sum+curr?.val)
    }
    traverse(root, 0)
    return ans
};