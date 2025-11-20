// FUNCTION
// ada 2 macam : declaration & expression

// declaration
// console.log('hoisting : ',sum(1, 2)); hoisting -> bisa dipanggil sebelum dideclare
function sum(x: number, y: number) {
  const result = x + y;
  return result;
}

// console.log(sum(1, 2));
// console.log(sum(2, 3));
// console.log(sum(3, 4));

// expression
// decrement(1,2) : tidak bisa dihoisting
const decrement = function (x: number, y: number) {
  if (x < y) {
    return "X must be higher than Y";
  }

  const result = x - y;
  return result;
};

// console.log(decrement(10, 5));
// console.log(decrement(5, 10));

// case : check even or odd number
function checkNumber(target: number) {
  if (target % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

// console.log(checkNumber(1))
// console.log(checkNumber(2))
// console.log(checkNumber(3))

// case : calculate total shopping
function calculateTotal(cart: number[]) {
  let total: number = 0; // untuk menampung total belanja

  for (let i: number = 0; i < cart.length; i++) {
    total = total + cart[i]!;
  }

  return total;
}

let shoppingCart: number[] = [15000, 20000, 5000, 30000];
// console.log('Total belanja : ', calculateTotal(shoppingCart))

// Default Parameter -> memberikan nilai awal ke parameter
// jika diberi argumen tambahan, maka nilai awal tergantikan
function greeting(name: string, time: string = "morning") {
  return `Good ${time}, ${name}!`;
}

// console.log(greeting("John Doe"));
// console.log(greeting("Jane Doe", "evening"));

// Rest Parameter -> satu parameter, bisa diisi banyak argumen
function sumAll(...values: number[]) {
  let total: number = 0;
  for (const num of values) {
    total = total + num;
  }

  return total;
}

// console.log(sumAll(5, 10, 15));
// console.log(sumAll(1, 2, 3, 4, 5));

// case 2 : menggabungkan banyak kata menjadi satu kalimat
function makeSentence(...words: string[]) {
  return words.join(" ");
}

// console.log(makeSentence("Belajar", "Typescript", "itu", "menyenangkan"));
// console.log(makeSentence("Budi", "sedang", "belajar", "rest", "parameter"));

// HOF -> High Order Function
// sebuah fungsi bawaan javascript yang dapat mengerjakan fungsi lain
// contoh : map, filter, reduce

// -- map

// case : mengubah angka menjadi angka yang sudah dikali 2
let randomNumber: number[] = [2, 4, 6, 8];
let doubled: number[] = randomNumber.map((num) => num * 2);
// console.log("map() : ", doubled);

// -- filter

// case : mengambil angka yang lebih besar dari 5
let values: number[] = [3, 8, 2, 10, 7];
let greaterThanFive: number[] = values.filter((num) => num > 5);
// console.log("filter() : ", greaterThanFive);

// -- reduce

// case : menjumlahkan seluruh angka
let prices: number[] = [10000, 15000, 5000];
let totalPrices: number = prices.reduce((acc, curr) => acc + curr, 0);
// console.log("reduce() : ", totalPrices)

// Nested Function -> function bersarang
// case : informasi dari sebuah persegi

function rectangleInfo(length: number, width: number) {
  function area() {
    return length * width;
  }

  function perimeter() {
    return 2 * (length + width);
  }

  return {
    area: area(),
    perimeter: perimeter(),
  };
}

// console.log(rectangleInfo(5, 3))

// CURRYING -> memecah fungsi berparameter banyak menjadi rangkaian fungsi satu per satu
// case : penjumlahan 3 angka

function add(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a + b + c;
    };
  };
}

console.log("Hasil : ", add(2)(3)(4));

// case : menghasilkan pesan sesuai topik & nama

function createMessage(topic: string) {
  return function (name: string) {
    return function (message: string) {
      return `[${topic}] ${name} : ${message}`;
    };
  };
}

console.log(createMessage("GREETING")("John Doe")("Selamat datang!"));

// RECURSIVE : sebuah fungsi yang memanggil dirinya sendiri
function countDown(fromNumber: number) {
  console.log(fromNumber);

  let nextNumber: number = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(3);

// ARROW FUNCTION : sebuah fungsi yang menggunakan () =>

// perbedaan dengan function expression
const calculateWithExpression = function (x: number, y: number) {
  return x + y;
};

// kalau arrow function
const calculateWithArrow = (x: number, y: number) => {
  return x + y;
};
