// loop for -> perulangan untuk kondisi yang sudah diketahui sebelum dieksekusi
// terdiri dari -> for(start; end; condition)

// case : print angka 1 sampai 5
for (let i: number = 1; i <= 5; i++) {
  console.log("Number : ", i);
}

console.log(" ========== ");

// case : print angka 1 sampai -5
for (let i: number = 1; i >= -5; i--) {
  console.log("Number : ", i);
}

console.log(" ========== ");

// case : menjumlahkan angka 1 sampai 10
let total: number = 0; // untuk menampung hasil penjumlahan

for (let x: number = 1; x <= 10; x++) {
  console.log("sum : ", total); // proses perulangan
  total = total + x; // menambah nilai x ke total
}

console.log("Total sum from 1 to 10 is : ", total);
console.log(" ========== ");

// while loop -> perulangan yang berdasarkan kondisi belum diketahui
// bergantung pada true atau false

// case : menghitung dari 1 sampai 5
let counter: number = 1;

while (counter <= 5) {
  console.log("Counter : ", counter);
  counter++;
}

console.log(" ========== ");
// case : hitung mundur dari 10 sampai 6
let num: number = 10;

while (num >= 6) {
  console.log("Number : ", num);
  num--;
}

// do while loop -> sama seperti while, hanya saja pasti akan dieksekusi minimal 1x walaupun kondisinya false
// case : minimal 1 kali tampil pesan

let showMessage: boolean = false; // sengaja dijadikan false

do {
  console.log("This message runs at least once!");
} while (showMessage);

// perbedaan dengan while : kalau while tidak akan dieksekusi
while (showMessage) {
  console.log("When using while loop");
}
