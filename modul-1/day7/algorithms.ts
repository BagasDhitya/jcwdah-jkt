// Time Complexity - O(n) : cari barang di keranjang belanja
// kenapa O(n) -> semakin banyak barang, semakin banyak pengecekan yang harus dilakukan
class ShoppingBasket {
  private items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  findItems(target: string) {
    for (let item of this.items) {
      if (item === target) {
        return true;
      }
    }

    return false;
  }
}

const shoppingList: string[] = ["apple", "milk", "bread", "eggs"];
// const basket = new ShoppingBasket(shoppingList);

// -- cek runtime
// console.time("findItem runtime");
// console.log(basket.findItems("bread"));
// console.timeEnd("findItem runtime");

// test dengan dataset berbagai ukuran
function generateArray(size: number, target: string) {
  const arr: string[] = [];

  for (let i: number = 0; i < size - 1; i++) {
    arr.push("item" + 1);
  }

  arr.push(target);
  return arr;
}

// ukuran dataset untuk testing
const sizes: number[] = [10_000, 50_000, 100_000, 300_000, 600_000, 1_000_000];

// for (const size of sizes) {
//   const target = "bread";
//   const items = generateArray(size, target);
//   const basket = new ShoppingBasket(items);
//   const label = "Runtime for size : " + size;

//   console.time(label);
//   basket.findItems(target);
//   console.timeEnd(label);
// }

// Space Complexity - O(1) : menyimpan 1 slot parkir
// mau seberapa banyak kendaraan yang diparkir, yang disimpan di dalam memori hanya 1 slot parkir

class ParkingSlot {
  private currentCar: string | null = null;

  park(car: string) {
    this.currentCar = car;
  }

  leave() {
    this.currentCar = null;
  }

  status() {
    return this.currentCar;
  }
}

// convert bytes to kilobytes
function bytesToKB(bytes: number) {
  return (bytes / 1024).toFixed(2) + " KB";
}

// -- test memory
// const before = process.memoryUsage().heapUsed;

// const vipSlot = new ParkingSlot();
// vipSlot.park("Lexus");
// console.log("Status : ", vipSlot.status());

// const after = process.memoryUsage().heapUsed;

// console.log("Memory Before : ", bytesToKB(before));
// console.log("Memory After : ", bytesToKB(after));
// console.log("Memory Used : ", bytesToKB(after - before));

// -- BINARY SEARCH
// -> hanya bisa dipakai jika arraynya berurutan

// ambil posisi tengah
// bandingkan dengan target
// kalau target lebih kecil -> cari di kiri
// kalau target lebih besar -> cari di kanan

function binarySearch(arr: number[], target: number) {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; // geser ke kanan
    } else {
      right = mid - 1; // geser ke kiri
    }
  }
  return -1; // tidak ditemukan
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target: number = 7;
// console.log(binarySearch(arr, target));

// -- BUBBLE SORT

// bandingkan elemen berpasangan
// tukar jika urutannya salah
// ulangi sampai tidak ada yang perlu ditukar lagi

function bubbleSort(arr: number[]) {
  for (let i: number = 0; i < arr.length - 1; i++) {
    // flag untuk cek apakah ada perubahan
    let swapped: boolean = false;

    for (let j: number = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // tukar posisi
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // jika tidak ada swapping, array sudah terurut
    if (!swapped) break;
  }

  return arr;
}

const unsorted: number[] = [5, 1, 4, 2, 8];
console.log(bubbleSort(unsorted));

// unsorted = [5,1,4,2,8]
// [1,5,4,2,8]
// [1,4,5,2,8]
// [1,4,2,5,8]
// [1,2,4,5,8]

// Home > Product >
