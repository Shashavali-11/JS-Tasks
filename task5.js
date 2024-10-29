// 22-10-2024 -- Tuesday

// For-in loop using objects

// 1) Question ?
var car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}
for(i in car){
    // var a = car[i].toUpperCase()
    console.log(`${i} : ${car[i].toUpperCase()}`)
    // console.log(`${i} : ${car[i]}`)
    
}
// --------------------------------------------->

// 2) Question ?
var numbers = [1, 2, 3, 4, 5]
for(i in numbers){
    // console.log(` ${numbers[i]} - ${"HI"}  `)
}
// --------------------------------------------->

// 3) Question ?
var fruits = ['Apple', 'Banana', 'Cherry', 'Date']
for(i in fruits){
    // console.log(`${i} - ${fruits[i].toUpperCase()}`)
}
// --------------------------------------------->

// 4) Question ?
var obj = {
    name: 'Jhon',
    age: 30,
    address:{
        city:'Los Angeles',
        state: 'CA'
    }
}
obj.address.city='San Francisco'
// console.log(obj)
// --------------------------------------------->

// 5) Question ?
var car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
}
car.model = 'Cololla'
car.year = 2022
// console.log(car)
// --------------------------------------------->

// 6) Question ?
var recipe = {
    name:'Pasta',
    servings:2,
    ingredients:['noodles', 'sauce']
}
recipe.ingredients.push('cheese')
// console.log(recipe)
