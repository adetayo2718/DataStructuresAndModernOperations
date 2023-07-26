'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: {
      open: 0, // Open 24 hours close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to your address '${address}' at ${time} today.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: (mainIngedient, ...otherIngredients) => {
    console.log(mainIngedient);
    console.log(otherIngredients);
  },
};

//REST PATHERNS. Rest because its on the left side of the =
//ARRAY
// 1> --> Destructoring
const [a, b, ...others] = [2, 3, 4, 5, 6, 10];
console.log(a, b, others);

//NOTICE THAT PASTA WAS NOT PICKED, THAT BECAUSE THE REST PATHERN WILL NOT PICK ANY SKIPPED ELEMENT.
//the rest element must be the last element.
const [mainCourse, , desert, ...otherCourse] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(mainCourse, desert, ...otherCourse);

//OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2> --> Functions
const add = (...ishiro) => {
  let sum = 0;
  for (let i = 0; i < ishiro.length; i++) sum += ishiro[i];
  console.log(sum);
};

add(2, 3);
add(7, 8, 9, 10, 15, 26);
add(30, 50, 90, 92, 94, 96, 99);

// passing array to the function.
let x = [24, 12, 21, 26, 42, 52];
add(...x);

restaurant.orderPizza('Chilli & Tomattoes', 'cheese', 'Peperoni', 'Onion');

// //SPREAD OPERATORS
// //Spreed operators take all elements of an array into another array. -> it logs the individual values independently

// const numb = [1, 2, 4, 6, 12];
// const newNumb = [0, ...numb, 13, 14, 20];
// console.log(...newNumb);

// //used case, 1. copy array and merge 2 arrays.
// //1. Copy an array

// const newMenu = [...restaurant.mainMenu];
// console.log(newMenu);
// console.log(...newMenu); //-display inde=ividual values.

// //2. Merging 2 arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...menu);

// //NOTE, spreed operators only work on iterables -> arrays, strings, maps, sets but not objects.
// let str = 'MUSTAFA';
// let numbers = [...str];
// console.log(numbers);
// console.log(`The numbers are ${[...str]} AHAMED`);

// const ingredient = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// //old way of doing it:
// console.log(restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]));
// console.log(restaurant.orderPasta(...ingredient));

// restaurant.orderDelivery({
//   time: '20:30',
//   address: '16 oluyole close, festact town',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '16 oluyole close, festact town',
//   mainIndex: 2,
// });

// //Destructoring the object Data

// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(name, openingHours, categories);

// //Destructoring the object Data with default values -> Working with data not known eg(api data)
// const { menu: ordermenu = [], starterMenu: starter = [] } = restaurant;
// console.log(ordermenu, starter);

// //Mutating variables while destructoring objects.
// let a = 111;
// let b = 222;
// const obj = { c: 27, d: 40, e: 60 };
// ({ c: a, d: b } = obj);
// console.log(a, b);

// // Destructoring a Nested Object
// console.log(hours);
// const {
//   thu: { open: o = [], close: c = [] },
// } = hours;
// console.log(o, c);

// // //Destructoring the Array Data.

// // const arr = [2,3,4];
// //   const a = [0];
// //   const b = [1];
// //   const c = [2];
// // // OR
// //   const [x,y,z] = arr;
// //   console.log(x, y, z)

// // // Fetching data from the resturant data and destructing into smaller variables.
// //   let [main, , secondary] = restaurant.categories
// //   console.log(main, secondary);

// // // Swtiching variables (main value to secondary value ) vice-versa
// // //Using the traditional method
// //   // const temp = main;
// //   // main = secondary;
// //   // secondary = temp;
// //   // console.log(main, secondary)

// // // // Using destructoring method
// //   [secondary=1, main=1] = [main, secondary];
// //   console.log(main, secondary);

// // // Receiving and Destructoring 2 results from a function
// // console.log(restaurant.order(2 , 0));
// // const [starter=1, mainFood=1] = restaurant.order(2 , 0);
// // console.log(`${starter} and ${mainFood}`);
// //  // Destructoring 1 result from the above function
// //  const [ , mainFoodOnly] = restaurant.order(2 , 0);
// //  console.log(mainFoodOnly);

// // // Destructoring a Nested array -> Nested arrays are arrays inside another array
// // const Nested = [5,6,[7, 10]];
// // const [i, , [,k]] = Nested;
// // console.log(i, k);

// // //Default values
// // const [q='Not Found', r='Not Found', s='Not Found'] = [20, 22];
// // console.log(q,r,s);
