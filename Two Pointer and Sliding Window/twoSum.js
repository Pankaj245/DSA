// Leetcode#1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumUsingMap = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let number = target - nums[i]
        if (map[number] && map[number] !== i) {
            return [i, map[number]]
        }
    }
}
// Leetcode#1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let n= nums.length
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let number = target - nums[i]
            if(nums[j]===number){
                return [i,j]
            }
        }
    }
};