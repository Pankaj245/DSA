// Leetcode#739
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperaturesOptimal = function(temperatures) {
    let stack = []
    let n = temperatures.length
    let arr =Array(n).fill(0)
    let i=n-1
    while(i>=0){
        if(stack.length ===0){
            arr[i] = 0
            stack.push(i)
            i--
        }else if(temperatures[stack[stack.length-1]] > temperatures[i]){
            arr[i] = stack[stack.length-1] - i
            stack.push(i)
            i--
        }else{
            stack.pop()
        }
    }
    return arr
}
// Leetcode#739
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let map={}
    let stack= []
    let i = temperatures.length-1
    while (i >= 0) {  
        if (stack.length === 0) {
            map[i] = 0
            stack.push([temperatures[i], i])
            i--
        } else if (stack[stack.length - 1][0] > temperatures[i]) {
            map[i] = stack[stack.length - 1][1] - i
            stack.push([temperatures[i], i])
            i--
        } else {
            stack.pop()
        }
    }
    return temperatures.map((_,index)=>map[index])
};