/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let heap = new MaxPriorityQueue();

  for (let i = 0; i < stones.length; i++) {
    heap.enqueue(stones[i]);
  }
  while (heap.size() > 1) {
    let max1 = heap.dequeue();
    let max2 = heap.dequeue();

    let diff = max1 - max2
    diff !== 0 && heap.enqueue(diff);
  }
  return heap.front();
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let heap = MaxPriorityQueue.fromArray(stones)                                                                         
    while(heap.size()>1){                                                                            
        let max1= heap.dequeue()                                                                            
        let max2 = heap.dequeue()                                                                            
                                                                            
        let diff = Math.max(max1-max2)                                                                            
        heap.enqueue(diff)                                                                            
    }                                                                            
    return heap.front()
};

// 🚀 100 Days of Code – Day 67

// Today, I worked on LeetCode 1046: Last Stone Weight – a classic problem that involves efficiently simulating collisions between stones.

// ✨ Problem Summary:
// We are given an array of stone weights. In each turn, the two heaviest stones are smashed together:

// If they are equal, both stones are destroyed.

// If they are different, the heavier stone is reduced by the weight of the lighter stone.

// The goal is to determine the weight of the last remaining stone (or 0 if none remain).

// 🛠 Approach & Key Takeaways:
// 🔹 Utilized a Max Heap (Priority Queue) to always access the two heaviest stones efficiently.
// 🔹 Repeatedly removed the two largest stones, computed the difference, and reinserted the result if it was non-zero.
// 🔹 By maintaining the max heap, we avoid repeatedly sorting the array, ensuring efficient performance.
// 🔹 Time Complexity: O(N log N) – optimal for this type of problem.

// 💡 Learning Highlights:
// 🔹 Priority queues are extremely powerful for “top-K” or “max/min” scenarios.
// 🔹 Breaking down a problem into smaller operations (smash two stones repeatedly) allows for a clean and efficient solution.
// 🔹 Reinforced how heap operations can simplify real-world simulation problems.

// 📈 Reflection:
// This problem is a great exercise in understanding heaps, prioritization, and simulation logic – all of which are applicable in real-time gaming, resource management, and optimization scenarios.

// #100DaysOfCode #JavaScript #LeetCode #DataStructures #Heap #ProblemSolving #DeveloperJourney #CodingChallenge
