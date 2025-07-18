//Leetcode#49
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsHashedKey = function (strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let frequency = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j++) {
            let index = strs[i][j].charCodeAt() - 'a'.charCodeAt()
            ++frequency[index]
        }
        let key = ""
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(97+k) + frequency[k]
            // key=key + # + String(frequency[k])
            // key=key + String(frequency[k])
        }
        map[key] ? map[key].push(strs[i]) : map[key] = [strs[i]]
    }
    return Object.values(map)
}
//Leetcode#49
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsSortedKey= function (strs) {
    let obj = {}
    for(let i=0;i<strs.length;i++){
        let sortedStrs = strs[i].split("").sort().join("")
        obj[sortedStrs]? obj[sortedStrs].push(strs[i]) : obj[sortedStrs]=[strs[i]]
    }
    return Object.values(obj)
};