// Leetcode#39
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result =[]
    let backtrack = (path, start)=>{
        let sum = 0
        for(let j=0;j<path.length;j++){
            sum+=path[j]
        }
        if(sum===target){
            result.push([...path])
            return
        }
        if(sum>= target){
            return
        }
        for(let i=start;i<candidates.length;i++){
            path.push(candidates[i])
            backtrack(path, i)
            path.pop()
        }

    }
    backtrack([], 0)
    return result
};

// 🚀 100 Days of Code – Day 74

// Today, I worked on LeetCode 39: Combination Sum — a classic backtracking problem that really tests recursive exploration and pruning.

// ✨ Problem Summary:
// Given an array of candidate numbers (without duplicates) and a target number, the goal is to find all unique combinations of candidates where the chosen numbers sum up to the target.

// You may use the same number multiple times.

// Order of elements doesn’t matter, only the combination itself.

// Example:
// For candidates = [2,3,6,7] and target = 7, the answer is:
// [[2,2,3], [7]].

// 🧩 Approach: Backtracking
// 🔹 I built combinations incrementally, adding candidates to a current path.
// 🔹 At each recursive call, I checked the sum of the path:

// If it equals the target → add to results.

// If it exceeds the target → stop exploring further (pruning).
// 🔹 The key detail: when recursing, I allowed the same index (i) again, so that numbers could be reused in the combination.
// 🔹 After exploring, I backtracked by removing the last element and continued with the next candidate.

// 📊 Complexity Analysis:
// Time: Roughly O(2^t), where t is the target value (since each decision is include/exclude).
// Space: O(target) for recursion stack depth.

// 💡 Learning Highlights:
// 🔹 Backtracking shines when the search space is large but can be pruned effectively.
// 🔹 Allowing repeated use of elements required a subtle tweak in recursion (recurse with i, not i+1).
// 🔹 This problem strengthened my understanding of combination-building logic in recursion.

// 📈 Reflection:
// It’s fascinating how a problem that seems like brute force at first becomes efficient and elegant with backtracking.
// This one felt like piecing together a puzzle — testing paths, pruning wrong ones, and saving the valid combinations.

// #100DaysOfCode #LeetCode #JavaScript #Backtracking #Recursion #ProblemSolving #CodingChallenge #Algorithm #DeveloperJourney #DSA #Coding