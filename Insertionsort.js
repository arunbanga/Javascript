// const arr = [2, 56, 678, 54, 67, 34];
// const Insertionsort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let numbertoinsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numbertoinsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numbertoinsert;
//   }
// };
// Insertionsort(arr);
// console.log(arr);

// or//
const arr = [2, 56, 678, 54, 67, 34];
const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};
let res = InsertionSort(arr);

console.log(arr);
