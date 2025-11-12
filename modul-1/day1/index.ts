// -- Primitive Data Types --

let age: number = 25
let name: string = 'John Doe'
let isOnline: boolean = true
let emptyValue: null = null
let notDefined: undefined

console.log('age : ', age)
console.log('name : ', name)
console.log('isOnline : ', isOnline)
console.log('empty value : ', emptyValue)
console.log('not defined : ', notDefined)

console.log('==========================')

// -- Non Primitive Data Types --

// object
let person: {name: string, age: number} = {
    name: 'John Doe',
    age: 25
}

// array
let hobbies: string[] = ['coding', 'gaming', 'reading']
let years: number[] = [2022, 2023, 2024, 2025]
let mixedArr: Array<string | number> = ['abc', 123]

console.log('person : ', person)
console.log('hobbies : ', hobbies)

// access property of person
console.log('name : ', person.name)
console.log('age : ', person.age)

// access index of array
console.log('access 2024 : ', years[2])

console.log('==========================')

// -- String built in method --
let text: string = 'Hello Typescript World'

// mengubah semua huruf jadi kapital
console.log('original : ', text)
console.log('upper case : ', text.toUpperCase())

console.log(' ----- ')

// mengubah semua huruf jadi kecil
console.log('original : ', text)
console.log('lower case : ', text.toLowerCase())

console.log(' ----- ')

// mengambil sebagian teks dari index tertentu
console.log('original : ', text)
console.log('slice : ', text.slice(6,16))
console.log('ambil kata world : ', text.slice(17,22))

console.log(' ----- ')

// mengganti bagian teks tertentu
console.log('replaced text : ', text.replace('World', 'Universe'))

console.log(' ----- ')

// mencari suatu kata di dalam string tertentu
console.log('search (world) : ', text.includes('World')) // jika ditemukan, nilainya true

console.log('==========================')

// -- Template Literals --

// menggabungkan teks dan variabel
const username: string = 'John Doe'
const greeting: string = `Hello, my name is ${username}`
console.log(greeting)

console.log(' --- ')
const price: number = 15000
const quantity: number = 3
const total: string = `Total price : Rp${price * quantity}`
console.log(total)

// check data type
console.log(typeof total)

console.log('==========================')

// -- Number Built In --

// mengubah string jadi bilangan bulat
const textNumber: string = '123'
console.log('origin : ', typeof textNumber)
console.log('data type after converted from string to number : ', typeof parseInt(textNumber))

// mengubah string jadi bilangan desimal
const floatText: string = '3.14'
console.log('origin : ', typeof floatText)
console.log('after convert : ', typeof parseFloat(floatText))

// membatasi jumlah angka di belakang koma (sekaligus membulatkan)
const cost: number = 123.456789
console.log(cost.toFixed(3))

// mengecek apakah sebuah variabel itu isinya angka atau bukan
const notNumber: any = '1234abcd'
console.log(isNaN(notNumber))

console.log('==========================')

// -- Date Data Type --
const currentDate: Date = new Date()
console.log('Current date (UTC +0) : ', currentDate)
console.log('Local date : ', currentDate.toLocaleString())
console.log('Month : ', currentDate.getMonth())

// menentukan meeting schedule
const meeting: Date = new Date()
meeting.setFullYear(2025)
meeting.setMonth(10) // setup ke bulan november (10), karena perhitungannya -> Januari = 0
meeting.setDate(20)

console.log('Schedule meeting : ', meeting.toDateString())

// -- Basic Operator --
let x: number = 10
let y: number = 5

console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

// -- Increment & Decrement --
let generateNumber: number = 10

// increment : menambahkan +1
console.log(++generateNumber)
console.log(++generateNumber)
console.log(++generateNumber)

// decrement : mengurangi -1
console.log(--generateNumber)
console.log(--generateNumber)
console.log(--generateNumber)