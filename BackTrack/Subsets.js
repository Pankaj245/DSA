// Leetcode#78
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let backtrack = (path, start) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
};

// 🚀 100 Days of Code – Day 70

// Today marks the beginning of my Backtracking journey — one of the most powerful and elegant techniques in algorithm design.
// To kick it off, I solved LeetCode 78: Subsets, a classic problem that beautifully demonstrates the essence of recursive exploration.

// ✨ Problem Summary:
// Given an array of unique integers, the task is to generate all possible subsets (the power set).
// For example, for [1, 2, 3], the output should include every possible combination — from [] to [1, 2, 3].

// 🧩 Approach: Backtracking
// 🔹 The idea is to explore every decision point — at each step, we choose whether to include or exclude a particular element.
// 🔹 Used a recursive helper function that builds subsets by:
// Adding the current path to the result (since every stage represents a valid subset).
// Iterating through remaining elements and exploring further by including each number.
// 🔹 The backtrack function allows controlled recursion — once a path is explored, we “backtrack” by removing the last element and continue exploring the next possibility.

// 📊 Complexity Analysis:ˀ
// Time: O(2ⁿ), since each element can either be included or excluded.
// Space: O(n), for the recursion stack and subset generation.

// 💡 Learning Highlights:
// 🔹 Backtracking is all about building and undoing decisions — perfect for problems like subsets, permutations, and combinations.
// 🔹 Understanding the recursion flow and when to backtrack is key to mastering these problems.
// 🔹 Reinforced how recursive depth-first exploration can systematically generate all possibilities.

// 📈 Reflection:
// This problem gave me a clear foundation in how backtracking works. It’s not just about recursion — it’s about structured exploration and controlled unwinding, which makes it powerful for solving complex combinatorial problems.

// #100DaysOfCode #LeetCode #JavaScript #Backtracking #Recursion #ProblemSolving #CodingChallenge #Algorithm #DeveloperJourney #DSA #Coding
