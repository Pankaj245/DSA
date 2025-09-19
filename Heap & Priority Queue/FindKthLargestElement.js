//Leetcode 215
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.front();
};
//Leetcode 215
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = [];
  let heapifyUp = (heap, i) => {
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  };
  let heapifyDown = (heap, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;
    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
      heapifyDown(heap, smallest);
    }
  };
  let dequeue = (heap) => {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    heapifyDown(heap, 0);
  };
  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    heapifyUp(heap, heap.length - 1);
    if (heap.length > k) {
      dequeue(heap);
    }
  }
  return heap[0];
};
//Leetcode 215
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

// 🔹 Sorting Approach
// Sort the array in descending order
// Pick the kth element
// Simple and quick but has O(n log n) complexity
// 🔹 Min Heap with Priority Queue
// Keep inserting elements into a min heap
// If heap size exceeds k, remove the smallest
// Efficient with O(n log k) time complexity
// 🔹 Custom Heap Implementation
// Wrote my own heapify-up and heapify-down methods
// Maintained a min heap manually
// Same efficiency but gave me a deeper understanding of heaps
// 💡 Key Learnings
// Sorting is fine for small inputs but not scalable
// Min Heap is optimal for large datasets and streaming scenarios
// Building from scratch helps strengthen core DSA fundamental
// 🌍 Real-world Applications
// Leaderboards in gaming 🎮
// Finding top k trending hashtags 📈
// Processing streaming data where only top results matter ⚡
// ✨ Exploring different approaches taught me that one problem can have multiple efficient solutions, and the real growth comes from understanding those perspectives.
// #Day65 #100DaysOfCode #Leetcode #DSA #Heap #PriorityQueue #CodingChallenge