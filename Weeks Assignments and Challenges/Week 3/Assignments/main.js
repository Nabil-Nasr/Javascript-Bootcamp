//A001
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 / 3 % 190 % 10 / 400); // 0
//=================================================================

//A002
let num1 = 3;

// Solution One
console.log(num1 + num1); // 6

// Solution Two
console.log(`${num1 + num1++}`); // 6

// Solution Three
console.log(num1++ + true + true); // 6

// Solution Four
console.log(++num1 + false); // 6

// Solution Five
console.log(num1 + ""); // 6

// Solution Six
console.log(num1-- * true); // 6
//=================================================================

//A003
let num2 = "10";

// Solution One
console.log(num2 - false + true * num2); // 20

// Solution Two
console.log(Number(`${(-num2 - num2) * -true}`)); // 20

// Solution Three
console.log(parseInt(`${num2 * true + true * num2}`)); // 20

// Solution Four
console.log(num2-- + ++num2); // 20

// Solution Five
console.log(num2 + num2); // 20
//=================================================================

//A004
let points = 10;

points++ - ++points + points++;

console.log(points); // 13

points -= --points / (true + true) - true;

console.log(points); // 8;
//=================================================================

//tests defer attribute in script tag
console.log(its);