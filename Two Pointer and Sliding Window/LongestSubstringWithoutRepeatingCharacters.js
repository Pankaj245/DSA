//Leetcode#3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringUsingMap = function(s) {
    let map ={}
    let l=0
    let maxLength =0
    for(let r=0;r<s.length;r++){
        if(map[s[r]]!==undefined && map[s[r]]>=l){
            l=map[s[r]]+1
        }
        map[s[r]] = r
        maxLength = Math.max(maxLength, r-l+1)
    }
    return maxLength
}
//Leetcode#3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringUsingSet = function(s) {
    const mySet = new Set()
    let maxLength =0
    let l=r=0
    while(r<s.length){
        if(mySet.has(s[r])){
            while(mySet.has(s[r])){
                mySet.delete(s[l++])
            }
        }
            mySet.add(s[r])
            maxLength = Math.max(r-l+1, maxLength)
            ++r  
    }
    return maxLength
};