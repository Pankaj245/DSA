//Leetcode#153
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l= 0
    let r= nums.length-1

    while(l<r){
        let mid = l+ Math.floor((r-l)/2)
        if(nums[r]<nums[mid]){
            l=mid+1
        }else{
            r=mid
        }
    }
    return nums[l]
};

//Leetcode#153
var findMin = function(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[l] > a[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};