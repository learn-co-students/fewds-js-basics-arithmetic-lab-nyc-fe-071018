/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

let newID = oldID + 1000000000;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber, randomInteger, randomUserID;
randomNumber = Math.floor(Math.random()*20)+1;
randomInteger = Math.floor(randomNumber);
randomUserID = randomInteger + 1000000000;