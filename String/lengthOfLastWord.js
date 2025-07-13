// Leetcode#58
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordOneLoop = function (s) {
  let n = s.length - 1;
  count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};

// Leetcode#58
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordTwoLoop = function (s) {
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      n--;
      count++;
    } else {
      break;
    }
  }
  return count;
};

// Leetcode#58
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordFunction = function (s) {
  return s.trim().split(" ").slice(-1)[0].length;
};
