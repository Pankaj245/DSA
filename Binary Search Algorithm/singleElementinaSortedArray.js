//Leetcode#540
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate2 = function (nums) {
    let l = 0
    let r = nums.length-1
    while(l<=r){
        let mid = l+ Math.floor((r-l)/2)
        if(nums[mid]===nums[mid+1]){
            if((mid-l)%2===0){
                l=mid+2
            }else{
                r=mid-1
            }
        }else if(nums[mid]===nums[mid-1]){
            if((mid-1-l)%2===0){
                l=mid+1
            }else{
                r=mid-2
            }
        }else{
            return nums[mid]
        }
    }
}
//Leetcode#540
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate1 = function (nums) {
    let l = 0;
    let r = nums.length - 1
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === nums[mid + 1]) {
            if ((r - mid + 1) % 2 === 0) {
                r = mid - 1
            }else{
                l=mid
            }
        } else if((r - mid ) % 2 === 0){
            r=mid
        }else{
            l=mid+1
        }
    }
};