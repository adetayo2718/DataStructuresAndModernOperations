// 'use strict';

// // Coding Challange #1

// /*
// We're building a football betting app (soccer for my American friends)!

// Suppose we get data from a web service about a certain game (below). In this cgallanfe, we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ("fieldPlayers") with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitue players. so create a new array ('players1Final') conatining all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, allong with the number of goals who were scored (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scorerd.

// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Solution

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ("fieldPlayers") with all the remaining 10 field players.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitue players. so create a new array ('players1Final') conatining all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, allong with the number of goals who were scored (number of player names passed in)

// function printGoals(...players) {
//   console.log(`${players.length} goals were scored`);
// }
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log(`Team 1 is likely to win`);
// team1 > team2 && console.log(`Team 2 is likely to win`);
// team1 == team2 && console.log(`Thers is likely to be a draw`);

// const gameEvent = new Map([
//   [81, 'goal'],
//   [85, 'yellow card'],
//   [86, 'red card'],
//   [87, 'goal'],
//   [89, 'yellow card'],
//   [90, 'substitution'],
// ]);
// console.log(gameEvent);
// const event = [...new Set(gameEvent.values())];
// console.log(event);

// const animal = 'HIPOPOTAMOS WILL BE IN THE JUNGLE';

// console.log(animal.slice(12));

// console.log(typeof new String('AMAZING').slice());

// const checkSeatNumber = x => {
//   const s = x.slice(-1);
//   if (s === 'B' || s === 'C') console.log('You have got the middle seat :(');
//   else console.log('You got lucky:))');
// };

// checkSeatNumber('11A');
