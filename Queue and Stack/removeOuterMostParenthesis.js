//Leetcode#1021
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParenthesesWithStack = function (s) {
    str = ""
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            str = str + (stack.length > 1 ? s[i] : "")
        }
        else {
            str = str + (stack.length > 1 ? s[i] : "")
            stack.pop()
        }
    }
    return str
};
//Leetcode#1021
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParenthesesWithoutStack = function (s) {
    str = ""
    let level = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            level+=1
            str = str + (level > 1 ? s[i] : "")
        }
        else {
            str = str + (level > 1 ? s[i] : "")
            level-=1
        }
    }
    return str
};