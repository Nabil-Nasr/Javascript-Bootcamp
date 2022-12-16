//A001
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
mix = mix.map(char => isNaN(char) ? char : "").reduce((acc, current) => acc + current);
// Elzero
console.log(mix);
//======================================================

//A002
let myString = "EElllzzzzzzzeroo";
myString = myString.split("").filter((char, index, arr) => char !== arr[index - 1]).reduce((acc, current) => acc + current);
// Elzero
console.log(myString);
//======================================================

//A003
let myArray = ["E", "l", "z", ["e", "r"], "o"];
//without using myArray.flat()
myArray = myArray.reduce((acc, current) => Array.isArray(current) ? acc + current.reduce((acc, current) => acc + current) : acc + current, "");

//another way
// myArray = myArray.reduce((acc, current) => acc.concat(current), []).reduce((acc, current) => acc + current);

console.log(myArray);// Elzero
//======================================================

//A004
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let reversedNumbers = numsAndStrings.filter(num => !isNaN(num)).map(num => -num);
// [-1, -10, 10, 20, -5, -3]
console.log(reversedNumbers);
//======================================================

//A005
let nums = [2, 12, 11, 5, 10, 1, 99];
let num = nums.reduce((acc, current) => current % 2 == 1 ? acc + current : acc * current, 1);
// 500
console.log(num);
//======================================================
