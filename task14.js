const products = [
  {
    id: 101,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    inStock: true,
    ratings: 4.5,
  },
  {
    id: 102,
    name: "Laptop",
    price: 1199.99,
    category: "Computers",
    inStock: false,
    ratings: 4.7,
  },
  {
    id: 103,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Accessories",
    inStock: true,
    ratings: 4.3,
  },
  {
    id: 104,
    name: "Smartwatch",
    price: 149.99,
    category: "Wearables",
    inStock: true,
    ratings: 4.2,
  },
  {
    id: 105,
    name: "Gaming Console",
    price: 499.99,
    category: "Gaming",
    inStock: true,
    ratings: 4.8,
  },
];

// 1.Write a function that returns an array of all product names in uppercase.
let a1 = products.map(a=>a.name.toUpperCase())
// console.log(a1)
// --------------------------------------------------------------------------->

// 2.Write a function that logs each product's name and price to the console.
let a2 = products.map(a=>a.name + "  ---  " +a.price);
// console.log(a2)
// --------------------------------------------------------------------------->

// 3.Write a function that returns an array of products that are in stock.
let a3 = products.filter(a=>a.inStock).map(a=>a.name)
// console.log(a3)
// --------------------------------------------------------------------------->

// 4.Write a function that finds the first product with a rating higher than 4.5
let a4 = products.filter(a=>a.ratings>4.5).find(a=>{return a})
// console.log(a4);
// --------------------------------------------------------------------------->

// 5.Write a function that returns the index of the first product in the "Gaming"
let a5 = products.findIndex(a=>a.category === "Gaming");
// console.log(a5);
// --------------------------------------------------------------------------->

// 6.Write a function that checks if all products are in stock.
let a6 = products.every(a=>a.inStock);
// console.log(a6)
// --------------------------------------------------------------------------->

// 7.Write a function that checks if any product has a price lower than $200.
let a7 = products.filter(a=>a.price<200).map(a=>a);
console.log(a7)





