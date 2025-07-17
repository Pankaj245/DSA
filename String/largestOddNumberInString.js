//Leetcode#1903
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n= num.length-1
    while(n>=0){
        if(Number(num[n])%2==1){
            return num.substring(0, n+1)
        }
         n--
    }
    return ""
};