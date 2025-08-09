// leetcode239
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowDequeOptimal = function (nums, k) {
    let l = 0
    let r = 0
    let deque = []
    let result = []

    while (r < nums.length) {
        while (deque.length > 0 && deque[deque.length - 1] < nums[r]) {
            deque.pop()
        }
        deque.push(nums[r])
        if (r >= k - 1) {
            result.push(deque[0])
            nums[l] === deque[0] && deque.shift()
            ++l
        }
        ++r
    }
    return result
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowsingDeques = function (nums, k) {
    let l = 1
    let r = k
    let deque = []
    let result = []
    //make a window and add k number of element in the deque
    for (let i = 0; i < k; i++) {
        while (deque[deque.length - 1] < nums[i]) {
            deque.pop()
        }
        deque.push(nums[i])
    }
    result.push(deque[0])

    while (r < nums.length ) {
        if (nums[l - 1] === deque[0]) {
            deque.shift()
        }
        while (deque[deque.length - 1] < nums[r]) {
            deque.pop()
        }
        deque.push(nums[r])
        result.push(deque[0])
        ++l
        ++r
    }
    return result
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow2 = function (nums, k) {
    let l = 1
    let r = k
    let arr = []
    let max = nums[0]
    for (let i = 1; i < k; i++) {
        max = Math.max(nums[i], max)
    }
    arr.push(max)

    while (r < nums.length) {
        let max = arr[arr.length - 1]
        if (nums[l - 1] === max) {
            let tempMax = nums[l]
            for (let i = 1; i < k; i++) {
                tempMax = Math.max(nums[l+i], tempMax)
            }
            arr.push(tempMax)
        }else{
            max = Math.max(max, nums[r])
            arr.push(max)
        }
        ++l
        ++r
    }
    return arr
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow1 = function(nums, k) {
    let arr =[]
    for(let i=0;i<nums.length-k+1;i++){
        let max = nums[i]
        for(let j=1;j<k;j++){
            max = Math.max(nums[i+j], max)
        }
        arr.push(max)
    }
    return arr
};