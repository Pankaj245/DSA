// Leetcode#124
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
var maxPathSum = function(root) {
    let maxSum = -Infinity
    if(!root) return 0
    let traverse = curr =>{
        let maxLeft = curr.left ? traverse(curr.left) : 0
        let maxRight = curr.right ? traverse(curr.right) : 0 
        maxSum = Math.max(maxSum, curr.val + maxLeft + maxRight, curr.val, curr.val+ Math.max(maxLeft, maxRight))
        return Math.max(curr.val + Math.max(maxLeft, maxRight), curr.val)
    } 
    traverse(root)
    return maxSum
};

//Leetcode#124
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
var maxPathSumOptimal = function (root) {
    let maxSum = -Infinity
    if (!root) return 0
    let traverse = curr => {
        if (!curr) return 0
        let maxLeft = Math.max(0, traverse(curr.left))
        let maxRight = Math.max(0, traverse(curr.right))
        maxSum = Math.max(maxSum, curr.val + maxLeft + maxRight)
        return curr.val + Math.max(maxLeft, maxRight)
    }
    traverse(root)
    return maxSum
};
// 🚀 Day 55 of My #100DaysOfCode Challenge

// Today I worked on an advanced tree problem:
// LeetCode 124: Binary Tree Maximum Path Sum 🌳➕💰

// 👉 What’s the problem?
// We need to find the maximum path sum in a binary tree.
// A path can start and end at any node, but it must always go downward (parent → child).

// ✨ How I solved it
// 🔹 I used a recursive post-order traversal approach.
// 🔹 At each node, I calculated the maximum gain I could get from the left and right subtrees.
// – If a subtree contributed a negative sum, I ignored it (treated as 0).
// 🔹 For every node, I considered the case where the path passes through it → node value + left gain + right gain.
// 🔹 I updated a global variable maxSum to keep track of the maximum value found so far.
// 🔹 Finally, for recursion return, I passed back only one branch (node value + max(left, right)) because a path can only extend in one direction upward.

// ⚖️ Why this works
// This approach ensures we explore all possible paths while respecting the tree structure. By cutting off negative contributions early, we prevent subtrees from lowering the total sum.

// ⏱️ Complexity
// Time → O(n), since we visit every node once.
// Space → O(h), where h is the tree height (recursion stack).

// 🌟 Key Learning
// This problem taught me the importance of distinguishing between:
// ✨ The best path through a node (for updating the global answer).
// ✨ The best path to return upward (for recursive calls).

// 💬 Question for you:
// Would you prefer solving this with recursion (like I did) or try a bottom-up dynamic programming perspective?

// #Day55 #100DaysOfCode #LeetCode #DSA #BinaryTree #ProblemSolving #CodingChallenge