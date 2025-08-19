//Leetcode#101
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
var isSymmetricRecursive = function (root) {
    let isMirror = (left, right) => {
        if (!left && !right) return true

        return left?.val === right?.val &&
            isMirror(left?.left, right?.right) &&
            isMirror(left?.right, right?.left)
    }
    return isMirror(root?.left, root?.right)
};
//Leetcode#101
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
var isSymmetricIterative = function (root) {
    let queue = []
    queue.push(root?.left)
    queue.push(root?.right)
    while (queue?.length) {
        let left = queue.shift()
        let right = queue.shift()
        if (left === null && right === null) continue
        if (left?.val !== right?.val) {
            return false
        } else {
            queue.push(left?.left, right?.right)
            queue.push(left?.right, right?.left)
        }
    }
    return true
};