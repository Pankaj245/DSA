//Leetcode#33
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchOptimal = function (nums, target) {
    let l=0;
    let r= nums.length-1
    while(l<=r){
        let mid = l+ Math.floor((r-l)/2)
        if(target === nums[mid]){
            return mid
        }
        if(nums[l]<=nums[mid]){
            if(target >=nums[l] && target<= nums[mid]){
                r=mid-1
            }else{
                l=mid+1
            }
        }else{
            if(target>=nums[mid] && target<=nums[r]){
                l=mid+1
            }else{
                r=mid-1
            }
        }
    }
    return -1
}
//Leetcode#33
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var binarySeach = function (l, r) {
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (target < nums[mid]) {
                r = mid - 1;
            } else if (target > nums[mid]) {
                l = mid + 1
            } else {
                return mid
            }
        }
        return -1
    }
    let l = 0;
    let r = nums.length - 1
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        if (nums[l] < nums[r]) {
            let targetIndex = binarySeach(l, r)
            if (targetIndex === -1) {
                return -1
            } else {
                return targetIndex
            }
        } else {
            if (nums[mid] >= nums[l]) {
                if (target >= nums[l] && target <= nums[mid]) {
                    let targetIndex = binarySeach(l, mid)
                    if (targetIndex === -1) {
                        l = mid + 1
                    } else {
                        return targetIndex
                    }
                }else{
                    l=mid+1
                }
            }
            if (nums[mid] <= nums[r]) { 
                if (target <= nums[r] && target >= nums[mid]) {
                    let targetIndex = binarySeach(mid, r)
                    if (targetIndex === -1) {
                        r = mid - 1
                    } else {
                        return targetIndex
                    }
                }else{
                    r=mid-1
                }
            }
        }
    };
    return -1
}