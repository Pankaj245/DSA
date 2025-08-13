/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//Leetcode#144
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let ans = []
    let traversal = (curr) => {
        // preorder-> (root=>left=>right)
        if (!curr) return
        ans.push(curr?.val)
        traversal(curr?.left)
        traversal(curr?.right)
    }
    traversal(root)
    return ans
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//Leetcode#144
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
     
    let ans = []
    let stack = []
    stack.push(root)

    while(stack.length){
        let top = stack.pop()
        top?.val!==undefined && ans.push(top?.val)
        top?.right && stack.push(top?.right)
        top?.left && stack.push(top?.left)
    }
    return ans
}