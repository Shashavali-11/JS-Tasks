// 1.Write a function squareNumbers(arr) that returns a new array where each number 
// in the original array is squared using map method.
// 2.Write a function toUppercase(arr) that returns a new array where each string 
// in the original array is converted to uppercase using map method.
let arr = [1,2,3,4,5]
let a1 = arr.map(a=>a*a)
console.log(a1);

let arr1 = ["shasha", "shaik", "reshma", "sana"]
let a2 = arr1.map(a=>a.toUpperCase())
console.log(a2);



