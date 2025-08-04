//Leetcode#15
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    let twoSum = (arr, x) => {
        let l=x+1;
        let r= arr.length-1
        while(l<r){
            if(arr[l]+arr[r]+arr[x]=== 0){
                 result.push([arr[x],arr[l],arr[r]])
                 ++l
                 --r
                 while(l<r && arr[l]===arr[l-1]) ++l
                //  while(l<r && arr[r]===arr[r+1]) --r

            }else if(arr[l]+arr[r]+arr[x] < 0){
                ++l
            }else{
                --r
            }
        }
    }
    for(let i=0;i< nums.length;i++){
        if(i===0  || nums[i] !== nums[i-1] ){
            twoSum(nums, i)
        }
    }
    return result
};