//Leetcode#42
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length
    let l = 0
    let r = n - 1
    let leftMax = height[l]
    let rightMax = height[r]
    let water = 0

    while (l < r) {
        if (leftMax < rightMax) {
            ++l
            leftMax = Math.max(leftMax, height[l])
            water += leftMax - height[l]
        } else {
            --r
            rightMax = Math.max(rightMax, height[r])
            water += rightMax - height[r]
        }
    }
    return water
}
//Leetcode#42
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    n=height.length 
    let maxRight= []
    maxRight[n-1]= height[n -1]
    for(let i = n-2;i>=0;i--){
        maxRight[i]= Math.max(maxRight[i+1], height[i])
    }
    let maxLeft =[]
    maxLeft[0]= height[0]
    for(let i=1;i<n;i++){
        maxLeft[i] = Math.max(maxLeft[i-1], height[i])
    }
    let capacity = 0
    for(let i=0;i<n;i++){
        let currCapacity = Math.min(maxLeft[i],maxRight[i]) -height[i]
        capacity = capacity + currCapacity
    }
    return capacity
}
//Leetcode#42
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxRight= []
    n=height.length 
    let max= height[n -1]
    for(let i = n-1;i>=0;i--){
        max = Math.max(max, height[i])
        maxRight[i]= max
    }
    max= height[0]
    let maxLeft =[]
    for(let i=0;i<n;i++){
        max = Math.max(max, height[i])
        maxLeft[i] = max
    }
    let capacity = 0
    for(let i=0;i<n;i++){
        let currCapacity = Math.min(maxLeft[i],maxRight[i]) -height[i]
        capacity = capacity +currCapacity
    }
    return capacity
};