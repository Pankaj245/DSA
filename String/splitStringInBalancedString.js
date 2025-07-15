//Leetcode#1221
// Input: s = "RLRRLLRLRL"
// Output: 4
// Input: s = "RLRRRLLRLL"
// Output: 2
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;
    let r = 0;
    let l = 0

    for (let i = 0; i < s.length; i++) {
        s[i] === "R" ? r++ : r--
        r === 0 && count++
    }
    return count
};