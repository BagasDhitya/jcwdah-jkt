// membuat objek bernama Car

let car = {
  brand: "Toyota",
  color: "Black",
  drive: function () {
    console.log("Car is driving");
  },
};

// console.log("brand : ", car.brand);
// console.log("color : ", car.color);
// car.drive();

// INTERFACE -> blueprint dari sebuah objek
// bisa dipakai berulang kali

interface Car {
  brand: string;
  model: string;
  year: number;
  drive(): void;
  transmission?: "automatic" | "manual"; // ? -> property opsional/tidak wajib ada di instance
}

let myCar: Car = {
  brand: "Toyota",
  model: "Supra",
  year: 2024,
  drive() {
    console.log("The car is driving fast!");
  },
  transmission: "automatic",
};

let yourCar: Car = {
  brand: "Honda",
  model: "Civic",
  year: 2021,
  drive() {
    console.log("Car is driving");
  },
};

// console.log("my car : ", myCar.brand + " " + myCar.model);
// console.log("your car : ", yourCar.brand + " " + yourCar.model);

// TYPES -> blueprint dari sebuah tipe data
// bisa dipakai berulang kali

type Role = "GUEST" | "ADMIN";

interface UserProfile {
  username: string;
  age: number;
  role: Role;
  email?: string;
}

let profile: UserProfile = {
  username: "AlexJohnson",
  age: 25,
  role: "ADMIN",
};

// -- add property
// console.log('before : ', profile)
profile.email = "alexjohnson@mail.com";
// console.log('after : ',profile);

// -- delete property (hanya bisa digunakan untuk properti yang opsional)
// console.log("before : ", profile);
delete profile.email;
// console.log("after : ", profile);

// -- optional chaining -> mengakses property yang mungkin tidak ada tanpa error
let fruit: any = {
  name: "Banana",
  price: 5000,
  color: "yellow",
  "origin-country": "Indonesia",
};

// console.log(fruit.color?.toUpperCase()); // jika color ada, akan mengubah ke uppercase

// ada 2 cara untuk mengambil value : pakai . / ['']
// console.log(fruit.name);
// console.log(fruit["name"]);
// console.log(fruit["origin-country"]); // untuk mengakses property yang diapit string

// MUTABLE -> variabel yang bisa dimodifikasi
let person = {
  name: "David",
  age: 27,
};

// bisa dimodifikasi
person.name = "John Doe";
person.age = 30;
// console.log(person);

// IMMUTABLE -> variabel yang tidak bisa dimodifikasi langsung
// IMMUTABLE sering terjadi di tipe data primitive
let word: string = "Hello";

// word[0] = "M"; // tidak bisa dimodifikasi langsung (harus deklarasi ulang)
word = "Mello"; // baru bisa dimodifikasi ketika kita mendeklarasikan ulang untuk update
// console.log(word);

// -- destructuring assignment -> digunakan untuk ambil value dari object/array

// object destructuring:
interface Product {
  title: string;
  price: number;
  brand: string;
}

let product: Product = {
  title: "Laptop",
  price: 1500,
  brand: "Apple",
};

const { title, price, brand } = product;

// console.log(title);
// console.log(price);
// console.log(brand);

// array destructuring:
const colors: string[] = ["red", "green", "blue"];
const [first, second] = colors; // nama boleh bebas, tidak harus first dan second

// console.log(first);
// console.log(second);

// -- spread operator : untuk copy dari objek/array

// copy object:
const updatedProduct = {
  ...product,
  year: 2020,
};

// console.log('updated : ', updatedProduct)

// copy array:
const updatedColor = [...colors, "purple"];

// console.log("updated : ", updatedColor);