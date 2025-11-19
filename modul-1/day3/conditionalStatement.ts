// if -> hanya mengeksekusi satu kondisi aja

let age: number = 20;

if (age >= 17) {
  console.log("Now you can create identity card");
}

// if else -> mengeksekusi dua kondisi
age = 16;

if (age >= 17) {
  console.log("Now you can create identity card");
} else {
  console.log("You are not old enough to create identity card");
}

console.log(" ======================================= ");

// case : mengecek apakah toko masih buka atau sudah tutup
let currentHour: number = 21;
let closedHour: number = 21;

if (currentHour <= closedHour) {
  console.log("The store is open");
} else {
  console.log("The store is closed");
}

console.log(" ======================================= ");

// case : mengecek nilai harian
let minimumScore: number = 70;
let myScore: number = 75;

if (myScore < minimumScore) {
  console.log("Cannot pass exam");
} else {
  console.log("Congrats");
}

console.log(" ======================================= ");

// case : mengecek email dan password
let personalInfo: { email: string; password: string } = {
  email: "john.doe@example.com",
  password: "JohnDoe12345",
};

let inputEmail: string = "jane.doe@example.com";
let inputPassword: string = "JaneDoe12345";

// logical operator AND &&
// true + true = true
// true + false = false
// false + true = false
// false + false = false

if (
  inputEmail !== personalInfo.email &&
  inputPassword !== personalInfo.password
) {
  console.log("Access Denied");
} else {
  console.log("Access Granted");
}

console.log(" ======================================= ");

// Nested if -> pengecekan dobel
// case : mengecek ID Card dan suhu tubuh

let myID: number = 12345;
let myTemperature: number = 34;

let minimumTemp: number = 40;

if (myID) {
  console.log("Checking process ...");
  console.log("Next, check temperature");

  if (myTemperature < minimumTemp) {
    console.log("Access Granted");
  } else {
    console.log("Access Denied");
  }
}

console.log(" ======================================= ");

// else if -> mengecek dua atau lebih kondisi yang berbeda
let grade: string = "B";

if (grade === "A") {
  console.log("Excellent exam score");
} else if (grade === "B") {
  console.log("Good enough for exam");
}

console.log(" ======================================= ");

// case : menentukan kategori nilai

let currentScore: number = 82;

// jika score >= 90 -> Grade A
// jika score >= 80 -> Grade B
// jika score >= 70 -> Grade C
// jika tidak masuk semua -> Grade D

if (currentScore >= 90) {
  console.log("Grade A");
} else if (currentScore >= 80) {
  console.log("Grade B");
} else if (currentScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

console.log(" ======================================= ");

// switch case : digunakan untuk memilih satu dari banyak action berdasarkan nilai tertentu
// switch case perlu BREAK untuk menghentikan apabila kondisi sudah terpenuhi

// case : traffic light

let signal: string = "orange";

switch (signal) {
  case "red":
    console.log("stop");
    break;
  case "orange":
    console.log("prepare stop");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("unknown signal");
}

console.log(" ======================================= ");

// case : menentukan status pengiriman

let shippingStatus: string = "delivered";

// jika "pending" -> belum diproses
// jika "shipped" -> dalam perjalanan
// jika "delivered" -> sudah tiba
// jika tidak cocok -> status tidak valid

switch (shippingStatus) {
  case "pending":
    console.log("Your order is pending");
    break;
  case "shipped":
    console.log("Your order is on the way");
    break;
  case "delivered":
    console.log("Your order has arrived");
    break;
  default:
    console.log("Invalid shipping status");
}

console.log(" ======================================= ");

// case : undian berhadiah

// Math.random() -> menghasilkan angka dari 0 sampai 1
// Math.ceil() -> membulatkan angka ke atas

let lotteryNumber: number = Math.ceil(Math.random() * 5);
console.log("lottery number : ", lotteryNumber);

switch (lotteryNumber) {
  case 1:
    console.log("Congratulations! You won cooking oil");
    break;
  case 2:
    console.log("Congratulations! You won 5kg Rice");
    break;
  case 3:
    console.log("Congratulations! You won a shopping voucher");
    break;
  default:
    console.log("Try again");
}

console.log(" ======================================= ");

// logical operator : AND, OR, NOT (negasi)

// AND (&&)
// true + true = true
// true + false = false
// false + true = false
// false + false = false

// OR (||)
// true + true = true
// true + false = true
// false + true = true
// false + false = false

// NOT (!)
// !true = false
// !false = true

let statementA = 20 > 5;
let statementB = 5 < 4;

let statementC = 10 >= 10;
let statementD = 9 > 10;

// if (statementA || statementB) {
//   console.log("execute ...");
// }

// if (statementC && statementD) {
//   console.log("execute ...");
// }

// if (statementA || statementD) {
//   console.log("execute ...");
// }

// if ((statementA && statementC) || statementB) {
//   console.log("execute ...");
// }

if ((!statementD || statementA) && statementB) {
  console.log("execute ...");
}

console.log(" ======================================= ");

// ternary operator -> versi singkat dari if else
// case : driving license

let agePerson: number = 17;
let drivingStatus = agePerson >= 17 ? "Allowed to apply" : "Not allowed";
console.log("status : ", drivingStatus);

console.log(" ======================================= ");

// case : menentukan bilangan ganjil atau genap
let value: number = 12;
let checkType = value % 2 === 0 ? "Even number" : "Odd number";
console.log("type : ", checkType);

console.log(" ======================================= ");

// case : mengecek umur & id card
// tidak disarankan untuk menggunakan ternary operator apabila statement bercabang
// bikin bingung

agePerson = 20;
let idCard: number = 1234;
let checkIdentity =
  agePerson >= 21 ? "Allowed" : idCard ? "Access Granted" : "Access Denied";
console.log("condition : ", checkIdentity);

console.log(" ======================================= ");

// check even or odd
let target: number = 10;
let isEven: boolean = false; // variabel flag -> untuk menandakan suatu kejadian

if (target % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log("result : ", isEven === true ? "Even number" : "Odd number");
