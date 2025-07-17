//Leetcode#205
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let objStoT = {}
    let objTtoS = {}
    for (let i = 0; i < s.length; i++) {
        if (!objStoT[s[i]] && !objTtoS[t[i]]) {
            objStoT[s[i]] = t[i]
            objTtoS[t[i]] = s[i]
        }
        else if (objStoT[s[i]] !== t[i]) {
            return false
        }
        else if (objTtoS[t[i]] !== s[i]) {
            return false
        }
    }
    return true
}
//Leetcode#205
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let objStoT = {}
    let objTtoS = {}
    for (let i = 0; i < s.length; i++) {
        if (objStoT[s[i]]) {
            if (objStoT[s[i]] !== t[i]) {
                return false
            }
        } else {
            if (objTtoS[t[i]]) { return false }
            objStoT[s[i]] = t[i]
            objTtoS[t[i]] = s[i]
        }
    }
    return true
};