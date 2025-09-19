
let arr = [10,7,4,55,-10,-40,5]
let heapifyUp = (heap, i ) =>{
    while(i){
        let parent =Math.floor((i-1)/2)
        if(heap[parent]<heap[i]){
            [heap[parent],heap[i]]=[heap[i],heap[parent]]
            i=parent
        }else{
            break
        }
    }
}
let heapifyDown =(heap, i, length )=>{
    while(i<length){
        let leftChildIndex = (2*i)+1
        let rightChildIndex = (2*i)+2
        let largest=i
        if(leftChildIndex<length && heap[leftChildIndex]>heap[largest]){
            largest=leftChildIndex
        }
        if(rightChildIndex < length && heap[rightChildIndex]>heap[largest]){
            largest=rightChildIndex
        }
        if(largest!==i){
            [heap[largest],heap[i]] =[heap[i],heap[largest]]
            i=largest
        } else {
            break
        }
    }
}
let heapsort = (arr) => {
    // 1. create a max heap
    let heap = []
    for(let i=0;i<arr.length;i++){
        heap.push(arr[i])
        heapifyUp(heap, heap.length - 1)
    }
    
    //2. extract the max and heapify the last things
    //we got the peak as a max element so we can movethat to the last and do heapifyDown for rest of the elements.
    for(let i=0;i<heap.length-1;i++){
    [heap[0], heap[heap.length-1-i]]=[heap[heap.length-1-i],heap[0]]
        heapifyDown(heap, 0, heap.length-1-i)
    }
    return heap
}
console.log(heapsort(arr))

// 🚀 Day 63 of My #100DaysOfCode Challenge

// Today, I explored and implemented Heap Sort, one of the most efficient comparison-based sorting algorithms. Unlike simple algorithms like bubble sort or insertion sort, heap sort leverages the power of a binary heap data structure to achieve consistent performance.

// ✨ How Heap Sort Works

// 1️⃣ Building a Max Heap

// Imagine arranging all elements into a binary tree where every parent node is greater than its children.

// This structure ensures that the largest element always resides at the root.

// 2️⃣ Extracting the Maximum Element

// The root (largest element) is swapped with the last element in the heap.

// The size of the heap is reduced, and we restore the heap property using a process called "heapify down."

// 3️⃣ Repeating the Process

// We repeat extraction until all elements are placed in sorted order.

// By the end, we get a fully sorted array in ascending order.

// 🔑 Key Insights While Implementing
// ✔ Heap sort is an in-place algorithm — it doesn’t require extra memory like merge sort.
// ✔ Time Complexity:

// O(n log n) for worst, best, and average cases (consistent performance).
// ✔ Space Complexity:

// O(1) — only a constant amount of additional space is used.
// ✔ It’s not a stable sort (relative order of equal elements may change).

// 💡 Why Heap Sort is Important
// Heap sort is widely used in scenarios where memory is limited but consistent performance is critical. It provides a perfect balance between efficiency and space optimization.

// 🌱 Takeaway of the Day
// Implementing heap sort helped me strengthen my understanding of heaps as a data structure, particularly the operations of heapify up and heapify down. This exercise reinforced how powerful heaps are — not only for sorting but also for priority queues and scheduling problems.

// 🔖 That wraps up Day 63! Diving deeper into sorting algorithms like heap sort reminds me that beneath the abstraction of built-in methods, there’s a fascinating world of optimized logic shaping how our data gets organized.

// #Day63 #100DaysOfCode #HeapSort #DSA #ProblemSolving #CodingChallenge