// Leetcode#572
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let serializer = (root) => {
        let hash = ""
        let traverse = (curr) => {
            if (!curr) {
                hash = hash + "-#"
            } else {
                hash = hash + "-" + curr.val;
                traverse(curr.left);
                 traverse(curr.right);
            }
        }
        traverse(root);
        return hash;
    }
    let hashRoot = serializer(root)
    let hashSubRoot = serializer(subRoot)
    console.log(hashRoot, hashSubRoot)
    return hashRoot.includes(hashSubRoot)
}
