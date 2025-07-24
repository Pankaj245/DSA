/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
    let arr = []
    for(let i=nums.length-1;i>=0;i--){
        stack.push(nums[i])
    }
    let i = nums.length-1
    while(i>=0){
        if(stack.length === 0){
            arr[i]= -1
            stack.push(nums[i])
            i--
        }else if(stack[stack.length-1] > nums[i]){
            arr[i] = stack[stack.length-1]
            stack.push(nums[i])
            i--
        }else{
            stack.pop()
        }
    }
    return arr
};