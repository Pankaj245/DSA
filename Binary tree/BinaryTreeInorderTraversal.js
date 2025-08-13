// Leetcode#94
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans =[]
    let traversal = (curr) =>{
        // Inorder-> left=>value(root)=>right
        if(!curr) return;
        traversal(curr?.left)
        ans.push(curr?.val)
        traversal(curr?.right)
    }
    traversal(root)
    return ans
    
};
// Leetcode#94
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let ans = []
    let stack = []
    let top = root
    while (top || stack.length > 0) {
        while (top) {
            stack.push(top)
            top = top?.left
        }
        top = stack.pop()
        ans.push(top.val)
        top = top.right
    }
    return ans
}