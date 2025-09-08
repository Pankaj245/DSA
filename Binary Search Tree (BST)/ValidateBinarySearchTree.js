// Leetcode#98
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
var isValidBST = function(root) {
    let ans = true
    let traverse= (curr, low, high)=>{
        if(curr.val <=low || curr.val >=high){
            ans = false
        }
        curr.left && traverse(curr.left, low, curr.val)
        curr.right && traverse(curr.right,curr.val, high)
    }
    traverse(root, -Infinity, Infinity)
    return ans
};

//Leetcode#98
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
var isValidBST = function (root, low = null, high = null) {
    if (!root) return true
    if ((low !== null && root.val <= low) || (high !== null && root.val >= high)) {
        return false
    }
    let isLeftBST = isValidBST(root.left, low, root.val)
    let isRightBST = isValidBST(root.right, root.val, high)
    return isLeftBST && isRightBST
};

// 🚀 Day 56 of My #100DaysOfCode Challenge

// Today’s problem was:
// 🌳 LeetCode 98: Validate Binary Search Tree (BST)

// 👉 What’s the problem?
// We need to check if a given binary tree follows the rules of a Binary Search Tree:
// ✔ Left child < Parent < Right child
// ✔ All nodes in the left subtree must be smaller than the parent
// ✔ All nodes in the right subtree must be larger than the parent

// ✨ How I solved it – Two Approaches

// 🔹 Approach 1 (Top-down recursion with shared state)
// I carried down the range limits (low & high) from the root to the leaves.
// At each node:
// ✅ If the node value goes outside the valid range, mark the tree invalid.
// ✅ Update the range for left and right children accordingly.
// This works but relies on a shared flag (ans) that must be updated carefully.

// 🔹 Approach 2 (Recursive validation with return values)
// Instead of using a shared state, the recursion itself returns true/false for each subtree.
// ✅ At each node, I check if its value is within the valid range.
// ✅ Then recursively validate the left and right subtrees with updated boundaries.
// ✅ The result is combined logically → the whole tree is valid only if all checks pass.
// This approach is cleaner and more functional.

// ⚖️ Complexity
// ⏱ Time → O(n), since we visit every node once.
// 📦 Space → O(h), where h is the tree height (recursion stack).

// 🌟 Key Learning
// Validating a BST isn’t just about comparing a node with its immediate children —
// It’s about maintaining valid ranges throughout the entire path.

// 💬 Question for you:
// Do you prefer using a shared state (ans) for such problems, or a pure recursive return approach?

// #Day56 #100DaysOfCode #LeetCode #BinarySearchTree #DSA #ProblemSolving #CodingChallenge