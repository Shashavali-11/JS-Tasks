// 18-10-2024 -- Friday

// Objects, Matrix,

// 1) Question ?
let x = 5
let y = x
x = 10
console.log(x) //10
console.log(y) //5
console.log()
// --------------------------------------------------------------->

//  2) Question ?
let obj1 = { name: "Alice" }
let obj2 = obj1;
obj1.name = "Bob"
console.log(obj1.name) //Bob
console.log(obj2.name) //Bob
console.log()
// --------------------------------------------------------------->


//  3) Question ?
let a = "Hello"
let b = 42
let c = true
let d = {key:"values"}
let e = null
let f = undefined

console.log(typeof a) //string
console.log(typeof b) //number
console.log(typeof c) //boolean
console.log(typeof d) //object
console.log(typeof e) //object
console.log(typeof f) //undefined
console.log()
// --------------------------------------------------------------->

//  4) Question ?
let numbers = [10, 20, 30, 40, 50]
console.log(numbers[2]) //30
console.log(numbers[0]) //10
console.log(numbers[numbers.length - 1]) //50
console.log(numbers.length) //5
console.log()
// --------------------------------------------------------------->


//  5) Question ?
let fruits = ["Apple", "Banana", "Mango" ]
fruits[1] = "Orange"
console.log(fruits) //['Apple', 'Orange', 'Mango' ]
console.log()
// --------------------------------------------------------------->

//  6) Question ?
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix) //[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix[1][2]) //6
console.log(matrix[2][0]) //7
console.log()
// --------------------------------------------------------------->

//  7) Question ?
let person = {
    name:"Jhon",
    age:21,
    city: "New York"
}
console.log(person.name) //Jhon
console.log(person.age)  //21
console.log()
// --------------------------------------------------------------->


//  8) Question ?
let car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
}
console.log(car["make"]) //Toyota
console.log(car["model"]) //Corolla
console.log()
// --------------------------------------------------------------->

//  9) Question ?
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgeraid"
}
book.author = "Anonymous"
console.log(book.author) //Anonymous
console.log()
// --------------------------------------------------------------->

//  10) Question ?
let student = {
    name: "Alice",
    grade: "A"
}
student.age = 21
console.log(student) //{name:'Alice', grade:'A', age: 21  }









