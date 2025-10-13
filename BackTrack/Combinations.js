// Leetcode#77
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = []
    let backtrack = (path, start) => {
        if (path.length === k) {
            result.push([...path])
            return
        }
        for (let i = start; i <= n; i++) {
            path.push(i)
            backtrack(path, i + 1)
            path.pop()
        }

    }
    backtrack([], 1)
    return result
};
// 🚀 100 Days of Code – Day 71

// Continuing my Backtracking journey, today I solved LeetCode 77: Combinations — a problem that highlights the power of recursion in systematically exploring all possible outcomes.

// ✨ Problem Summary:
// Given two integers n and k, the task is to return all possible combinations of k numbers out of the range [1...n].
// For example, if n = 4 and k = 2, the output should include:
// [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

// 🧩 Approach: Backtracking
// 🔹 Used a recursive backtrack function that gradually builds combinations by exploring each possible number from a starting point.
// 🔹 Whenever the temporary path reaches a length of k, it represents a valid combination and is added to the result.
// 🔹 After exploring a path, we backtrack by removing the last element — allowing the algorithm to explore the next possibility.

// 📊 Complexity Analysis:
// Time: O(C(n, k)) → proportional to the number of valid combinations.
// Space: O(k) → recursion depth and path storage.

// 💡 Learning Highlights:
// 🔹 This problem reinforced how backtracking provides structure to recursive exploration — avoiding unnecessary computation while covering all valid outcomes.
// 🔹 The key is understanding how to increment the start pointer and undo decisions efficiently.
// 🔹 A great example of applying recursion with precise boundaries and clear stopping conditions.

// 📈 Reflection:
// Problems like this make backtracking feel like controlled exploration — every recursive step narrows down the search space while ensuring nothing is missed. It’s a perfect mix of logic and structure.

// #100DaysOfCode #LeetCode #JavaScript #Backtracking #Recursion #ProblemSolving #CodingChallenge #DSA #Algorithm #DeveloperJourney #Coding