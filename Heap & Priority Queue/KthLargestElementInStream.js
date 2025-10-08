/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;

  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);

  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }

  return this.heap.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 🚀 100 Days of Code – Day 66

// Today, I tackled LeetCode 703: Kth Largest Element in a Stream – a problem focused on maintaining the Kth largest element efficiently as new elements are added to a dynamic data stream.

// ✨ Problem Summary:
// Given a stream of numbers, the task was to implement a class that can efficiently return the Kth largest element at any point. This involves handling dynamic updates without having to sort the entire dataset every time.

// 🛠 Approach & Key Takeaways:
// 🔹 Utilized a Min Heap (Priority Queue) to track the top K elements.
// 🔹 Maintained heap size equal to K, ensuring the smallest element in the heap is always the Kth largest in the stream.
// 🔹 Implemented add() method to insert new elements while keeping the heap size consistent.
// 🔹 Time Complexity: O(log K) per insertion, making it efficient for large streams.

// 💡 Learning Highlights:
// 🔹 Efficient data structures like heaps make streaming problems manageable.
// 🔹 Always focus on reducing unnecessary computations; in this case, sorting the entire array on every insertion is avoided.
// 🔹 Reinforced understanding of object-oriented programming in JavaScript, especially how to design classes with dynamic behavior.

// 📈 Reflection:
// Dynamic stream problems are common in real-time applications like leaderboards, analytics, and recommendation systems. Practicing these strengthens both algorithmic thinking and practical implementation skills.

// #100DaysOfCode #JavaScript #LeetCode #DataStructures #Heap #PriorityQueue #ProblemSolving #CodingJourney #DeveloperGrowth
