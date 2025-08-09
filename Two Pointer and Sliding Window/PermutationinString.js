// Leetcode#567
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let createHash = (arr) => {
        let hash = Array(26).fill(0)
        for (let i = 0; i < arr.length; i++) {
            ++hash[arr.charCodeAt(i)-97]
        }
        return hash
    }
    let isHashSame=(arr1, arr2) =>{
        for(let i=0;i<26;i++){
            if(arr1[i]!==arr2[i]){
                return false
            }
        }
        return true
    }

    let hashS1 = createHash(s1)

    let l = 0
    let n = s1.length
    while (l + n - 1 <= s2.length) {
        if (hashS1[s2.charCodeAt(l)-97]) {
            let hashWindow = createHash(s2.slice(l, l+n))
            if(isHashSame(hashWindow,hashS1)){
                return true
            }
        }
        l++
    }
    return false
};