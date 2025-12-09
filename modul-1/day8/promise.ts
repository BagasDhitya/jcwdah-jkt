// Promise -> untuk menangani success/failed
// resolve : dihandle oleh then()
// reject : dihandle oleh catch()

// case : validasi umur
function validateAge(age: number) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve({
        status: "success",
        message: "Age is valid. Access granted",
      });
    } else {
      reject({
        status: "failed",
        message: "Age is not valid. Access denied",
      });
    }
  });
}

// validateAge(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// case : lottery draw
function lotteryDraw() {
  return new Promise((resolve, reject) => {
    const random = Math.random(); // generate nilai 0 - 1
    console.log("Drawing lottery ...");

    setTimeout(() => {
      if (random > 0.5) {
        resolve({
          status: "success",
          message: "Congratulations, you win the grand prize!",
        });
      } else {
        reject({
          status: "failed",
          message: "Sorry, you did not win. Try again!",
        });
      }
    }, 3000); // proses undian selama 3 detik
  });
}

// lotteryDraw()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finish ...")); // finally akan dikerjakan meskipun hasilnya reject/resolve

// case : masak mie instan
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isGasOn: boolean = false;

      if (isGasOn) {
        resolve("Air sudah mendidih");
      } else {
        reject("Kompor mati! Air tidak bisa mendidih");
      }
    }, 2000);
  });
}

function putNoodles() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const noodlesAvailable: boolean = true;

      if (noodlesAvailable) {
        resolve("Mie berhasil dimasukkan");
      } else {
        reject("Mie habis!");
      }
    }, 1000);
  });
}

boilWater()
  .then((result) => {
    console.log(result);
    return putNoodles();
  })
  .catch((error) => console.log("Proses gagal : ", error));

// kalau memanggil fungsi lain yang punya promise juga, harus pakai async await
// kalau tidak pakai async await, akan menyebabkan nesting then() yang banyak
