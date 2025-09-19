class maxPriorityQueue {
    constructor() {
        this.heap =[]
    }
    getLeftChildIndex(i) {
        return (2 * i) + 1
    }
    getRightChildIndex(i) {
        return (2 * i) + 2
    }
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    enqueue(value, priority) {
        this.heap.push({value, priority})
        let lastIndex = this.heap.length - 1
        this.heapifyUp(lastIndex)
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]]=[this.heap[j], this.heap[i]]
    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParent(i)
            if (this.heap[i].priority > this.heap[parentIndex].priority) {
                this.swap(i,parentIndex)
                i = parentIndex
            } else {
                break
            }
        }
    }
    dequeue() {
        if (this.heap.length === 0) {
            return null
        }
        this.swap(0, this.heap.length - 1)
        let ans = this.heap.pop();
        this.heapifyDown(0);
        return ans;
    }
    heapifyDown(i) {
        let leftChild = this.getLeftChildIndex(i)
        let rightChild = this.getRightChildIndex(i)
        let n = this.heap.length
        let largest = i
        if (leftChild < n && this.heap[leftChild].priority > this.heap[largest].priority) {
            largest = leftChild
        }
        if (rightChild < n && this.heap[rightChild].priority > this.heap[largest].priority) {
            largest = rightChild
        }
        if (largest !== i) {
            this.swap(largest, i) 
            this.heapifyDown(largest)
        }
    }
}
let pq = new maxPriorityQueue()
pq.enqueue("accident", 5)
pq.enqueue("heart attack", 7)
pq.enqueue("headache", 1)
let max1 = pq.dequeue()
let max2 = pq.dequeue()
console.log(max1, max2)
console.log(pq)

// 🚀 Day 64 of My #100DaysOfCode Challenge

// Today, I studied and implemented the Priority Queue (PQ) using a Max Heap.

// ✨ What is a Priority Queue?
// A Priority Queue is a special type of queue where each element is associated with a priority. Instead of being processed in the order they arrive (like a normal queue), elements with higher priority are served first.

// 💡 Real-Life Examples of Priority Queues
// 🔹 Hospital Emergency Room – Patients with critical conditions (like heart attacks) are treated before minor injuries (like headaches).
// 🔹 Operating System Scheduling – Tasks with higher priority are executed before background tasks.
// 🔹 Networking – Data packets with higher priority get transmitted first.
// 🔹 Event Simulation – Events are processed in the order of their urgency.

// ⚙️ How I Implemented Max Priority Queue

// 1️⃣ Storing Elements with Priority

// Each element is stored as an object {value, priority}.

// Example: "heart attack" with priority 7, "headache" with priority 1.

// 2️⃣ Enqueue (Insert Operation)

// Insert the new element at the end of the heap.

// Perform heapify up: compare it with its parent and move it up if it has a higher priority.

// 3️⃣ Dequeue (Remove Max Operation)

// Remove the root element (highest priority).

// Replace it with the last element.

// Perform heapify down: push it down by comparing with children until the heap property is restored.

// 4️⃣ Helper Methods

// getParent(i), getLeftChildIndex(i), getRightChildIndex(i) → Navigate in the binary heap.

// swap(i, j) → Swap two elements in the heap.

// 📌 Code Walkthrough with Example

// Insert "accident" with priority 5

// Insert "heart attack" with priority 7

// Insert "headache" with priority 1

// After enqueuing, the max heap ensures "heart attack" (priority 7) stays at the root.

// When we call dequeue():
// ✅ First removal → "heart attack" (highest priority)
// ✅ Second removal → "accident" (next highest priority)

// The remaining queue contains "headache".

// 🔑 Key Insights
// ✔ Priority Queue is built on top of a heap data structure for efficiency.
// ✔ Enqueue (insert) → O(log n)
// ✔ Dequeue (remove max) → O(log n)
// ✔ Access max element → O(1)

// 🌱 Takeaway of the Day
// Priority Queues are incredibly useful in solving real-world scheduling and resource allocation problems. Implementing it from scratch using heaps gave me a deeper understanding of how data structures directly impact performance.

// #Day64 #100DaysOfCode #PriorityQueue #Heap #DSA #CodingChallenge