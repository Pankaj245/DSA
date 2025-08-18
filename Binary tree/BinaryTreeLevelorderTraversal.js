//Leetcode#102
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let queue = [root]
    let ans = []
    if(!root) return ans
    while (queue.length>0) {
        let levelArray = []
        let levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift()
            curr?.left && queue.push(curr?.left)
            curr?.right && queue.push(curr?.right)
            curr?.val!==undefined && levelArray.push(curr?.val)
        }
        ans.push(levelArray)
    }
    return ans
};
//Leetcode#102
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
 * @return {number[][]}
 */
var levelOrderRecursion = function (root) {
    if (!root) return []
    let ans = []

    let traversal = (curr, level) => {
        ans[level] = ans[level] || [] 
        ans[level].push(curr.val)
        curr.left && traversal(curr.left, level + 1)
        curr.right && traversal(curr.right, level + 1)
    }
    traversal(root, 0)
    return ans
}