// Leetcode#116
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return root
    let arr = []
    let traverse = (curr, level) => {
        arr[level] = arr[level] || null
        curr.next = arr[level]
        arr[level] = curr
        curr.right && traverse(curr.right, level+1)
        curr.left && traverse(curr.left, level+1)
    }
    traverse(root, 0)
    return root
};

// 🚀 Day 54 of My #100DaysOfCode Challenge

// Today I solved an interesting tree problem:
// LeetCode 116: Populating Next Right Pointers in Each Node 🌳➡️🌳

// 👉 What’s the problem?
// We are given a perfect binary tree, and the task is to connect each node with its next right node. If there is no next right node, the pointer should be set to null.

// ✨ How I approached it
// 🔹 I used a top-down recursive traversal strategy.
// 🔹 For each level, I kept track of the last visited node using an array.
// 🔹 While visiting a node:
// – I connected its next pointer to the previously stored node at the same level.
// – Then I updated the stored reference for that level to the current node.
// 🔹 To ensure correct linking order, I traversed right first, then left, so the connections formed naturally from right to left.

// ⚖️ Why this works
// By processing nodes level by level and always linking the current node to the stored one, we efficiently set all next pointers without needing an explicit queue like in BFS.

// ⏱️ Complexity
// Time → O(n), since we visit each node exactly once.
// Space → O(h), where h is the tree height (recursion stack + level tracking).

// 🌟 Key Learning
// This problem highlights how recursion + level-wise tracking can sometimes replace BFS queues, leading to a cleaner and more elegant solution.

// 💬 Curious to hear: would you prefer solving this with recursion or with a queue-based BFS?

// #Day54 #100DaysOfCode #LeetCode #DSA #BinaryTree #ProblemSolving #CodingChallenge