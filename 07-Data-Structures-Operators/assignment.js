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

// // Coding Challenge One
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals  scored by ${players}`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team one is likely to win');
// team1 > team2 && console.log('Team two is likely to win');

// // Coding Challenge Two
// // 1.
// let scorers = game.scored;
// for (i = 0; i < scorers.length; i++) {
//   console.log(` Goal ${i + 1} by ${scorers[i]}`);
// }

// // 2.
// let odds = Object.values(game.odds);
// let average = 0;

// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Coding Challeng -4 **********************

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const textarea = document.querySelector('textarea').value;
  const splited = textarea.split('\n');

  for (const [i, sp] of splited.entries()) {
    // console.log(sp);
    const [first, second] = sp.toLocaleLowerCase().trim().split('_');
    // console.log(first, second);
    let output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)} ${'✅'.repeat(i + 1)}`);
  }
});
// console.log(0 === false);
