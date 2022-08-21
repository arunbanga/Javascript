// const numbers = [3, 6, 7, 89, 56, 90];
// const LinearSerach = (arr, item) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return i;
//     }
//   }
//   return null;
// };
// console.log(LinearSerach(numbers, 3));
const users = [
  { userName: "xyz", email: "xyz@gmail.com" },
  { userName: "pqr", email: "pqr@gmail.com" },
  { userName: "abc", email: "abc@gmail.com" },
];

// const checkuser = (arr, val) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]["userName"] === val) {
//       return true;
//     }
//   }
//   return false;
// };
// const res = checkuser(users, "xyz");
// console.log(res);

//or//

const checkuser = (arr, val) => {
  for (let item of arr) {
    if (item["userName"] === val) {
      return true;
    }
  }
  return false;
};
const res = checkuser(users, "xyz");
console.log(res);
