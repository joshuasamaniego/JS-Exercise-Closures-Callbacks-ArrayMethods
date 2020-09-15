// -------------------------------------- ⭐️ EXAMPLE START ⭐️ -------------------------------------------//

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// --------------------------------------- ⭐️ EXAMPLE END ⭐️ ---------------------------------------------//

///// M V P ///////

/* ✅ Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * - The counter1 code has the variable count outsi, whereas the counter2 code will start at 0.
 *
 * 2. Which of the two uses a closure? How can you tell?
 * - The counter1 code uses a closure, and I can tell because the function counter is enCLOSURED within the counterMaker function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * - counter1 would be preferable when you want to start counting from 1 and keeping 'score'. counter2 would be more helpful in an iterating situation.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}
const counter1 = counterMaker();

// counter2 code
let count = 0;
function counter2() {
  return count++;
}

/* ✅ Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  const points = Math.floor(Math.random() * 3);
  return points;
}
console.log(inning());

// MORE FUNCTIONALITY:
// function inning(min, max) {
//   const points = Math.floor(Math.random() * (max - min) + min);
//   return points;
// }
// console.log(inning(9, 21));

/* ✅ Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, numberOfInnings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    home = home + callback();
    away = away + callback();
  }
  let boxScore = { home, away };
  return boxScore;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScoreCB, inningCB, numberOfInnings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    let inning = getInningScoreCB(inningCB, 1);

    home = home + inning.home;
    away = away + inning.away;

    console.log(`${i + 1}th Inning: ${away} - ${home}`);
  }
}
scoreboard(finalScore, inning, 10);
