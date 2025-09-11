// Leetcode#701
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
var insertIntoBST = function (root, val) {
    let curr = root
    if(!root) return new TreeNode(val, null,null)
    while (curr) {
        if (curr.val > val) {
            curr.left = curr.left ? curr.left : new TreeNode(val, null, null)
            curr = curr.left
        } else {
            curr.right = curr.right ? curr.right : new TreeNode(val, null, null)
            curr = curr.right
        }
        if(curr.val === val){
            break
        }
    }
    return root
};
// Leetcode#701
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
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};

// 🚀 Day 58 of My #100DaysOfCode Challenge

// Today I solved:
// 🌳 LeetCode 701: Insert into a Binary Search Tree

// 👉 Problem Statement
// We are given the root of a BST and a value to insert. The task is to place the new value in its correct position while keeping the BST property intact.

// ✨ Two Approaches I explored

// 🔹 Iterative Approach
// ✔ Start from the root and keep traversing until we find the correct empty spot.
// ✔ If the value is smaller → move left, else → move right.
// ✔ Once we hit a null spot, we insert the new node there.
// This avoids recursion and uses a simple loop for insertion.

// 🔹 Recursive Approach
// ✔ If the root is null → create a new node with the value.
// ✔ If the value is smaller → recursively insert in the left subtree.
// ✔ If the value is larger → recursively insert in the right subtree.
// This approach feels very natural because BSTs align well with recursive logic.

// ⚖️ Complexity Analysis
// ⏱ Time → O(h), where h = height of the BST (O(log n) for balanced, O(n) for skewed).
// 📦 Space → O(1) for iterative, O(h) recursion stack for recursive.

// 🌟 Key Learning
// Binary Search Trees are all about maintaining order while inserting, searching, or deleting. Both iterative and recursive solutions are valid — recursion feels cleaner, while iteration is memory efficient.

// 💬 Question for you:
// If you were to implement BST operations in a real-world project, would you pick recursion for readability or iteration for efficiency?

// #Day58 #100DaysOfCode #LeetCode #BinarySearchTree #DSA #ProblemSolving #CodingChallenge