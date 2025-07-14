//Leetcode 3541
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSumOptimized = function (s) {
    let vowels = "aeiou"
    let vowelSet = new Set(vowels)

    let map = {}
    //store all the value with a frequency in map
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? ++map[s[i]] : map[s[i]] = 1
    }
    //Find the max vowel and consonants inside the map
    let maxVowels = 0
    let maxConsonants = 0
    let mapKeys = Object.keys(map)
    for (i = 0; i < mapKeys.length; i++) {
        if (vowelSet.has(mapKeys[i])) {
            maxVowels = Math.max(map[mapKeys[i]], maxVowels)
        }
        else {
            maxConsonants = Math.max(map[mapKeys[i]], maxConsonants)
        }
    }
    return maxConsonants + maxVowels
};

//Leetcode 3541
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = "aeiou"
    let vowelSet = new Set(vowels)

    let map = {}
    //store all the value with a frequency in map
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            ++map[s[i]]
        } else {
            map[s[i]] = 1
        }
    }
    //Find the max vowel and consonants inside the map
    let maxVowels = 0
    let maxConsonants = 0
    let mapKeys = Object.keys(map)
    for (i = 0; i < mapKeys.length; i++) {
        if (vowelSet.has(mapKeys[i])) {
            if (map[mapKeys[i]] > maxVowels) {
                maxVowels = map[mapKeys[i]]
            }
        } else {
            if (map[mapKeys[i]] > maxConsonants) {
                maxConsonants = map[mapKeys[i]]
            }
        }
    }
    return maxConsonants + maxVowels
};