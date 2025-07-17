//Leetcode#242
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1
        obj[t[i]] = obj[t[i]] ? --obj[t[i]] : -1
    }
    let objKeys = Object.keys(obj)
    for (let j = 0; j < objKeys.length; j++) {
        if (obj[objKeys[j]] !== 0) {
            return false
        }
    }
    return true
}
//Leetcode#242
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.split("").sort().join("")===t.split("").sort().join("")
};