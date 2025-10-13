// Leetcode#2300
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let result = []
    potions.sort((a, b) => (a - b));
    for (let i = 0; i < spells.length; i++) {
        count = 0
        let low = 0;
        let high = potions.length - 1
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2)
            if (spells[i] * potions[mid] >= success) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        if (spells[i] * potions[high] >= success) {
            count = potions.length - high
        } else {
            count = 0
        }

        result.push(count)
    }
    return result
};
//optimal
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let result = [];

  for (let spell of spells) {
    let threshold = Math.ceil(success / spell);
    let low = 0, high = potions.length;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (potions[mid] < threshold) low = mid + 1;
      else high = mid;
    }

    result.push(potions.length - low);
  }

  return result;
};
