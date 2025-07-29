// //leetcode#852
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var peakIndexInMountainArray2= function(nums) {
    let l=0;
    let r=nums.length -1

    while(l<r){
        let mid= l+Math.floor((r-l)/2)
        if(nums[mid]<nums[mid+1]){
            l=mid+1
        }
        else{
            r=mid
        }
    }
    return l
    
};
//leetcode#852
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray1 = function(nums) {
    let l=0;
    let r=nums.length -1

    while(l<=r){
        let mid= l+Math.floor((r-l)/2)
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid
        }
        else if(nums[mid]<nums[mid+1]){
            l=mid+1
        }
        else{
            r=mid-1
        }
    }
    
};