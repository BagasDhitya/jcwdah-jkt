let scores: number[] = [90, 85, 77, 100];
let fruits: string[] = ["apple", "banana", "orange", "mango"];

// how to access array
// mau ambil satu-satu:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// array campuran
// let randomValues: Array<string | number | boolean> -> menggunakan Array generik

let randomValues: (string | number | boolean)[] = ["John Doe", 25, true, 100];

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "laptop", price: 15000000 },
  { name: "mouse", price: 150000 },
];

console.log(" ================================ ");

// perbedaan for biasa dan for of
let devices: string[] = ["mouse", "laptop", "monitor", "headset"];

// for biasa
for (let i: number = 0; i < devices.length; i++) {
  console.log(devices[i]);
}

console.log(" ------- ");
// for of
for (const item of devices) {
  console.log(item);
}

console.log(" ------- ");
// case : loop string (per huruf)
let name: string = "JohnDoe";

for (const char of name) {
  console.log(char);
}

console.log(" ------- ");
// foreach
// bisa mengambil : index, element, dll.
devices.forEach((device, index, arr) => {
  console.log(`${index} : ${device} in ${arr}`);
});

console.log(" ================================ ");
// ARRAY BUILT IN METHOD

let shopping: string[] = ["milk", "egg", "cooking oil", "rice"];

// 1. push() -> add elements at the end
shopping.push("indomie", "coconut oil");
console.log("push() : ", shopping);

// 2. pop() -> remove the last element
shopping.pop()
console.log("pop(): removed = ", shopping)

// 3. shift() -> remove the first element
shopping.shift()
console.log("after shift() : ", shopping)

// 4. unshift -> add elements at the beginning
shopping.unshift('vegetables', 'flour')
console.log("unshift() : ", shopping)

// 5. concat -> merge two different arrays
let arr1: number[] = [1,2,3]
let arr2: number[] = [4,5,6]
let merged = arr1.concat(arr2)
console.log('merged arrays : ', merged)