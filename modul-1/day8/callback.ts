// Callback -> fungsi yang menerima argumen berupa fungsi lainnya

// case 1 : cook noodles
function cookNoodles(notification: () => void) {
  console.log("Cooking noodles ...");

  setTimeout(() => {
    notification();
  }, 3000);
}

function eatNoodles() {
  console.log("Now eating noodles!");
}

// cookNoodles(eatNoodles);

// case 2 : hitung penjumlahan
function calculate(x: number, y: number, callback: (value: number) => void) {
  const total = x + y;
  callback(total);
}

function showResult(result: number) {
  console.log("The result is : ", result);
}

// calculate(10, 20, showResult);

// case 3 : name validation
function validateName(name: string, success: () => void, failed: () => void) {
  if (name.length >= 3) {
    success();
  } else {
    failed();
  }
}

function onValid() {
  console.log("Name is valid!");
}

function onInvalid() {
  console.log("Name is invalid!");
}

validateName("JohnDoe", onValid, onInvalid);
validateName("A", onValid, onInvalid)
