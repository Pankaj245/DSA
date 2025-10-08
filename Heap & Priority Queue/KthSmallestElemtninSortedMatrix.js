// Leetcode#378
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let pq = new MinPriorityQueue((x) => x.val);
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    pq.push({ val: matrix[i][0], row: i, col: 0 });
  }
  while (count < k - 1) {
    let { val, row, col } = pq.pop();
    col + 1 < matrix.length &&
      pq.push({ val: matrix[row][col + 1], row: row, col: col + 1 });
    ++count;
  }
  let { val, row, col } = pq.pop();
  return val;
};

// let nums = matrix.flat()
// let pq = new MinPriorityQueue()

// for (let i = 0; i < nums.length; i++) {
//     pq.push(nums[i])
//     if (pq.size() > nums.length - k + 1) {
//         pq.pop()
//     }
// }
// return Number(pq.front())

// 🚀 100 Days of Code – Day 69

// Today, I solved LeetCode 378: Kth Smallest Element in a Sorted Matrix — a problem that challenges you to efficiently find the kth smallest element in a matrix where each row and column is sorted in ascending order.

// ✨ Problem Summary:
// We’re given a sorted 2D matrix and an integer k. The goal is to find the kth smallest number if all matrix elements were placed in a single sorted list.

// This problem tests your ability to handle sorted data structures efficiently without flattening or sorting the entire matrix — a key concept in data optimization.

// 🧩 Approach: Min Heap (Priority Queue)
// 🔹 Each row in the matrix is individually sorted, so I leveraged this property to process elements in ascending order.
// 🔹 Initially, inserted the first element of each row into a Min Heap, where the heap ensures the smallest element is always on top.
// 🔹 Repeatedly removed (popped) the smallest element from the heap and inserted the next element in the same row — maintaining sorted order dynamically.
// 🔹 After performing this operation k-1 times, the next element popped from the heap gives the kth smallest element.

// 📊 Complexity Analysis:

// Time: O(k log n) → each heap operation (insert/pop) costs log n, where n is the matrix dimension.

// Space: O(n) → for storing one element from each row in the heap.

// 💡 Learning Highlights:
// 🔹 Using a Min Heap allows us to efficiently merge sorted lists — similar to the logic behind merging in the “K sorted lists” problem.
// 🔹 Instead of flattening and sorting (O(n² log n²)), heap-based traversal gives a major performance boost.
// 🔹 Reinforced the importance of leveraging matrix properties and data structures together for optimal solutions.

// 📈 Reflection:
// This problem was a great example of how priority queues can help manage sorted data efficiently. The concept applies to real-world scenarios like database query optimizations, stream ranking, and merging sorted datasets.

// #100DaysOfCode #LeetCode #JavaScript #DataStructures #Heap #PriorityQueue #Matrix #Algorithm #ProblemSolving #DeveloperJourney #CodingChallenge
