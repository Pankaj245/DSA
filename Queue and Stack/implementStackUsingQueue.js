//Leetcode#225
var MyStack = function () {
    this.q1 = []
};
/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};
/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
      let n = this.q1.length
    for (let i = 0; i < n - 1; i++) {
        this.q1.push(this.q1.shift())
    }
    return this.q1.shift()
};
/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length
    for (let i = 0; i < n - 1; i++) {
        this.q1.push(this.q1.shift())
    }
    let element = this.q1.shift()
    this.q1.push(element)
    return element
};
/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0
};
