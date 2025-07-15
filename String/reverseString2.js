// Leetcode#541
/** 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
    s = s.split("")
    for (let i = 0; i <= s.length; i = i + (2 * k)) {
        let mid = Math.floor(k / 2)
        for (let j = 0; j < mid; j++) {
            [s[i + j], s[i + k - j - 1]] = [s[i + k - j - 1], s[i + j]]
        }
    }
    return s.join("")
};