'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: {
    open: { open: 0 },
    close: { close: 24 },
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to your address '${address}' at ${time} today.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: (mainIngedient, ...otherIngredients) => {
    console.log(mainIngedient);
    console.log(otherIngredients);
  },
};

// // STRING ||| SPLIT -> ALLOWS US TO SPLIT A STRING TO MULTIPLE PARTS BASED ON A DIVIDER STRING
// //The split will split the strings into an array and create multpile values seperated by a come.

// //working with split.
// const x = 'this+is+a+very+very+good+morning';
// console.log(x.split('+'));

// const fullName = 'Adebowale Adetayo';
// console.log(fullName);
// const nameSplit = fullName.split(' ');
// console.log(nameSplit);
// const [firstName, lastName] = nameSplit;
// console.log(firstName, lastName);

// const nameUppper = ['Mr.', firstName, lastName.toUpperCase()];
// console.log(nameUppper);

// const nameJoin = nameUppper.join(' ');
// const play = nameJoin.slice(nameJoin.lastIndexOf(' '));
// console.log(nameJoin.slice(0, 13) + play.toLowerCase());

// const capitalizeName = name => {
//   const nameJoin = [];
//   const nameSplit = name.split(' ');
//   // console.log(nameSplit);

//   for (const n of nameSplit) {
//     nameJoin.push(n.replace(n[0], n[0].toUpperCase()));
//     // nameJoin.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(nameJoin.join(' '));
// };

// capitalizeName('adebowale mustafa adetayo');
// capitalizeName('adeola abosede adetayo');
// capitalizeName('jamil oluwajomiloju adetayo');

// //WORKING WITH STRING METHODS||

// const airline = 'NIGERIA AIRWAYS LAGOS';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log(
//   'MusTy'.toLowerCase()[0].toUpperCase() + 'MusTy'.toLowerCase().slice(1)
// );

// const correctPassengerName = str => {
//   console.log(str.toLowerCase()[0].toUpperCase() + str.toLowerCase().slice(1));
// };
// correctPassengerName('ADEREMILE');

// //COMPAREING EMAIL.

// const email = 'adex@aol.ro';
// const loggedEmail = '  adex@aol.ro \n';
// console.log(email === loggedEmail);

// const correctedEmail = loggedEmail.toLowerCase().trim();
// console.log(email === correctedEmail);

// const correctEmails = (em, loggedEm) => {
//   const newLoggedEm = loggedEm.toLowerCase().trim();
//   if (newLoggedEm === em) console.log('You Please enter password');
//   else console.log('Enter a valid email');
// };

// const correctEmail = loggedEm => {
//   console.log(loggedEm.toLowerCase().trim());
// };

// correctEmail('aDEBULE@ARU.RU     ');
// correctEmails('adebule@aru.ru', 'aDEBULE@ARU.RU     \n');

// //REPLACING A STRING
// const priceGb = '#123';
// const priceUs = priceGb.replace('#', '$');
// console.log(priceUs);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // USING REGULAR EXPRESSION / /g, to do replace all.
// console.log(announcement.replaceAll(/door/g, 'gate'));

// //WORKING WITH METHODS THAT RETURNS BOOLEN
// // 1. includes(). 2, startsWith(). 3, endsWith().

// const plane = 'AB123neo';
// console.log(plane.includes('AB'));
// console.log(plane.startsWith('new'));
// console.log(plane.endsWith('neo'));

// //write a function that check baggages and check customers in.
// const checkIn = items => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('ciggarett'))
//     console.log(`You can not board this flight`);
//   else console.log('Wellcome aboard');
// };

// checkIn(`I have some perfumes, hand gel and a knIfE for protection.`);
// checkIn(`I have some biscuits, and my laptop bag.`);
// checkIn(
//   `I have some rollers, and my carry on bag is compiled with a ciggarett.`
// );

// // // STRING

// const airline = 'NIGERIA AIRWAYS LAGOS';
// const plan = 'MUS701';

// console.log(airline[0]);
// console.log('musa'[0]);

// console.log(airline.length);
// console.log('AGUNBIADE'.length);

// // STRING METHOD
// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('A'));
// console.log(airline.indexOf('LAGOS'));

// console.log(airline.slice(8));
// console.log(airline.slice(8, 15));

// // WORKING WITH UNKNOWN DATA
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(0, -1));

// // WORKING WITH A FUNCTION
// const checkSeatNumber = seat => {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got a middle seat');
//   else console.log('You got lucky');
// };

// checkSeatNumber('11B');
// checkSeatNumber('21C');
// checkSeatNumber('20E');

// console.log(typeof new String('DEBO'));
// console.log(typeof new String('DEBO').slice());

// // MAP ITERATION

// const question = new Map([
//   ['question', 'What is the best programing language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Hurray!!!, your answer is correct'],
//   [false, 'Oops, try again'],
// ]);

// // Quiz app

// console.log(question);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('What is your answer?'));
// console.log(question.get(question.get('correct') === answer));

// // MAPS ~ OBJECT
// const rest = new Map();
// rest
//   .set('name', 'Classica Italiano')
//   .set(1, 'Firenze, Italy')
//   .set(2, 'Lisbon, Portugal');

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest);

// const time = 22;
// const openTime = rest.get(time > rest.get('open') && time <= rest.get('close'));
// console.log(openTime);
// let arr = [1, 2];
// rest.set(arr, 'This is an array');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'This is landing');
// console.log(rest.has('open'));
// rest.delete(2);
// console.log(rest);

// //SETS ~ ARRAY. UNIQUE VALUES => NO DUPLICATE.
// const orderSet = new Set([
//   'John',
//   'Michael',
//   'Ronke',
//   'Michael',
//   'Ronke',
//   'John',
//   'Ahmed',
// ]);
// console.log(orderSet);
// const numStr = new Set('MUSTAFA');
// console.log(numStr);
// console.log(numStr.size);
// console.log(numStr.has('F'));
// console.log(numStr.has('Z'));
// numStr.add('B');
// numStr.add('Z');
// console.log(...numStr);
// numStr.delete('B');
// numStr.delete('Z');
// console.log(...numStr);
// // numStr.clear();
// console.log(numStr);

// // Example.
// const staff = [
//   'Chef',
//   'Waiter',
//   'Cleaner',
//   'Runner',
//   'Waiter',
//   'Manager',
//   'Accontant',
// ];
// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(staff);
// console.log(new Set(staff).size);

// //YOU CAN ALSO CHECK THE SIZE OF A STRING.
// let x = 'ENCYCLOPEDIAMANIC';
// console.log(new Set(x).size);

// const openDays = Object.keys(openingHours);
// console.log(openDays);
// let openStr = `We are open on ${openDays.length} days a week: `;
// console.log(openStr);

// for (const days of openDays) {
//   openStr += `${days}, `;
// }
// console.log(openStr);

// let value = Object.values(openingHours);
// console.log(value);

// let ent = Object.entries(openingHours);
// console.log(ent);

// let display = ``;

// for (const [
//   key,
//   {
//     open: { open = 0 },
//     close: { close = 0 },
//   },
// ] of ent) {
//   display = `On ${key}, we are open at ${open}, and we are closing at ${close}`;
//   console.log(display);
// }

// //PROPERTY KEYS
// const property = Object.keys(openingHours);
// console.log(property);

// let open = `We are open on ${property.length} a week: `;
// //LOOPING OBJECTS & KEYS
// for (const days of property) {
//   open += `${days}, `;
// }
// console.log(open);

// //PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we are open at ${open} and we close at ${close}`);
// }

// // OPTIONAL CHAINING?
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// if (restaurant.openingHours && restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
// // WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'close';
//   console.log(`On ${day} we're open at ${open}`);
// }

// // OPTIONAL CHAINING? WITH METHODS.

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// // OPTIONAL CHAINING? with Arrays
// const users = [{ name: 'John', email: '123@aol.com' }];

// console.log(users[2]?.name ?? `The array is empty`);

// Advanced object litrals
// 1. can define an object outside of the main obj and call it with the name onplay.
// 2. functions are written differently
// 3. property key can now be computed.

// // THE FOR OF LOOP
// const main = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(main);
// for (const x of main) console.log(x);
// for (const x of main.entries()) console.log(x);

// for (const [i, el] of main.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // The short circuting and nullish assignment operator.

// const rest1 = {
//   name: 'LAPICANA',
//   // numGuest: 30,
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'PANAM',
//   owner: 'AKANJI SAMUEL',
// };

// // SETTING A DEFAULT VALUE FOR NUMBER OF GUEST.
// // (--- OR ---)

// // rest1.numGuest = rest1.numGuest || 20;
// // rest2.numGuest = rest2.numGuest || 20;

// //OR ASSINGMENT OPERATOR
// // rest1.numGuest ||= 20;
// // rest2.numGuest ||= 20;

// // NULLISH ASSIGNMENT OPERATOR (null and undefined)
// rest1.numGuest ??= 20;
// rest2.numGuest ??= 20;

// // //CHANGING THE VALUE OF OWNER NAME TO ANONYMOUS
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// //AND ASSINGMENT OPERATOR
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // SHORT CIRCUITING (|| and &&)
// // (--- OR || ----)
// // The short circuiting OR || is used to display the first truthy operand or the last falsey operand if all operands are false. `***Operands are the values that an operator is executing. eg 2 + 3, 2 and 3 are the operands***`
// // ***TRUTHY operands are 12, ‘JOHNY’ true, ETC. while FALSEY operands are 0, null, undefined, false, etc.***
// // we can use the OR || operators to set default value

// console.log(3 || 'JOHNY');
// console.log('' || 'JOHNY');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'HELLO' || 23 || null);

// restaurant.guestNum = 0;
// const guest1 = restaurant.guestNum ? restaurant.guestNum : 10;
// console.log(guest1);

// const guest2 = restaurant.guestNum || 10;
// console.log(guest2);

// // (--- AND && ----)
// // The short circuiting && is used to display the first falsey value or the last truthy value if all the operands are true.
// // ***TRUTHY operands are 12, ‘JOHNY’ true, ETC. while FALSEY operands are “” ,0, null, undefined, false, etc.***
// // we can use the AND && operator to display the value of the second operand if the first value is true.

// console.log(0 && 'John');
// console.log(7 && 'John');
// console.log(7 && true && 'john' && 0);

// if (restaurant.orderPizza) {
//   console.log(restaurant.orderPizza('mushroom', 'chilli'));
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'pizza');

// //

// // NULLISH COALESCING
// // This operator was introdused in ES 2020. → Nullish value include undefined nd null (NOT 0 or “”)
// restaurant.guestNum = 0;
// const guestS = restaurant.guestNum || 10;
// console.log(guest2);

// const correctGuestNum = restaurant.guestNum ?? 10;
// console.log(correctGuestNum);

// //REST PATHERNS. Rest because its on the left side of the =
// //ARRAY
// // 1> --> Destructoring
// const [a, b, ...others] = [2, 3, 4, 5, 6, 10];
// console.log(a, b, others);

// //NOTICE THAT PASTA WAS NOT PICKED, THAT BECAUSE THE REST PATHERN WILL NOT PICK ANY SKIPPED ELEMENT.
// //the rest element must be the last element.
// const [mainCourse, , desert, ...otherCourse] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(mainCourse, desert, ...otherCourse);

// //OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // 2> --> Functions
// const add = (...ishiro) => {
//   let sum = 0;
//   for (let i = 0; i < ishiro.length; i++) sum += ishiro[i];
//   console.log(sum);
// };

// add(2, 3);
// add(7, 8, 9, 10, 15, 26);
// add(30, 50, 90, 92, 94, 96, 99);

// // passing array to the function.
// let x = [24, 12, 21, 26, 42, 52];
// add(...x);

// restaurant.orderPizza('Chilli & Tomattoes', 'cheese', 'Peperoni', 'Onion');

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
