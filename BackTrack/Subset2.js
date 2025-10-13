// Leetcode#90
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = []
    nums.sort()
    let backtrack = (path, start) => {
        result.push([...path])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i - 1] === nums[i]) continue;
            path.push(nums[i])
            backtrack(path, i + 1)
            path.pop()

        }
    }
    backtrack([], 0)
    return result
};

// 🚀 100 Days of Code – Day 73

// Today’s challenge was LeetCode 90: Subsets II, an interesting twist on the subsets problem I solved earlier — but this time, the array can contain duplicate elements.

// ✨ Problem Summary:
// Given an integer array nums that may include duplicates, the task is to return all possible unique subsets.
// For example, if nums = [1,2,2], the output should be:
// [[], [1], [2], [1,2], [2,2], [1,2,2]]

// 🧩 Approach: Backtracking with Duplicate Handling
// 🔹 First, I sorted the array to group duplicate values together.
// 🔹 Used a recursive backtrack function to explore all combinations while maintaining the current path.
// 🔹 To avoid duplicate subsets, I skipped over elements that were identical to the previous one on the same recursive level — using the condition if (i > start && nums[i - 1] === nums[i]) continue.
// 🔹 Each recursive call builds a subset, adds it to the result, explores deeper, and then backtracks by removing the last element.

// 📊 Complexity Analysis:
// Time: O(2ⁿ) → Every element can either be included or excluded.
// Space: O(n) → For recursion depth and temporary path storage.

// 💡 Learning Highlights:
// 🔹 Sorting the array is a simple yet powerful step to handle duplicates efficiently.
// 🔹 Learned how branch pruning (skipping duplicates) keeps results clean without extra memory or checks.
// 🔹 Reinforced how small logical conditions can drastically improve performance and correctness in recursion.

// 📈 Reflection:
// This problem was a great reminder that backtracking isn’t just about exploring all paths — it’s about exploring them smartly.
// By recognizing and skipping redundant choices, we turn brute force into elegant logic.

// #100DaysOfCode #LeetCode #JavaScript #Backtracking #Recursion #ProblemSolving #CodingChallenge #Algorithm #DeveloperJourney #DSA #Coding