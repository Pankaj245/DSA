// Leetcode#347
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = !map[nums[i]] ? 1 : ++map[nums[i]]                                                    
    }

    let pq = new MinPriorityQueue(x => x.freq)

    for(key in map){
        pq.push({val:key, freq: map[key]})
        if(pq.size()>k){
            pq.pop()
        }
    }
    return pq.toArray().map(x=>Number(x.val))
};

// 🚀 100 Days of Code – Day 68

// Today, I solved LeetCode 347: Top K Frequent Elements — a classic problem that focuses on identifying the most common elements in an array with optimal efficiency.

// ✨ Problem Summary:
// Given an integer array and a number k, the goal is to return the k most frequent elements. This problem is widely applicable in areas like trending topics detection, keyword analysis, and user behavior tracking.

// 🧩 Approach 1: Sorting Method
// 🔹 First, I created a frequency map to count how many times each element appeared.
// 🔹 Then, I transformed that map into an array of pairs — each pair containing the element and its frequency.
// 🔹 Sorted this array in descending order of frequency, ensuring the most frequent elements appear first.
// 🔹 Finally, I extracted the top k elements from the sorted list.

// 📊 Complexity:

// Time: O(n log n), due to sorting the frequency pairs.

// Space: O(n), for storing the frequency map and transformed array.

// This method is straightforward and intuitive, making it great for clarity and smaller datasets — but not the most efficient for large input sizes.

// ⚙️ Approach 2: Min Heap (Priority Queue)
// 🔹 Similar to the previous approach, I started by building a frequency map.
// 🔹 Then, I used a Min Heap to maintain only the top k most frequent elements dynamically.
// 🔹 Whenever the heap size exceeded k, I removed the element with the smallest frequency — ensuring only the most relevant items stayed.

// 📊 Complexity:

// Time: O(n log k), as heap operations are logarithmic and we only keep k elements at a time.

// Space: O(n), for the frequency map and heap.

// 💡 Learning Highlights:
// 🔹 Sorting is simple but costly — heaps provide a smarter way to deal with “Top K” problems.
// 🔹 Choosing the right data structure can drastically improve performance.
// 🔹 Reinforced the importance of analyzing trade-offs between readability and efficiency.

// 📈 Reflection:
// This problem beautifully demonstrates how the same goal can be achieved through multiple approaches — and how understanding algorithmic efficiency helps in making informed design decisions in real-world systems.

// #100DaysOfCode #LeetCode #JavaScript #DataStructures #Heap #PriorityQueue #Sorting #Algorithm #CodingChallenge #DeveloperJourney