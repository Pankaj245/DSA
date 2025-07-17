//Leetcode#125
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            i++
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            j--
        }
        else if (s[i] === s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
}
//Leetcode#125
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeUsingWhile = function (s) {
    s = s.toLowerCase()
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        while (i < j && !s[i].match(/[a-z0-9]/i)) {
            i++
        }
        while (i < j && !s[j].match(/[a-z0-9]/i)) {
            j--
        }
        if (s[i] !== s[j]) {
            return false
        } else {
            i++
            j--
        }
    }
    return true
}
//Leetcode#125
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeUsingReverse = function (s) {
    s = s.toLowerCase()
    filteredString = ""
    rev = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredString = filteredString + s[i]
            rev = s[i] + rev
        }
    }
    return filteredString === rev
};