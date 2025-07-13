//Leetcode#2942
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
};

//Leetcode#2942
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContainingFunction = function (words, x) {
  let result = [];
  words.forEach((word, index) => word.includes(x) && result.push(index));
  return result;
};
