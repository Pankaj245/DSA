//Leetcode#150
/**
 * @param {string[]} tokens
 * @return {number}s
 */
var evalRPN = function (tokens) {
    let stack = []
    let map = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    }
    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let second = stack.pop()
            let first = stack.pop()
            stack.push(Number(map[tokens[i]](first, second)))
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop()
}
//Leetcode#150
/**
 * @param {string[]} tokens
 * @return {number}s
 */
var evalRPN = function (tokens) {
    let stack = []
    let i = 0
    while (i < tokens.length) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            let second = stack.pop()
            let first = stack.pop()
            let ans
            if (tokens[i] === "+") {
                ans = first+ second
            } else if (tokens[i] === "-") {
                ans = first- second
            } else if (tokens[i] === "*") {
                ans = first * second
            } else {
                ans = Math.trunc(first / second)
            }
            stack.push(Number(ans))

        } else {
            stack.push(Number(tokens[i]))
        }
        i++
    }
    return (stack.pop())
};