//Leetcode#700
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    while (root) {
        if (root.val === val) {                                                                                        
            return root
        } else if (root.val > val) {
            root = root.left
        } else {
            root = root.right
        }
    }
    return root
};

//Leetcode#700
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return root

    if (root.val === val) return root

    return root.val > val
        ? searchBST(root.left, val)
        : searchBST(root.right, val)
};
// 🚀 Day 57 of My #100DaysOfCode Challenge

// Today I solved:
// 🌳 LeetCode 700: Search in a Binary Search Tree

// 👉 Problem Statement
// We are given the root of a BST and a target value. The task is to find and return the node that matches the target value. If the node doesn’t exist, return null.

// ✨ Two Approaches I used

// 🔹 Iterative Approach
// I started from the root and used a simple loop:
// ✔ If the current node equals the target → return it.
// ✔ If the target is smaller → move left.
// ✔ If the target is larger → move right.
// This avoids recursion and keeps it straightforward.

// 🔹 Recursive Approach
// Here, the problem naturally fits recursion:
// ✔ If the root is null → return null.
// ✔ If the root matches the target → return it.
// ✔ Otherwise, recursively search in the left or right subtree based on the value.
// This version is cleaner and uses the BST’s properties elegantly.

// ⚖️ Complexity
// ⏱ Time → O(h), where h = height of the BST (worst case O(n), best case O(log n)).
// 📦 Space → O(1) for iterative, O(h) recursion stack for recursive.

// 🌟 Key Learning
// Binary Search Tree problems are all about leveraging the sorted property of left < root < right. Both iterative and recursive approaches work well — it’s about choosing between clean recursion vs efficient iteration depending on constraints.

// 💬 Question for you:
// Do you usually prefer recursion or iteration when working with trees?

// #Day57 #100DaysOfCode #LeetCode #BinarySearchTree #DSA #ProblemSolving #CodingChallenge