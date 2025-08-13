// Leetcode#145
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
var postorderTraversal = function(root) {
    const ans =[]
    let traversal = (curr) =>{
        // Postorder-> left=>right=>value(root)
        if(!curr) return;
        traversal(curr?.left)
        traversal(curr?.right)
        ans.push(curr?.val)
    }
    traversal(root)
    return ans
};
//Leetcode#145
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
var postorderTraversalTwoStack = function(root) {
    let s1=[]
    let s2 = []
    let ans = []
    s1.push(root)
    while(s1.length){
        let top = s1.pop()
        top && s2.push(top)
        top?.left && s1.push(top?.left)
        top?.right && s1.push(top?.right)
    }
    while(s2.length){
        let curr =s2.pop()
        curr?.val !== undefined && ans.push(curr?.val)
    }
    return ans
}
// Leetcode#145
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
var postorderTraversal = function(root) {

    let stack = []
    let ans =[]
    let top= root
    let lastVisited
    while(top|| stack.length){
        while(top){
            stack.push(top)
            top=top?.left
        }
        let peekNode = stack[stack.length-1]
        if(peekNode?.right && peekNode?.right!== lastVisited){
            top = peekNode?.right
        }else{     
            lastVisited = stack.pop()
            ans.push(lastVisited?.val)
        }
    }
    return ans
}