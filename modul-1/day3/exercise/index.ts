// 0 1 1 2 3 5 8 13 dst.

// Fibonacci Number

let limit: number = 15;

// setiap angka = jumlah dua angka sebelumnya
// fib(n) = fib(n-1) + fib(n-2)

let a: number = 0; // nilai fibo pertama
let b: number = 1; // nilai fibo kedua
let next: number = 0; // buat mengetahui bilangan setelah itu berapa

// jika ingin nilai terakhir (angka ke N), gunakan looping
let counter: number = 2;

// jika N = 1, fibo = 0
// jika N = 2, fibo = 1

if (limit === 1) {
  console.log(0);
} else if (limit === 2) {
  console.log(1);
} else {
  while (counter < limit) {
    next = a + b; // angka berikutnya = jumlah 2 angka sebelumnya
    a = b;
    b = next;

    console.log({
      next: next,
      a: a,
      b: b,
    });

    counter++;
  }

  console.log("Fibonacci ke-" + limit + " = " + b);
}
