// Leetcode#235
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans =null
    let traversal = (curr)=>{
        let count = 0
        if(!curr) return count

        let leftCount = traversal(curr.left)
        let rightCount = traversal(curr.right)

        if(curr.val ===p.val || curr.val === q.val){
            ++count
        }
        count = count+leftCount +rightCount

        if(count === 2 && !ans){
            ans = curr
        }
        return count
    }
    traversal(root)
    return ans
};
// Leetcode#235
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
};

// 🌳 Day 60 of #100DaysOfCode Challenge

// Today I solved:
// LeetCode 235: Lowest Common Ancestor of a Binary Search Tree (BST)

// 👉 Problem Statement
// Given a Binary Search Tree (BST) and two nodes p and q, find their Lowest Common Ancestor (LCA) — the deepest node that has both p and q as descendants.

// ✨ Approaches I used

// 🔹 1. General Binary Tree Approach
// Since the tree might not always be a BST, the first solution works with any binary tree:
// ✔️ Traverse the tree recursively.
// ✔️ At each node, count how many of the two nodes (p, q) are found in its left subtree, right subtree, or itself.
// ✔️ When the count becomes 2 for the first time, that node is the LCA.

// ⚖️ Complexity → O(n), where n = number of nodes.

// 🔹 2. Optimized BST-Specific Approach
// Here we leverage BST properties:
// ✔️ If both p and q are smaller than the current node, move left.
// ✔️ If both are greater, move right.
// ✔️ Otherwise, the current node is the LCA.

// ⚡ This makes traversal efficient — we don’t need to check the entire tree.

// ⚖️ Complexity → O(h), where h = height of the tree.

// 💡 Key Takeaway
// For general trees, we need a full recursive traversal. But when the input is a BST, we can use its sorted property to simplify the solution dramatically and make it much faster.

// #Day60 #100DaysOfCode #LeetCode #DSA #BinarySearchTree #CodingChallenge #LowestCommonAncestor