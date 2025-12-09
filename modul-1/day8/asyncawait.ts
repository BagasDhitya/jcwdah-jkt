// Async await -> untuk handle berbagai macam promise

// case 1 : validasi umur
function validateAge(age: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Age is valid");
      } else {
        reject("Age is invalid");
      }
    }, 4000);
  });
}

async function checkUserAge() {
  try {
    const result = await validateAge(20);
    setTimeout(() => {
      console.log("Result : ", result);
    }, 1000);
  } catch (error) {
    console.log("Error : ", error);
  } finally {
    console.log("Finish ...");
  }
}

// checkUserAge();

// case 2 : pemanggilan API (Application Programming Interface)
interface Post {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    data?.map((item: Post) => console.log("title : ", item.title));
  } catch (error) {
    console.log("Failed to fetch : ", error);
  }
}

// getPosts();

// Throw error -> akan memotong proses eksekusi apabila ada step yang salah
function calculateSquareRoot(value: number) {
  if (value < 0) {
    throw new Error("Cannot calculate square root of negative number");
    // return "Cannot calculate square root of negative number"; -> kalau tanpa throw Error, akan mengembalikan ke block try
  }

  return Math.sqrt(value);
}

try {
  const result = calculateSquareRoot(-10);
  console.log("Result : ", result);
} catch (error) {
  console.log("Error : ", (error as Error).message);
}
