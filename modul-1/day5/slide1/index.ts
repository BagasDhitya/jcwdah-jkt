// soal 1 : lowest, highest, average

function getStats(arr: number[]) {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
      // pengecekan antara index saat ini dengan index berikutnya
      if (arr[j]! > arr[j + 1]!) {
        const temp: number = arr[j]!;
        console.log(" -- temp : ", temp);
        arr[j] = arr[j + 1]!;
        console.log(" --- index saat ini : ", arr[j]);
        arr[j + 1] = temp;
        console.log(" --- index berikutnya : ", arr[j + 1]);
      }
    }
  }

  let total: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    total = total + arr[i]!;
  }

  return {
    lowest: arr[0],
    highest: arr[arr.length - 1],
    average: total / arr.length,
  };
}

// console.log(getStats([12, 5, 23, 18, 4, 45, 32]));

// let randomNumber: number[] = [20, 15, 10, 5, 25, 100];
// randomNumber[5]
// length - 1 -> menunjuk index terakhir dari sebuah array

// soal 2 : gabungan kata

function joinWords(arr: string[]) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  let result: string = ""; // untuk menampung hasil akhir

  for (let i: number = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result = result + "and " + arr[i];
    } else {
      result = result + arr[i] + ",";
    }
  }

  return result;
}

const fruits: string[] = ["apple", "banana", "cherry", "date"];
// console.log(joinWords(fruits))

// soal 3 : mencari bilangan terkecil ke-2

function secondSmallest(arr: number[]) {
  let smallest: number = Infinity;
  let second: number = Infinity;

  for (let i: number = 0; i < arr.length; i++) {
    const value: number = arr[i];

    // pengecekan untuk menentukan bilangan terkecil ke-2
    if (value < smallest) {
      second = smallest; // geser
      smallest = value;
    } else if (value < second && value !== smallest) {
      second = value;
    }
  }
  return second;
}

const values: number[] = [5, 3, 1, 7, 2, 6];
// console.log(secondSmallest(values));

// soal 4 : menghitung elemen di posisi yang sama

function totalSamePosition(arr1: number[], arr2: number[]) {
  const result: number[] = []; // untuk menampung hasil akhir

  for (let i: number = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
  }

  return result;
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [3, 2, 1];
// console.log(totalSamePosition(arr1, arr2));
// untuk kasus ini, kedua input array harus sama panjangnya

// soal 5 : menambahkan elemen unik

function addUnique(arr: number[], newElement: number) {
  let exists: boolean = false; // untuk mengecek apakah ada yang sama antara array lama dengan new element

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === newElement) {
      exists = true;
    }
  }

  if (!exists) {
    arr.push(newElement);
  }

  return arr;
}

const arr: number[] = [1, 2, 3, 4];
// const newElement: number = 4;
const newElement: number = 7
console.log(addUnique(arr, newElement));
