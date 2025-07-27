/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
//Leetoce#278
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution2 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=0;
        let r= n;
        while(l<r){
         let mid = l+ Math.floor((r-l)/2)
            if(isBadVersion(mid)){
                r=mid
            }else(
                l=mid+1
            )
        }
        return r
    }
}
//Leetoce#278
var solution1 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=0;
        let r= n;
        while(l<=r){
         let mid = l+ Math.floor((r-l)/2)
            if(isBadVersion(mid)){
                r=mid-1
            }else(
                l=mid+1
            )
        }
        return l
    };
};