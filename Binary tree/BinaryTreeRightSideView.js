// Leetcode#199
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
var rightSideView = function (root) {
    //iterative approach
    let ans=[]
    if(!root) return ans
    let queue = [root]
    while(queue.length){
        let levelLength = queue.length
        for(let i=0;i<levelLength;i++){
            let curr = queue.shift()
            i===0 && ans.push(curr.val)
            curr.right && queue.push(curr.right)
            curr.left && queue.push(curr.left)
        }
    }
    return ans
}
// Leetcode#199
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
var rightSideView = function (root) {
    // recursive approach
    if(!root) return []
    let ans = []
    let traverse = (curr, level) => {
        ans[level] = ans[level] || 0
        if (curr) {
            ans[level] = curr.val
        }
        curr?.left && traverse(curr?.left, level + 1)
        curr?.right && traverse(curr?.right, level + 1)
    }
    traverse(root, 0)
    return ans
};