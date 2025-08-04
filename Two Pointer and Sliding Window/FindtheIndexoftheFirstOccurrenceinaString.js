//Leetcode#28
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n= haystack.length
    let m = needle.length
    let j=0
    let i=0

    for(i=0;i<=n-m;i++){
        for(j=0;j<m;j++){
            if(haystack[i+j]!==needle[j]){
                break
            }
        }
        if(j===m) return i
    }
    return -1
};