//Leetcode#69
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1) return x
    let l=2
    let r=Math.floor(x/2)
    let mid
    while(l<=r){
        mid = Math.trunc((l+r)/2)
        console.log(l,r, mid)
        if(x=== mid*mid){
            return mid
        }
        else if(x<mid*mid){
            r=mid-1
        }else {
            l=mid+1
        }
        console.log(l,r,mid)
    }
    return r
};