//Leetcode#496
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {}
    let stack = []
    let i = nums2.length - 1
    while (i >= 0) {  
        if (stack.length === 0) {
            map[nums2[i]] = -1
            stack.push(nums2[i])
            i--
        } else if (stack[stack.length - 1] > nums2[i]) {
            map[nums2[i]] = stack[stack.length - 1]
            stack.push(nums2[i])
            i--
        } else {
            stack.pop()
        }
    }
    return nums1.map((val) => map[val])
};