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
};

restaurant.orderDelivery({
  time: '20:30',
  address: '16 oluyole close, festact town',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '16 oluyole close, festact town',
  mainIndex: 2,
});

//Destructoring the object Data

const { name, openingHours, categories } = restaurant;
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, categories);

//Destructoring the object Data with default values -> Working with data not known eg(api data)
const { menu: ordermenu = [], starterMenu: starter = [] } = restaurant;
console.log(ordermenu, starter);

//Mutating variables while destructoring objects.
let a = 111;
let b = 222;
const obj = { c: 27, d: 40, e: 60 };
({ c: a, d: b } = obj);
console.log(a, b);

// Destructoring a Nested Object
console.log(hours);
const {
  thu: { open: o = [], close: c = [] },
} = hours;
console.log(o, c);

// //Destructoring the Array Data.

// const arr = [2,3,4];
//   const a = [0];
//   const b = [1];
//   const c = [2];
// // OR
//   const [x,y,z] = arr;
//   console.log(x, y, z)

// // Fetching data from the resturant data and destructing into smaller variables.
//   let [main, , secondary] = restaurant.categories
//   console.log(main, secondary);

// // Swtiching variables (main value to secondary value ) vice-versa
// //Using the traditional method
//   // const temp = main;
//   // main = secondary;
//   // secondary = temp;
//   // console.log(main, secondary)

// // // Using destructoring method
//   [secondary=1, main=1] = [main, secondary];
//   console.log(main, secondary);

// // Receiving and Destructoring 2 results from a function
// console.log(restaurant.order(2 , 0));
// const [starter=1, mainFood=1] = restaurant.order(2 , 0);
// console.log(`${starter} and ${mainFood}`);
//  // Destructoring 1 result from the above function
//  const [ , mainFoodOnly] = restaurant.order(2 , 0);
//  console.log(mainFoodOnly);

// // Destructoring a Nested array -> Nested arrays are arrays inside another array
// const Nested = [5,6,[7, 10]];
// const [i, , [,k]] = Nested;
// console.log(i, k);

// //Default values
// const [q='Not Found', r='Not Found', s='Not Found'] = [20, 22];
// console.log(q,r,s);
