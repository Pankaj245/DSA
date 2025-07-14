// Leetcode#771
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStonesUsingSet = function(jewels, stones) {
    let result= 0;
    let jewelSet = new Set(jewels)
    console.log(jewelSet)
    for(let i=0;i<stones.length;i++){
        if(jewelSet.has(stones[i])){
            result++
        }
    }
    return result
}
// Leetcode#771
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStonesUsingTwoLoop = function(jewels, stones) {
    let result=0
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i]===jewels[j]){
                result++;
                break
            }
        }
    }
    return result
}
// Leetcode#771
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStonesFunction = function(jewels, stones) {
    let result = 0;
    for(let i =0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            result++
        }
    }
    return result
};