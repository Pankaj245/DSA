//Leetcode#167
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumUsingTwoPointer = function(numbers, target) {
    let l =0;
    let r = numbers.length-1;
    while(l<r){
        if(numbers[l]+numbers[r] === target){
            return [l+1,r+1]
        }else if(numbers[l]+numbers[r] < target){
            ++l
        }else{
            --r
        }
    }
}
//Leetcode#167
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumUsingBinarySeach = function(numbers, target) {
    let binarysearch = (l,r, number)=>{
        while(l<=r){
            let mid= l+ Math.floor((r-l)/2)
            if(numbers[mid]===number){
                return mid
            }else if (numbers[mid]<number){
                l=mid+1
            }else{
                r=mid-1
            }
        }
        return -1
    }
    for(let i=0;i<numbers.length;i++){
        let number = target - numbers[i]
        let index = binarysearch(i+1, numbers.length-1,number)
        if(index!== -1){
            return [i+1, index+1]
        }
    }
};