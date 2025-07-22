//Leetcode#155
var MinStackUsingTwoStack = function() {
    this.stack = []
    this.min = Infinity
    this.minStack=[]
};
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(val<this.min){
        this.min = val
    }
    this.stack.push(val)
    this.minStack.push(this.min)
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop()
    if(this.minStack.length === 0 ){
        this.min = Infinity
    }else{
        this.min = this.minStack[this.minStack.length-1]
    }
    return this.stack.pop()
};
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     return this.stack[this.stack.length -1]
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

//Leetcode#155
var MinStack = function() {
    this.stack = []
};
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0){
        this.stack.push([val,val])
    }else{
        let min = Math.min(val, this.stack[this.stack.length - 1][1])
        this.stack.push([val, min])
    }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     return this.stack[this.stack.length -1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
