//first 
//A001
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000")); // 100000
console.log(0x186a0); // 100000
console.log(0b11000011010100000); // 100000
console.log(0o303240); // 100000
console.log(parseFloat("1e5")); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0000000); // 100000
//==========================================================

//A002
console.log(-Number.MIN_SAFE_INTEGER);// 9007199254740991
//==========================================================

//A003
console.log(Number.MAX_SAFE_INTEGER.toString().length);//16
//==========================================================

//A004
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
//==========================================================

//A005 
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
//==========================================================

//A006
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10
//==========================================================

//A007
console.log(Math.round(Math.random() * 10 % 4)); // 0 || 1 || 2 || 3 || 4
//==========================================================
//=====================================================================

//second
//A001
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.split("l")[0].toLowerCase().repeat(3)); // eee
//==========================================================

//A002
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
//==========================================================
//=====================================================================