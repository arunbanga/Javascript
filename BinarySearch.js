const BinarySerach = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log("midIndex" + midIndex + "min" + min + "max" + max);
    if (arr[midIndex] < num) {
      min = midIndex + 1;
    } else if (arr[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
};
const res = BinarySerach([3, 6, 7, 90, 30, 45], 6);
console.log(res);
