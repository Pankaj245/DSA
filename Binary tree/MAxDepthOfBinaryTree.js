// Leetcode#104
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
var maxDepth = function(root) {
    //bottom-up approch
    if (!root) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    return 1 + Math.max(leftMax, rightMax)
}
// Leetcode#104
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
var maxDepth = function(root) {
    //bottom-up approach
    if(!root) return 0
    let traverse = curr =>{
        if(!curr?.left && !curr?.right){
            return 1
        }else{
            return (Math.max(traverse(curr?.left), traverse(curr?.right)) +1)
        }
    }
    return traverse(root)
}
// Leetcode#104
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
var maxDepth = function(root) {
    // top-down approach
    if(!root) return 0
    let maxLevel = 0
    let traverse = (curr, level)=>{
        maxLevel = Math.max(level, maxLevel)
        curr?.left && traverse(curr?.left, level+1)
        curr?.right && traverse(curr?.right, level+1)
    }
    traverse(root, 1)
    return maxLevel
};