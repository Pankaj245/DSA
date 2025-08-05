//Leetcode#56
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let result = []
    intervals.sort((a, b) => a[0] - b[0])
    for(let i=0;i<intervals.length;i++){
        let lastResult = result.pop()
        if(lastResult && lastResult[1] >=intervals[i][0] ){
            result.push([Math.min(lastResult[0] ,intervals[i][0]), Math.max(lastResult[1] ,intervals[i][1])])
        }else{
            lastResult && result.push(lastResult)
            result.push(intervals[i])
        }
    }
    return result
};
// Leetcode#56
var mergeWithoutPop = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            merged.push(prev);
            prev = intervals[i];
        }
    }

    merged.push(prev);
    return merged;
};