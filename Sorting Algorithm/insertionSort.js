const arr = [3, 5, 7, 9, 1, 2];

const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(insertionSort(arr));

const arr1 = [2, 4, 6, 7, 1, 3, 0];
const insertionSortWithWhile = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    console.log("arr", i, arr);
    arr[prev + 1] = curr;
  }
  return arr;
};

console.log(insertionSortWithWhile(arr1));
