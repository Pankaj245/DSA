//Leetcode#14
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let x = 0
    let n = strs.length
    while (x < strs[0].length) {
        let char = strs[0][x]
        for (let i = 0; i < n; i++) {
            if (char !== strs[i][x] || x=== strs[i].length) {
                return strs[i].substring(0, x)
            }
        }
        x++
    }
    return strs[0]
};