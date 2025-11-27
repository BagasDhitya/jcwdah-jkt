// Class -> untuk organize properti, function, dll.
// bedanya dengan interface : class bisa diberi nilai awal

// interface Vehicle {
//   brand: string = 'unknown'; // tidak bisa diberi nilai
//   wheels: number;
// }

// let vehicle: Vehicle = {}

class Vehicle {
  brand: string = "Unknown";
  wheels: number = 0;
}

let car = new Vehicle();
car.brand = "Toyota";
car.wheels = 4;

// console.log(car)

// -- CONSTRUCTOR -> untuk memberikan nilai seperti argumen/parameter di function
class Hero {
  name: string;
  role: string;
  ultimate: string;

  constructor(name: string, role: string, ultimate: string) {
    this.name = name;
    this.role = role;
    this.ultimate = ultimate;
  }

  getInformation() {
    return {
      name: this.name,
      role: this.role,
      ultimate: this.ultimate,
    };
  }
}

let miya = new Hero("Miya", "Marksman", "Rain of Arrows");
// console.log(miya.getInformation());

// -- ENCAPSULATION -> untuk menentukan jenis properti mana aja yang boleh diakses sebagai public, private, atau protected
class BankAccount {
  public owner: string; // bisa diakses di luar class
  private balance: number; // hanya bisa diakses di dalam class
  protected accountType: string; // hanya bisa diakses oleh class ini dan turunannya

  constructor(owner: string, balance: number, accountType: string) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = accountType;
  }

  public deposit(amount: number) {
    this.balance = this.balance + amount;
    console.log("Deposit successful. Current balance : ", this.balance);
  }

  public withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
      return;
    }

    this.balance = this.balance - amount;
    console.log("Withdraw successful. Current balance : ", this.balance);
  }

  // contoh encapsulation : mengakses balance yang private lewat getBalance()
  public getBalance() {
    return this.balance;
  }
}

const account = new BankAccount("John Doe", 1000, "Saving");
// account.deposit(500);
// account.withdraw(120);

// console.log(account.getBalance());

// SETTER & GETTER -> untuk assign value tanpa harus melalui constructor
class CashRegister {
  private totalMoney: number = 0;

  set addMoney(amount: number) {
    if (amount < 0) {
      console.log("Amount must be greater than zero");
      return;
    }

    this.totalMoney = this.totalMoney + amount;
    console.log("Money added : ", amount);
  }

  get total() {
    return this.totalMoney;
  }
}

const register = new CashRegister();

// menggunakan setter
// register.addMoney = 500;
// register.addMoney = 3000;

// menggunakan getter
// console.log("Total money : ", register.total);

// -- STATIC PROPERTY -> bisa memanggil/modifikasi property tanpa lewat instance
class VoltageChecker {
  static safeVoltage: number = 220; // standar aman tegangan milik class
  static voltage: number; // untuk cek tegangan

  static checkSafety() {
    if (this.voltage === VoltageChecker.safeVoltage) {
      return "Safe - voltage is normal";
    } else {
      return "Warning! - voltage unstable";
    }
  }
}

// bisa dipanggil tanpa instance
// console.log("Standard Voltage : ", VoltageChecker.safeVoltage);

VoltageChecker.voltage = 220;
// console.log("Check safety : ", VoltageChecker.checkSafety());

VoltageChecker.voltage = 150;
// console.log("Check safety : ", VoltageChecker.checkSafety());

// INHERITANCE -> konsep pewarisan class induk ke class anaknya
// class anak bisa mewarisi sifat dari induknya (Parent and Child)

class Dinosaur {
  public name: string;
  public era: string;
  public isFlying: boolean;

  constructor(name: string, era: string, isFlying: boolean) {
    this.name = name;
    this.era = era;
    this.isFlying = isFlying;
  }

  public roar() {
    console.log(this.name + " is roaring!");
  }
}

class T_Rex extends Dinosaur {
  constructor(name: string) {
    super(name, "Cretaceous", false); // super -> untuk memanggil constructor dari Parent
  }

  public hunt() {
    console.log(this.name + " is hunting prey!");
  }
}

class Triceratops extends Dinosaur {
  constructor(name: string) {
    super(name, "Cretaceous", false);
  }

  public defend() {
    console.log(this.name + " defending with its horns!");
  }
}

class Velociraptor extends Dinosaur {
  constructor(name: string) {
    super(name, "Cretaceous", true);
  }

  public flying() {
    console.log("Is velociraptor can flying? ", this.isFlying);
  }
}

const rex = new T_Rex("Tyrannosaurus Rex");
const tri = new Triceratops("Triceratops");
const velo = new Velociraptor("Velociraptor");

// rex.roar();
// rex.hunt();

// tri.roar();
// tri.defend();

// velo.flying()

// -- INTERFACE juga bisa dijadikan parent

interface Profile {
  email: string;
  password: string;
}

// simulasi dari database
const profile: Profile = {
  email: "johndoe@mail.com",
  password: "JohnDoe12345",
};

class Account implements Profile {
  email = "unknown";
  password = "unknown";

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public login() {
    if (this.email !== profile.email && this.password !== profile.password) {
      console.log("Invalid credentials. Please check your email/password");
    } else {
      console.log("Welcome!");
    }
  }
}

let myAcc = new Account("johndoe@mail.com", "JohnDoe12345");
myAcc.login();
