// synchronous code -> berjalan sesuai urutan
// console.log("step 1 ...");
// console.log("step 2 ...");
// console.log("step 3 ...");

// asynchronous code -> berjalan sesuai waktu prosesnya
// console.log("step 1 ...");
// setTimeout(() => {
//   console.log("step 2 ...");
// }, 3000); // 3000 milisecond -> 3 detik
// console.log("step 3 ...");

// case 1 : menunggu mie instan matang
function notifyMe() {
  console.log("Noodles are ready!");
}

console.log("Start cooking noodles ...");
setTimeout(() => {
  notifyMe()
}, 4000);

console.log("While waiting, you can do something else.");