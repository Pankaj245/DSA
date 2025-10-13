// Leetcode#46
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    let backtrack = path => {
        if (path.length === nums.length) {
            result.push([...path])
        }
        for (let i = 0; i < nums.length; i++) {
            if (!path.includes(nums[i])){
                path.push(nums[i])
                backtrack(path)
                path.pop()
            }
        }
    }
    backtrack([])
    return result
};
// 🚀 100 Days of Code – Day 72

// Today, I continued diving deeper into Backtracking and solved LeetCode 46: Permutations — one of the most fundamental problems to understand recursion and decision-making trees.

// ✨ Problem Summary:
// Given an array of distinct integers, the goal is to return all possible permutations — that is, every unique way to arrange all elements in the list.
// For example, for [1, 2, 3], the output includes [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].

// 🧩 Approach: Backtracking
// 🔹 The core idea is to build permutations step by step, choosing one element at a time while ensuring no duplicates are included in the current path.
// 🔹 Each recursive call explores one possible arrangement by adding a number not yet used.
// 🔹 Once a path’s length equals the input array’s length, it represents a valid permutation — added to the result list.
// 🔹 After each exploration, the algorithm backtracks by removing the last element and continues exploring other possibilities.

// 📊 Complexity Analysis:
// Time: O(n × n!) → There are n! possible permutations, and generating each takes O(n).
// Space: O(n) → For recursion stack and temporary path storage.

// 💡 Learning Highlights:
// 🔹 Backtracking is essentially systematic trial and error — exploring all valid possibilities while pruning invalid ones.
// 🔹 This problem deepened my understanding of state management within recursion, ensuring elements aren’t reused.
// 🔹 It’s a perfect example of recursion depth, path restoration, and how algorithms can mimic human decision-making.

// 📈 Reflection:
// Working on permutations showed how elegant and powerful recursion becomes when combined with constraints.
// Backtracking truly feels like “exploring all doors, one step at a time, and closing them carefully before moving on.”

// #100DaysOfCode #LeetCode #JavaScript #Backtracking #Recursion #ProblemSolving #CodingChallenge #Algorithm #DeveloperJourney #DSA #Coding