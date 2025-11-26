// soal 1 : menjumlahkan semua number di dalam array campuran

function sumNumberOnly(arr: any[]) {
  let total: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total = total + arr[i];
    }
  }

  return total;
}

// console.log(sumNumberOnly(["3", 1, "string", null, false, undefined, 2]));

// soal 2 : maximum size of array

function insertWithMaximumSize(max: number, values: number[]) {
  const result: number[] = [];

  for (let i: number = 0; i < values.length; i++) {
    if (result.length < max) {
      result.push(values[i]);
    }
  }

  return result;
}

// console.log(insertWithMaximumSize(5, [5, 10, 24, 3, 6, 7, 8]));

// soal 3 : combine two arrays
function combineArrays(arr1: number[], arr2: number[]) {
  const result: number[] = [];

  for (let i: number = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i: number = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}

// console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// soal 4 : mencari elemen yang duplikat
function findDuplicate(arr: number[]) {
  const result: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    let count: number = 0;
    let current: number = arr[i];

    // hitung berapa kali muncul
    for (let j: number = 0; j < arr.length; j++) {
      if (arr[j] === current) {
        count++;
      }
    }

    // kalau muncul lebih dari 1 -> duplikat
    if (count > 1) {
      // cek apakah sudah ada di result atau belum
      let alreadyAdded: boolean = false;
      for (let k: number = 0; k < result.length; k++) {
        if (result[k] === current) {
          alreadyAdded = true;
        }
      }

      // jika belum ada -> tambahkan
      if (!alreadyAdded) {
        result.push(current);
      }
    }
  }

  return result;
}

// console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// soal 5 : mencari perbedaan diantara 2 array
function arrayDifference(arr1: number[], arr2: number[]) {
  const result: number[] = [];

  // cek arr1 - arr2
  for (let i: number = 0; i < arr1.length; i++) {
    let found: boolean = false;
    for (let j: number = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
      }
    }

    if (!found) {
      result.push(arr1[i]);
    }
  }

  // cek arr2 - arr1
  for (let i: number = 0; i < arr2.length; i++) {
    let found: boolean = false;
    for (let j: number = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
      }
    }

    if (!found) {
      result.push(arr2[i]);
    }
  }

  return result
}
