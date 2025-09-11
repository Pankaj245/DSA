// Leetcode#230
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans = null
    let traversal = (curr) => {
        if (ans) return
        curr.left && traversal(curr.left)
        if (k === 1) {
            ans = curr.val
        }
        --k
        curr.right && traversal(curr.right)
    }
    traversal(root)
    return ans
};

// 🚀 Day 59 of My #100DaysOfCode Challenge

// Today’s problem:
// 🌳 LeetCode 230: Kth Smallest Element in a BST

// 👉 Problem Statement
// We are given a Binary Search Tree (BST) and asked to find the k-th smallest element in it.

// ✨ Approach I used – Inorder Traversal (Left ➝ Root ➝ Right)

// 🔹 Why Inorder?
// Because inorder traversal of a BST naturally produces a sorted order of elements.

// 🔹 Steps I followed:
// ✅ Traverse the left subtree.
// ✅ Visit the current node (reduce k count).
// ✅ When k becomes 1, that node is the answer.
// ✅ Otherwise, continue into the right subtree.

// ⚖️ Complexity Analysis
// ⏱ Time → O(h + k), where h = height of tree, since we only traverse until the k-th element.
// 📦 Space → O(h) due to recursion stack.

// 🌟 Key Learning
// This problem highlights how powerful BST + inorder traversal is. Instead of collecting all values in an array, we can stop traversal early as soon as we find the k-th element — making it more efficient.

// 💬 Reflection:
// This was a good reminder that in BST problems, inorder is your best friend whenever sorting or ordering is involved.

// #Day59 #100DaysOfCode #LeetCode #BinarySearchTree #InorderTraversal #DSA #CodingChallenge