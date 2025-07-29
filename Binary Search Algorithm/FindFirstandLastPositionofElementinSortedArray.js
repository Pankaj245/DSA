
//Leetcode#34
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
        let l= 0;
        let r = nums.length-1
        let result = []
        // left bound
        while(l<=r){
            let mid = l+ Math.floor((r-l)/2)
            if(nums[mid]=== target && (nums[mid]>nums[mid-1] || mid===0)){
                result.push(mid)
                break
            }else if(nums[mid]<target){
                l=mid+1
            }else{
                r=mid-1
            }
        }
        l= 0;
        r = nums.length-1
        while(l<=r){
            let mid = l+ Math.floor((r-l)/2)
            if(nums[mid]=== target &&( nums[mid]<nums[mid+1] || mid===nums.length-1)){
                result.push(mid)
                break
            }else if(nums[mid]<=target){
                l=mid+1
            }else{
                r=mid-1
            }
        }
       return (result.length) ? result : [-1,-1]
};
//Leetcode#34
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange3 = function (nums, target) {
    let l = 0;
    let r = nums.length - 1
    let result = []
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    nums[l] === target && result.push(l)
    l = 0;
    r = nums.length - 1
    while (l < r) {
        let mid = l + Math.ceil((r - l) / 2)
        if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid
        }
    }
    nums[l] === target && result.push(l)

    return result.length ? result : [-1, -1]
}
//Leetcode#34
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[0] = m;
            r = m - 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = arr.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[1] = m;
            l = m + 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return ans;
};
    