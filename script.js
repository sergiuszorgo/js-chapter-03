// // Задача 3-1
// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// //Write code under this line
// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// // Write code under this line
// console.log(keys);
// for (const key of keys) {
//   message += `${key} - ${user[key]}\n`;
// }

// console.log(message);
// /*
// 'age : 20
// hobby : skydiving
// name : Mango
// premium : false
// mood : happy
// "full time" : true
// ' */
// // ---
// Задача 3-2
// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
// ---
// Задача 3-3
// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   let maxImus = 0;
//   let lider = "";
//   for (const staff in employees) {
//     if (employees[staff] > maxImus) {
//       maxImus = employees[staff];
//       lider = staff;
//     }
//   }
//   return lider;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'
// ---
// Задача 3-4
// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let toTal = 0;
//   for (const staff in employees) {
//     toTal += employees[staff];
//   }
//   return toTal;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500
// Задача 3-5
function getAllPropValues(array, prop) {
  "use strict";
  // Write code under this line
  let stack = [];
    for (const item of array) {
    for (const key in item) {
      if (key === prop) {
        stack.push(item[key]);
      }
    }
  }
  return stack;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
