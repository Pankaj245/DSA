class minHeap {
    constructor() {
        this.heap = [1, 6, 7, 8, 9, 10];
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
    extract() {
        if (this.heap.length === 0) {
            return heap
        }
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        let ans = this.heap.pop();
        this.heapifyDown(0);
        return ans;
    }
    heapifyDown(i) {
        let leftChild = this.getLeftChildIndex(i)
        let rightChild = this.getRightChildIndex(i)
        let n = this.heap.length
        let smallest = i
        if (leftChild < n && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild
        }
        if (rightChild < n && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild
        }
        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }
}
let heap = new minHeap()
let min1 = heap.extract()
let min2 = heap.extract()
console.log(min1, min2)
console.log(heap)