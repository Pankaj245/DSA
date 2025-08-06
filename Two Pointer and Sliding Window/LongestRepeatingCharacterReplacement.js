// Leetcode#424
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = r = 0
    let map = {}
    map[s[r]]=1
    let maxLength = 0
    let isWindowValid = () => {
        let maxCount = 0
        let totalCount = 0
        let keyArray = Object.keys(map)
        for (let i = 0; i < keyArray.length; i++) {
            maxCount = Math.max(maxCount, map[keyArray[i]])
            totalCount += map[keyArray[i]]
        }
        return ((totalCount - maxCount) <= k)
    }

    while (r < s.length) {
        if (isWindowValid()) {
            maxLength = Math.max(maxLength, r - l + 1)
            ++r
            map[s[r]] = !map[s[r]] ? 1 : ++map[s[r]]
        } else {
            map[s[l]] = --map[s[l]]
            ++l
        }
    }

    return maxLength
};