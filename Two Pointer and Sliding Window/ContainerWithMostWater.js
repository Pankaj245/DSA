//Leetcode#11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1
    maxCapacity = 0
    while (l < r) {
        let capacity = Math.min(height[l], height[r]) * (r - l)
        maxCapacity = Math.max(maxCapacity, capacity)
        if (height[l] > height[r]) {
            --r
        } else {
            ++l
        }
    }
    return maxCapacity
};