// Leetcode#103
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
var zigzagLevelOrder = function (root) {

    let ans = []
    if(!root) return []
    let traverse = (curr, level) =>{
        ans[level]= ans[level] ||[]
        level % 2 === 0 ? ans[level].push(curr?.val) : ans[level].unshift(curr?.val);
        curr?.left && traverse(curr?.left, level+1)
        curr?.right && traverse(curr?.right,level+1)
    }
    traverse(root, 0)
    return ans
}
// Leetcode#103
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
var zigzagLevelOrder = function (root) {
    let ans = []
    let queue = [root]
    let level = 0
    if (!root) return []
    while (queue.length > 0) {
        let length = queue.length
        let levelArray = []
        for (let i = 0; i < length; i++) {
            let curr = queue.shift()
            curr?.val !== undefined && level % 2 === 0
                ?
                levelArray.push(curr?.val)
                :
                levelArray.unshift(curr?.val)
            curr?.left && queue.push(curr?.left)
            curr?.right && queue.push(curr?.right)
        }
        level = !level
        ans.push(levelArray)
    }
    return ans
};